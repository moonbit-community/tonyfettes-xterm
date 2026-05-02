///|
fn record_payload(payload : String?) -> String {
  match payload {
    Some(value) => value
    None => "none"
  }
}

///|
test "Parser disposables tolerate repeated disposal" {
  let osc = OscParser::new()
  let osc_disposable = osc.register_handler(
    1,
    OscHandler::from_callbacks(fn() { () }, fn(_) { () }, fn(_) { true }),
  )
  osc_disposable.dispose()
  osc_disposable.dispose()

  let dcs = DcsParser::new()
  let dcs_disposable = dcs.register_handler(
    1,
    DcsHandler::from_callbacks(fn(_) { () }, fn(_) { () }, fn(_) { true }),
  )
  dcs_disposable.dispose()
  dcs_disposable.dispose()

  let apc = ApcParser::new()
  let apc_disposable = apc.register_handler(
    1,
    ApcHandler::from_callbacks(fn() { () }, fn(_) { () }, fn(_) { true }),
  )
  apc_disposable.dispose()
  apc_disposable.dispose()
}

///|
test "OscParser parses identifier and fallback payload" {
  let reports : Array[String] = []
  let parser = OscParser::new()
  parser.set_handler_fallback(fn(id, action, payload) {
    reports.push("\{id}:\{action}:\{record_payload(payload)}")
  })

  parser.start()
  parser.put("12")
  parser.put("34;h")
  parser.put("ello")
  parser.end(true)

  guard reports ==
    ["1234:START:none", "1234:PUT:h", "1234:PUT:ello", "1234:END:true"] else {
    fail("OSC fallback should receive id, payload chunks, and end success")
  }
}

///|
test "OscParser handlers run newest first and bubble by return value" {
  let reports : Array[String] = []
  let parser = OscParser::new()
  parser.register_handler(
    1234,
    OscHandler::from_callbacks(
      fn() { reports.push("one:start") },
      fn(data) { reports.push("one:put:\{data}") },
      fn(success) {
        reports.push("one:end:\{success}")
        true
      },
    ),
  )
  |> ignore
  parser.register_handler(
    1234,
    OscHandler::from_callbacks(
      fn() { reports.push("two:start") },
      fn(data) { reports.push("two:put:\{data}") },
      fn(success) {
        reports.push("two:end:\{success}")
        false
      },
    ),
  )
  |> ignore

  parser.start()
  parser.put("1234;hello")
  parser.end(true)

  guard reports ==
    [
      "two:start", "one:start", "two:put:hello", "one:put:hello", "two:end:true",
      "one:end:true",
    ] else {
    fail("OSC handlers should run newest first and continue when false")
  }
}

///|
test "OscHandler factory buffers payload and respects dispose" {
  let reports : Array[String] = []
  let parser = OscParser::new()
  parser.register_handler(
    7,
    OscHandler::new(fn(data) {
      reports.push("one:\{data}")
      true
    }),
  )
  |> ignore
  let disposable = parser.register_handler(
    7,
    OscHandler::new(fn(data) {
      reports.push("two:\{data}")
      true
    }),
  )

  parser.start()
  parser.put("7;hello")
  parser.put(" world")
  parser.end(true)
  disposable.dispose()
  parser.start()
  parser.put("7;again")
  parser.end(true)

  guard reports == ["two:hello world", "one:again"] else {
    fail(
      "OSC string handler should buffer chunks and registrations should dispose",
    )
  }
}

///|
test "OscParser reset clear dispose and abort paths" {
  let reports : Array[String] = []
  let parser = OscParser::new()
  let disposable = parser.register_handler(
    7,
    OscHandler::from_callbacks(
      fn() { reports.push("start") },
      fn(data) { reports.push("put:\{data}") },
      fn(success) {
        reports.push("end:\{success}")
        true
      },
    ),
  )
  parser.register_handler(
    7,
    OscHandler::from_callbacks(fn() { () }, fn(_) { () }, fn(_) { false }),
  )
  |> ignore

  parser.start()
  parser.put("7;open")
  parser.reset()
  parser.end(true)

  parser.clear_handler(7)
  disposable.dispose()
  parser.set_handler_fallback(fn(id, action, payload) {
    reports.push("\{id}:\{action}:\{record_payload(payload)}")
  })
  parser.start()
  parser.put("8")
  parser.end(true)
  parser.end(true)

  parser.start()
  parser.put("bad")
  parser.put("ignored")
  parser.end(true)

  parser.dispose()
  parser.start()
  parser.put("7;quiet")
  parser.end(true)

  guard reports ==
    ["start", "put:open", "end:false", "8:START:none", "8:END:true"] else {
    fail("OSC reset, clear, abort, and dispose paths should be observable")
  }
}

///|
test "DcsParser handlers and fallback" {
  let reports : Array[String] = []
  let parser = DcsParser::new()
  parser.set_handler_fallback(fn(id, action, payload) {
    match payload {
      DcsParams(params) =>
        reports.push("\{id}:\{action}:\{params.params_slice()}")
      DcsData(data) => reports.push("\{id}:\{action}:\{data}")
      DcsSuccess(success) => reports.push("\{id}:\{action}:\{success}")
    }
  })

  parser.hook(1, Params::from_array([Param(1), Param(2)]))
  parser.put("abc")
  parser.unhook(true)
  guard reports == ["1:HOOK:[1, 2]", "1:PUT:abc", "1:UNHOOK:true"] else {
    fail("DCS fallback should receive hook params, payload, and unhook success")
  }

  reports.clear()
  parser.register_handler(
    2,
    DcsHandler::new(fn(data, params) {
      reports.push("\{params.params_slice()}:\{data}")
      true
    }),
  )
  |> ignore
  parser.hook(2, Params::from_array([Param(3)]))
  parser.put("xy")
  parser.put("z")
  parser.unhook(true)
  guard reports == ["[3]:xyz"] else {
    fail("DCS string handler should buffer payload")
  }
}

///|
test "DcsParser reset clear dispose and handler bubbling" {
  let reports : Array[String] = []
  let parser = DcsParser::new()
  let disposable = parser.register_handler(
    5,
    DcsHandler::from_callbacks(
      fn(params) { reports.push("one:hook:\{params.params_slice()}") },
      fn(data) { reports.push("one:put:\{data}") },
      fn(success) {
        reports.push("one:unhook:\{success}")
        true
      },
    ),
  )
  parser.register_handler(
    5,
    DcsHandler::from_callbacks(
      fn(params) { reports.push("two:hook:\{params.params_slice()}") },
      fn(data) { reports.push("two:put:\{data}") },
      fn(success) {
        reports.push("two:unhook:\{success}")
        false
      },
    ),
  )
  |> ignore

  parser.hook(5, Params::from_array([Param(0)]))
  parser.put("abc")
  parser.unhook(true)

  parser.hook(5, Params::from_array([Param(1)]))
  parser.reset()

  parser.clear_handler(5)
  disposable.dispose()
  parser.set_handler_fallback(fn(id, action, payload) {
    match payload {
      DcsParams(params) =>
        reports.push("\{id}:\{action}:\{params.params_slice()}")
      DcsData(data) => reports.push("\{id}:\{action}:\{data}")
      DcsSuccess(success) => reports.push("\{id}:\{action}:\{success}")
    }
  })
  parser.hook(5, Params::from_array([Param(9)]))
  parser.put("fallback")
  parser.unhook(false)

  parser.dispose()
  parser.hook(5, Params::from_array([Param(1)]))
  parser.put("quiet")
  parser.unhook(true)

  guard reports ==
    [
      "two:hook:[0]", "one:hook:[0]", "two:put:abc", "one:put:abc", "two:unhook:true",
      "one:unhook:true", "two:hook:[1]", "one:hook:[1]", "two:unhook:false", "one:unhook:false",
      "5:HOOK:[9]", "5:PUT:fallback", "5:UNHOOK:false",
    ] else {
    fail("DCS reset, clear, dispose, and bubbling should be covered")
  }
}

///|
test "DcsHandler string factory resets default params" {
  let reports : Array[String] = []
  let parser = DcsParser::new()
  parser.register_handler(
    9,
    DcsHandler::new(fn(data, params) {
      reports.push("\{params.params_slice()}:\{data}")
      true
    }),
  )
  |> ignore

  parser.hook(9, Params::from_array([Param(0)]))
  parser.put("a")
  parser.unhook(true)
  parser.hook(9, Params::from_array([Param(2), Param(3)]))
  parser.put("b")
  parser.unhook(true)

  guard reports == ["[0]:a", "[2, 3]:b"] else {
    fail("DCS string handler should reset default params between hooks")
  }
}

///|
test "ApcParser handlers and fallback" {
  let reports : Array[String] = []
  let parser = ApcParser::new()
  parser.set_handler_fallback(fn(id, action, payload) {
    reports.push("\{id}:\{action}:\{record_payload(payload)}")
  })
  parser.start(42)
  parser.put("data")
  parser.end(false)
  guard reports == ["42:START:none", "42:PUT:data", "42:END:false"] else {
    fail("APC fallback should receive lifecycle actions")
  }

  reports.clear()
  parser.register_handler(
    42,
    ApcHandler::new(fn(data) {
      reports.push(data)
      true
    }),
  )
  |> ignore
  parser.start(42)
  parser.put("a")
  parser.put("bc")
  parser.end(true)
  guard reports == ["abc"] else {
    fail("APC string handler should buffer payload")
  }
}

///|
test "ApcParser reset clear dispose and handler bubbling" {
  let reports : Array[String] = []
  let parser = ApcParser::new()
  let disposable = parser.register_handler(
    42,
    ApcHandler::from_callbacks(
      fn() { reports.push("one:start") },
      fn(data) { reports.push("one:put:\{data}") },
      fn(success) {
        reports.push("one:end:\{success}")
        true
      },
    ),
  )
  parser.register_handler(
    42,
    ApcHandler::from_callbacks(
      fn() { reports.push("two:start") },
      fn(data) { reports.push("two:put:\{data}") },
      fn(success) {
        reports.push("two:end:\{success}")
        false
      },
    ),
  )
  |> ignore

  parser.start(42)
  parser.put("abc")
  parser.end(true)

  parser.start(42)
  parser.reset()

  parser.clear_handler(42)
  disposable.dispose()
  parser.set_handler_fallback(fn(id, action, payload) {
    reports.push("\{id}:\{action}:\{record_payload(payload)}")
  })
  parser.start(42)
  parser.put("fallback")
  parser.end(false)

  parser.dispose()
  parser.start(42)
  parser.put("quiet")
  parser.end(true)

  guard reports ==
    [
      "two:start", "one:start", "two:put:abc", "one:put:abc", "two:end:true", "one:end:true",
      "two:start", "one:start", "two:end:false", "one:end:false", "42:START:none",
      "42:PUT:fallback", "42:END:false",
    ] else {
    fail("APC reset, clear, dispose, and bubbling should be covered")
  }
}
