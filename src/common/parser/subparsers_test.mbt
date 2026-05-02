///|
fn record_payload(payload : String?) -> String {
  match payload {
    Some(value) => value
    None => "none"
  }
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
