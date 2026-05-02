///|
test "Params add params and subparams" {
  let params = Params::new()
  params.add_param(1)
  params.add_sub_param(2)
  params.add_sub_param(3)
  params.add_param(12345)
  params.add_sub_param(-1)

  guard params.length() == 2 && params.sub_params_length() == 3 else {
    fail("length counters should follow stored params")
  }
  guard params.to_array() ==
    [Param(1), SubParams([2, 3]), Param(12345), SubParams([-1])] else {
    fail("to_array should interleave subparams after their owning param")
  }
}

///|
test "Params ignores subparams without a previous param" {
  let params = Params::new()
  params.add_sub_param(2)
  params.add_sub_param(3)
  guard params.to_array() == [] else {
    fail("subparams without a param should be ignored")
  }
}

///|
test "Params reset and from_array" {
  let params = Params::from_array([
    Param(38),
    SubParams([2, 50, 100, 150]),
    Param(5),
    SubParams([]),
    Param(6),
  ])
  guard params.to_array() ==
    [Param(38), SubParams([2, 50, 100, 150]), Param(5), Param(6)] else {
    fail("from_array should drop empty subparam arrays")
  }

  params.reset()
  guard params.to_array() == [] else { fail("reset should clear params") }
  params.add_param(1)
  guard params.to_array() == [Param(1)] else {
    fail("params should be reusable after reset")
  }
}

///|
test "Params clone and subparam access" {
  let params = Params::from_array([
    Param(1),
    SubParams([2, 3]),
    Param(7),
    Param(12345),
    SubParams([-1]),
  ])
  let cloned = params.clone()
  guard cloned.to_array() == params.to_array() else {
    fail("clone should preserve params")
  }
  guard params.has_sub_params(0) && params.get_sub_params(0) == Some([2, 3]) else {
    fail("subparams should be available by owner index")
  }
  guard !params.has_sub_params(1) && params.get_sub_params(1) == None else {
    fail("missing subparams should return None")
  }
  guard params.get_sub_params_all().get(2) == Some([-1]) else {
    fail("get_sub_params_all should map owners to copied subparams")
  }
}

///|
test "Params parse zdm defaults and typical SGR styles" {
  let params = Params::new()
  params.parse_zdm([""])
  guard params.to_array() == [Param(0)] else {
    fail("empty params should default to zero in ZDM")
  }

  params.parse_zdm([":"])
  guard params.to_array() == [Param(0), SubParams([-1])] else {
    fail("empty subparams should default to -1")
  }

  params.parse_zdm(["0;4;38:2::50:100:150;48:5:22"])
  guard params.to_array() ==
    [
      Param(0),
      Param(4),
      Param(38),
      SubParams([2, -1, 50, 100, 150]),
      Param(48),
      SubParams([5, 22]),
    ] else {
    fail("colon-style SGR params should preserve subparams")
  }
}

///|
test "Params restrictions and clamp" {
  let params = Params::new(max_length=3, max_subparams_length=3)
  params.parse_zdm(["1;2;3;4;5"])
  guard params.to_array() == [Param(1), Param(2), Param(3)] else {
    fail("overlong params should be ignored")
  }

  params.parse_zdm(["4;38:2::50:100:150;48:5:22"])
  guard params.to_array() ==
    [Param(4), Param(38), SubParams([2, -1, 50]), Param(48)] else {
    fail("overlong subparams should be ignored")
  }

  params.parse_zdm(["2147483648"])
  guard params.to_array() == [Param(0x7FFFFFFF)] else {
    fail("params should clamp to positive int32 max")
  }
  params.parse_zdm([":2147483648"])
  guard params.to_array() == [Param(0), SubParams([0x7FFFFFFF])] else {
    fail("subparams should clamp to positive int32 max")
  }
}

///|
test "Params carries subdigit state across chunks" {
  let params = Params::new()
  params.parse_zdm(["1:22:33", "44"])
  guard params.to_array() == [Param(1), SubParams([22, 3344])] else {
    fail("subparam digit mode should carry across chunks")
  }
}
