///|
fn ident_suffix(parser : EscapeSequenceParser, ident : Int) -> (String, String) {
  let value = parser.ident_to_string(ident)
  if value.length() == 0 {
    return ("", "")
  }
  (value[:value.length() - 1].to_owned(), value[value.length() - 1:].to_owned())
}

///|
test "TransitionTable represents VT500 core transitions" {
  let table = vt500_transition_table()
  guard table.length() == 4257 else { fail("table size should match xterm.js") }
  guard transition_action(table.transition(ParserStateGround, 0x41)) ==
    ParserActionPrint else {
    fail("printable ground bytes should print")
  }
  guard transition_state(table.transition(ParserStateEscape, 0x5B)) ==
    ParserStateCsiEntry else {
    fail("ESC [ should enter CSI")
  }
  guard transition_action(table.transition(ParserStateCsiParam, 0x6D)) ==
    ParserActionCsiDispatch else {
    fail("CSI final bytes should dispatch")
  }
}

///|
test "EscapeSequenceParser initial and reset state" {
  let parser = EscapeSequenceParser::new()
  guard parser.initial_state() == ParserStateGround &&
    parser.current_state() == ParserStateGround &&
    parser.params().to_array() == [Param(0)] &&
    parser.collect_string() == "" else {
    fail("parser should initialize like xterm.js")
  }
  parser.set_current_state(ParserStateCsiParam)
  parser.params().add_param(123)
  parser.parse("\u{1b}")
  parser.reset()
  guard parser.current_state() == ParserStateGround &&
    parser.params().to_array() == [Param(0)] &&
    parser.collect_string() == "" else {
    fail("reset should restore ground state and ZDM params")
  }
}

///|
test "EscapeSequenceParser print and execute dispatch" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_print_handler(fn(data) { reports.push("print:\{data}") })
  parser.set_execute_handler_fallback(fn(code) { reports.push("exe:\{code}") })

  parser.parse("ab\u{0007}c")

  guard reports == ["print:ab", "exe:7", "print:c"] else {
    fail("parser should group printable runs and execute C0 controls")
  }
}

///|
test "EscapeSequenceParser ESC and CSI fallback dispatch" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_esc_handler_fallback(fn(ident) {
    let (collect, final_byte) = ident_suffix(parser, ident)
    reports.push("esc:\{collect}:\{final_byte}")
  })
  parser.set_csi_handler_fallback(fn(ident, params) {
    let (collect, final_byte) = ident_suffix(parser, ident)
    reports.push("csi:\{collect}:\{params.params_slice()}:\{final_byte}")
  })

  parser.parse("\u{1b}7\u{1b}[31;2m")

  guard reports == ["esc::7", "csi::[31, 2]:m"] else {
    fail("ESC and CSI fallbacks should expose identifier and params")
  }
  guard parser.current_state() == ParserStateGround else {
    fail("complete ESC/CSI sequences should return to ground")
  }
}

///|
test "EscapeSequenceParser registered CSI handlers run newest first" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  let id : FunctionIdentifier = {
    prefix: None,
    intermediates: None,
    final_byte: "m",
  }
  parser.register_csi_handler(id, fn(params) {
    reports.push("one:\{params.params_slice()}")
    true
  })
  |> ignore
  parser.register_csi_handler(id, fn(params) {
    reports.push("two:\{params.params_slice()}")
    false
  })
  |> ignore

  parser.parse("\u{1b}[1;2m")

  guard reports == ["two:[1, 2]", "one:[1, 2]"] else {
    fail("CSI handlers should bubble when newer handler returns false")
  }
}

///|
test "EscapeSequenceParser OSC sequence" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_osc_handler_fallback(fn(id, action, payload) {
    reports.push("\{id}:\{action}:\{record_payload(payload)}")
  })

  parser.parse("\u{1b}]123;hello\u{0007}")

  guard reports == ["123:START:none", "123:PUT:hello", "123:END:true"] else {
    fail("OSC parser should parse id, payload, and BEL terminator")
  }
}

///|
test "EscapeSequenceParser DCS sequence" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_dcs_handler_fallback(fn(ident, action, payload) {
    let ident_string = parser.ident_to_string(ident)
    match payload {
      DcsParams(params) =>
        reports.push("\{ident_string}:\{action}:\{params.params_slice()}")
      DcsData(data) => reports.push("\{ident_string}:\{action}:\{data}")
      DcsSuccess(success) =>
        reports.push("\{ident_string}:\{action}:\{success}")
    }
  })

  parser.parse("\u{1b}P1;2+pabc\u{1b}\\")

  guard reports == ["+p:HOOK:[1, 2]", "+p:PUT:abc", "+p:UNHOOK:true"] else {
    fail("DCS parser should hook, pass payload, and unhook on ST")
  }
  guard parser.current_state() == ParserStateGround else {
    fail("7-bit ST should leave parser in ground")
  }
}

///|
test "EscapeSequenceParser APC sequence" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_apc_handler_fallback(fn(ident, action, payload) {
    reports.push(
      "\{parser.ident_to_string(ident)}:\{action}:\{record_payload(payload)}",
    )
  })

  parser.parse("\u{1b}_+pabc\u{1b}\\")

  guard reports == ["+p:START:none", "+p:PUT:abc", "+p:END:true"] else {
    fail("APC parser should start, pass payload, and end on ST")
  }
}
