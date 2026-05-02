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
    parser.collect() == 0 &&
    parser.preceding_join_state() == 0 &&
    parser.transition_table().length() == 4257 &&
    parser.params().to_array() == [Param(0)] &&
    parser.collect_string() == "" else {
    fail("parser should initialize like xterm.js")
  }
  parser.osc_parser().start()
  parser.dcs_parser().put("noop")
  parser.apc_parser().put("noop")
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
test "EscapeSequenceParser default handlers and clear print handler are safe" {
  let parser = EscapeSequenceParser::new()
  parser.parse("a\u{007f}\u{0080}\u{009c}\u{1b}7\u{1b}[m")

  let reports : Array[String] = []
  parser.set_print_handler(fn(data) { reports.push(data) })
  parser.parse("中")
  parser.clear_print_handler()
  parser.parse("ignored")

  guard reports == ["中"] else {
    fail("print handler should receive non-ASCII chunks until cleared")
  }
}

///|
test "EscapeSequenceParser handles partial and unknown transitions" {
  let parser = EscapeSequenceParser::new()
  parser.parse("\u{1b}[12")
  guard parser.current_state() == ParserStateCsiParam &&
    parser.params().to_array() == [Param(12)] else {
    fail("partial CSI params should stay buffered in CSI param state")
  }

  let table = TransitionTable::new(4257)
  table.set_default(99, ParserStateGround)
  let custom = EscapeSequenceParser::new(transitions=table)
  custom.parse("A")
  guard custom.current_state() == ParserStateGround else {
    fail("unknown parser actions should still update to the transition state")
  }
}

///|
test "EscapeSequenceParser print and execute dispatch" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_print_handler(fn(data) { reports.push("print:\{data}") })
  parser.set_execute_handler_fallback(fn(code) { reports.push("exe:\{code}") })

  parser.parse("ab\u{0007}c\u{0080}")

  guard reports == ["print:ab", "exe:7", "print:c", "exe:128"] else {
    fail("parser should group printable runs and execute C0 controls")
  }

  parser.set_execute_handler("\u{0080}", fn(code) {
    reports.push("handled:\{code}")
    true
  })
  parser.parse("\u{0080}")
  parser.clear_execute_handler("\u{0080}")
  parser.parse("\u{0080}")
  guard reports[reports.length() - 2] == "handled:128" &&
    reports[reports.length() - 1] == "exe:128" else {
    fail("execute handlers should be replaceable and clearable")
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

  reports.clear()
  parser.set_csi_handler_fallback(fn(ident, params) {
    reports.push("\{parser.ident_to_string(ident)}:\{params.params_slice()}")
    match params.get_sub_params(0) {
      Some(subparams) => reports.push("subs:\{subparams}")
      None => ()
    }
  })
  parser.clear_csi_handler(id)
  let disposable_one = parser.register_csi_handler(id, fn(_) { false })
  let disposable_two = parser.register_csi_handler(id, fn(_) { false })
  parser.parse("\u{1b}[3m")
  parser.parse("\u{1b}[38:2::1:2:3m")
  disposable_two.dispose()
  disposable_two.dispose()
  parser.clear_csi_handler(id)
  disposable_one.dispose()

  guard reports == ["m:[3]", "m:[38]", "subs:[2, -1, 1, 2, 3]"] else {
    fail("CSI handlers should fall back when every handler returns false")
  }
}

///|
test "EscapeSequenceParser registered ESC handlers bubble and clear" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  let id : FunctionIdentifier = {
    prefix: None,
    intermediates: None,
    final_byte: "7",
  }
  parser.set_esc_handler_fallback(fn(ident) {
    reports.push("fallback:\{parser.ident_to_string(ident)}")
  })
  let disposable_one = parser.register_esc_handler(id, fn() {
    reports.push("one")
    false
  })
  let disposable_two = parser.register_esc_handler(id, fn() {
    reports.push("two")
    false
  })

  parser.parse("\u{1b}7")
  disposable_two.dispose()
  disposable_two.dispose()
  parser.clear_esc_handler(id)
  disposable_one.dispose()
  parser.parse("\u{1b}7")

  guard reports == ["two", "one", "fallback:7", "fallback:7"] else {
    fail("ESC handlers should bubble, dispose, clear, and fall back")
  }
}

///|
test "EscapeSequenceParser identifiers accept prefix and intermediates" {
  let parser = EscapeSequenceParser::new()
  let ident = parser.identifier({
    prefix: Some("?"),
    intermediates: Some(" !"),
    final_byte: "p",
  })
  guard parser.ident_to_string(ident) == "? !p" else {
    fail("identifier should pack prefix, intermediates, and final byte")
  }

  let empty_prefix = parser.identifier({
    prefix: Some(""),
    intermediates: None,
    final_byte: "m",
  })
  guard parser.ident_to_string(empty_prefix) == "m" else {
    fail("empty prefix should not affect identifier packing")
  }
}

///|
test "panic EscapeSequenceParser rejects long prefix identifiers" {
  let parser = EscapeSequenceParser::new()
  ignore(
    parser.identifier({
      prefix: Some("??"),
      intermediates: None,
      final_byte: "m",
    }),
  )
}

///|
test "panic EscapeSequenceParser rejects invalid prefix identifiers" {
  let parser = EscapeSequenceParser::new()
  ignore(
    parser.identifier({
      prefix: Some("a"),
      intermediates: None,
      final_byte: "m",
    }),
  )
}

///|
test "panic EscapeSequenceParser rejects long intermediate identifiers" {
  let parser = EscapeSequenceParser::new()
  ignore(
    parser.identifier({
      prefix: None,
      intermediates: Some("   "),
      final_byte: "m",
    }),
  )
}

///|
test "panic EscapeSequenceParser rejects invalid intermediate identifiers" {
  let parser = EscapeSequenceParser::new()
  ignore(
    parser.identifier({
      prefix: None,
      intermediates: Some("0"),
      final_byte: "m",
    }),
  )
}

///|
test "panic EscapeSequenceParser rejects long final identifiers" {
  let parser = EscapeSequenceParser::new()
  ignore(
    parser.identifier({ prefix: None, intermediates: None, final_byte: "mm" }),
  )
}

///|
test "panic EscapeSequenceParser rejects out of range final identifiers" {
  let parser = EscapeSequenceParser::new()
  ignore(
    parser.identifier({ prefix: None, intermediates: None, final_byte: "0" }),
  )
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
test "EscapeSequenceParser registered string handlers delegate to subparsers" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  let dcs_id : FunctionIdentifier = {
    prefix: None,
    intermediates: Some("+"),
    final_byte: "p",
  }
  let apc_id : FunctionIdentifier = {
    prefix: None,
    intermediates: Some("+"),
    final_byte: "p",
  }

  parser.register_osc_handler(
    9,
    OscHandler::new(fn(data) {
      reports.push("osc:\{data}")
      true
    }),
  )
  |> ignore
  parser.register_dcs_handler(
    dcs_id,
    DcsHandler::new(fn(data, params) {
      reports.push("dcs:\{params.params_slice()}:\{data}")
      true
    }),
  )
  |> ignore
  parser.register_apc_handler(
    apc_id,
    ApcHandler::new(fn(data) {
      reports.push("apc:\{data}")
      true
    }),
  )
  |> ignore

  parser.parse("\u{1b}]9;hello\u{0007}")
  parser.parse("\u{1b}P1+pabc\u{1b}\\")
  parser.parse("\u{1b}_+pxyz\u{1b}\\")

  parser.clear_osc_handler(9)
  parser.clear_dcs_handler(dcs_id)
  parser.clear_apc_handler(apc_id)
  parser.parse("\u{1b}]9;ignored\u{0007}")
  parser.parse("\u{1b}P1+pignored\u{1b}\\")
  parser.parse("\u{1b}_+pignored\u{1b}\\")

  guard reports == ["osc:hello", "dcs:[1]:abc", "apc:xyz"] else {
    fail("registered OSC, DCS, and APC handlers should receive payloads")
  }
}

///|
test "EscapeSequenceParser handles ST as ESC continuation in strings" {
  let parser = EscapeSequenceParser::new()
  let reports : Array[String] = []
  parser.set_osc_handler_fallback(fn(id, action, payload) {
    reports.push("\{id}:\{action}:\{record_payload(payload)}")
  })
  parser.parse("\u{1b}]1;title\u{1b}\\7")

  guard reports == ["1:START:none", "1:PUT:title", "1:END:true"] &&
    parser.current_state() == ParserStateGround else {
    fail("OSC ST should finish the string and consume the ESC continuation")
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
