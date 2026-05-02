///|
pub(all) struct FunctionIdentifier {
  prefix : String?
  intermediates : String?
  final_byte : String
}

///|
priv struct CsiHandlerEntry {
  id : Int
  handler : (Params) -> Bool
}

///|
priv struct EscHandlerEntry {
  id : Int
  handler : () -> Bool
}

///|
struct EscapeSequenceParser {
  initial_state : Int
  mut current_state : Int
  mut preceding_join_state : Int
  params : Params
  mut collect : Int
  transitions : TransitionTable
  mut next_id : Int
  mut print_handler : (String) -> Unit
  execute_handlers : Map[Int, (Int) -> Bool]
  csi_handlers : Map[Int, Array[CsiHandlerEntry]]
  esc_handlers : Map[Int, Array[EscHandlerEntry]]
  osc_parser : OscParser
  dcs_parser : DcsParser
  apc_parser : ApcParser
  mut execute_fallback : (Int) -> Unit
  mut csi_fallback : (Int, Params) -> Unit
  mut esc_fallback : (Int) -> Unit
}

///|
pub fn EscapeSequenceParser::new(
  transitions? : TransitionTable = vt500_transition_table(),
) -> EscapeSequenceParser {
  let parser = {
    initial_state: ParserStateGround,
    current_state: ParserStateGround,
    preceding_join_state: 0,
    params: Params::from_array([Param(0)]),
    collect: 0,
    transitions,
    next_id: 0,
    print_handler: fn(_) { () },
    execute_handlers: {},
    csi_handlers: {},
    esc_handlers: {},
    osc_parser: OscParser::new(),
    dcs_parser: DcsParser::new(),
    apc_parser: ApcParser::new(),
    execute_fallback: fn(_) { () },
    csi_fallback: fn(_, _) { () },
    esc_fallback: fn(_) { () },
  }
  parser.register_esc_handler(
    { prefix: None, intermediates: None, final_byte: "\\" },
    fn() { true },
  )
  |> ignore
  parser
}

///|
pub fn EscapeSequenceParser::initial_state(self : EscapeSequenceParser) -> Int {
  self.initial_state
}

///|
pub fn EscapeSequenceParser::current_state(self : EscapeSequenceParser) -> Int {
  self.current_state
}

///|
pub fn EscapeSequenceParser::set_current_state(
  self : EscapeSequenceParser,
  state : Int,
) -> Unit {
  self.current_state = state
}

///|
pub fn EscapeSequenceParser::params(self : EscapeSequenceParser) -> Params {
  self.params
}

///|
pub fn EscapeSequenceParser::collect(self : EscapeSequenceParser) -> Int {
  self.collect
}

///|
pub fn EscapeSequenceParser::collect_string(
  self : EscapeSequenceParser,
) -> String {
  self.ident_to_string(self.collect)
}

///|
pub fn EscapeSequenceParser::preceding_join_state(
  self : EscapeSequenceParser,
) -> Int {
  self.preceding_join_state
}

///|
pub fn EscapeSequenceParser::transition_table(
  self : EscapeSequenceParser,
) -> TransitionTable {
  self.transitions
}

///|
pub fn EscapeSequenceParser::osc_parser(
  self : EscapeSequenceParser,
) -> OscParser {
  self.osc_parser
}

///|
pub fn EscapeSequenceParser::dcs_parser(
  self : EscapeSequenceParser,
) -> DcsParser {
  self.dcs_parser
}

///|
pub fn EscapeSequenceParser::apc_parser(
  self : EscapeSequenceParser,
) -> ApcParser {
  self.apc_parser
}

///|
fn first_code_unit(value : String) -> Int {
  if value.length() == 0 {
    return 0
  }
  value[0].to_int()
}

///|
pub fn EscapeSequenceParser::identifier(
  _self : EscapeSequenceParser,
  id : FunctionIdentifier,
  final_start? : Int = 0x40,
  final_end? : Int = 0x7E,
) -> Int {
  let mut result = 0
  match id.prefix {
    Some(prefix) => {
      guard prefix.length() <= 1 else {
        abort("only one byte as prefix supported")
      }
      result = first_code_unit(prefix)
      guard result == 0 || (result >= 0x3C && result <= 0x3F) else {
        abort("prefix must be in range 0x3c .. 0x3f")
      }
    }
    None => ()
  }
  match id.intermediates {
    Some(intermediates) => {
      guard intermediates.length() <= 2 else {
        abort("only two bytes as intermediates are supported")
      }
      for i = 0; i < intermediates.length(); i = i + 1 {
        let intermediate = intermediates[i].to_int()
        guard intermediate >= 0x20 && intermediate <= 0x2F else {
          abort("intermediate must be in range 0x20 .. 0x2f")
        }
        result = (result << 8) | intermediate
      }
    }
    None => ()
  }
  guard id.final_byte.length() == 1 else {
    abort("final must be a single byte")
  }
  let final_code = id.final_byte[0].to_int()
  guard final_code >= final_start && final_code <= final_end else {
    abort("final out of range")
  }
  (result << 8) | final_code
}

///|
pub fn EscapeSequenceParser::ident_to_string(
  _self : EscapeSequenceParser,
  ident : Int,
) -> String {
  let mut value = ident
  let mut result = ""
  while value != 0 {
    result = String::from_array([(value & 0xFF).unsafe_to_char()]) + result
    value = value >> 8
  }
  result
}

///|
pub fn EscapeSequenceParser::reset(self : EscapeSequenceParser) -> Unit {
  self.current_state = self.initial_state
  self.osc_parser.reset()
  self.dcs_parser.reset()
  self.apc_parser.reset()
  self.params.reset_zdm()
  self.collect = 0
  self.preceding_join_state = 0
}

///|
pub fn EscapeSequenceParser::set_print_handler(
  self : EscapeSequenceParser,
  handler : (String) -> Unit,
) -> Unit {
  self.print_handler = handler
}

///|
pub fn EscapeSequenceParser::clear_print_handler(
  self : EscapeSequenceParser,
) -> Unit {
  self.print_handler = fn(_) { () }
}

///|
fn register_csi_entry(
  handlers : Map[Int, Array[CsiHandlerEntry]],
  ident : Int,
  id : Int,
  handler : (Params) -> Bool,
) -> Disposable {
  let list = match handlers.get(ident) {
    Some(list) => list
    None => {
      let list : Array[CsiHandlerEntry] = []
      handlers[ident] = list
      list
    }
  }
  list.push({ id, handler })
  Disposable(fn() {
    match handlers.get(ident) {
      Some(list) =>
        match list.search_by(entry => entry.id == id) {
          Some(index) => list.remove(index) |> ignore
          None => ()
        }
      None => ()
    }
  })
}

///|
fn register_esc_entry(
  handlers : Map[Int, Array[EscHandlerEntry]],
  ident : Int,
  id : Int,
  handler : () -> Bool,
) -> Disposable {
  let list = match handlers.get(ident) {
    Some(list) => list
    None => {
      let list : Array[EscHandlerEntry] = []
      handlers[ident] = list
      list
    }
  }
  list.push({ id, handler })
  Disposable(fn() {
    match handlers.get(ident) {
      Some(list) =>
        match list.search_by(entry => entry.id == id) {
          Some(index) => list.remove(index) |> ignore
          None => ()
        }
      None => ()
    }
  })
}

///|
pub fn EscapeSequenceParser::register_csi_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
  handler : (Params) -> Bool,
) -> Disposable {
  let ident = self.identifier(id)
  let registration_id = self.next_id
  self.next_id += 1
  register_csi_entry(self.csi_handlers, ident, registration_id, handler)
}

///|
pub fn EscapeSequenceParser::clear_csi_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
) -> Unit {
  self.csi_handlers.remove(self.identifier(id))
}

///|
pub fn EscapeSequenceParser::set_csi_handler_fallback(
  self : EscapeSequenceParser,
  handler : (Int, Params) -> Unit,
) -> Unit {
  self.csi_fallback = handler
}

///|
pub fn EscapeSequenceParser::register_esc_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
  handler : () -> Bool,
) -> Disposable {
  let ident = self.identifier(id, final_start=0x30, final_end=0x7E)
  let registration_id = self.next_id
  self.next_id += 1
  register_esc_entry(self.esc_handlers, ident, registration_id, handler)
}

///|
pub fn EscapeSequenceParser::clear_esc_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
) -> Unit {
  self.esc_handlers.remove(
    self.identifier(id, final_start=0x30, final_end=0x7E),
  )
}

///|
pub fn EscapeSequenceParser::set_esc_handler_fallback(
  self : EscapeSequenceParser,
  handler : (Int) -> Unit,
) -> Unit {
  self.esc_fallback = handler
}

///|
pub fn EscapeSequenceParser::set_execute_handler(
  self : EscapeSequenceParser,
  flag : String,
  handler : (Int) -> Bool,
) -> Unit {
  self.execute_handlers[first_code_unit(flag)] = handler
}

///|
pub fn EscapeSequenceParser::clear_execute_handler(
  self : EscapeSequenceParser,
  flag : String,
) -> Unit {
  self.execute_handlers.remove(first_code_unit(flag))
}

///|
pub fn EscapeSequenceParser::set_execute_handler_fallback(
  self : EscapeSequenceParser,
  handler : (Int) -> Unit,
) -> Unit {
  self.execute_fallback = handler
}

///|
pub fn EscapeSequenceParser::register_dcs_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
  handler : DcsHandler,
) -> Disposable {
  self.dcs_parser.register_handler(self.identifier(id), handler)
}

///|
pub fn EscapeSequenceParser::clear_dcs_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
) -> Unit {
  self.dcs_parser.clear_handler(self.identifier(id))
}

///|
pub fn EscapeSequenceParser::set_dcs_handler_fallback(
  self : EscapeSequenceParser,
  handler : (Int, String, DcsFallbackPayload) -> Unit,
) -> Unit {
  self.dcs_parser.set_handler_fallback(handler)
}

///|
pub fn EscapeSequenceParser::register_osc_handler(
  self : EscapeSequenceParser,
  ident : Int,
  handler : OscHandler,
) -> Disposable {
  self.osc_parser.register_handler(ident, handler)
}

///|
pub fn EscapeSequenceParser::clear_osc_handler(
  self : EscapeSequenceParser,
  ident : Int,
) -> Unit {
  self.osc_parser.clear_handler(ident)
}

///|
pub fn EscapeSequenceParser::set_osc_handler_fallback(
  self : EscapeSequenceParser,
  handler : (Int, String, String?) -> Unit,
) -> Unit {
  self.osc_parser.set_handler_fallback(handler)
}

///|
pub fn EscapeSequenceParser::register_apc_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
  handler : ApcHandler,
) -> Disposable {
  self.apc_parser.register_handler(
    self.identifier(
      {
        prefix: None,
        intermediates: id.intermediates,
        final_byte: id.final_byte,
      },
      final_start=0x30,
      final_end=0x7E,
    ),
    handler,
  )
}

///|
pub fn EscapeSequenceParser::clear_apc_handler(
  self : EscapeSequenceParser,
  id : FunctionIdentifier,
) -> Unit {
  self.apc_parser.clear_handler(
    self.identifier(
      {
        prefix: None,
        intermediates: id.intermediates,
        final_byte: id.final_byte,
      },
      final_start=0x30,
      final_end=0x7E,
    ),
  )
}

///|
pub fn EscapeSequenceParser::set_apc_handler_fallback(
  self : EscapeSequenceParser,
  handler : (Int, String, String?) -> Unit,
) -> Unit {
  self.apc_parser.set_handler_fallback(handler)
}

///|
fn is_printable(code : Int) -> Bool {
  code >= 0x20 && (code <= 0x7E || code >= NonAsciiPrintable)
}

///|
fn is_osc_put_continue(code : Int) -> Bool {
  code >= 0x20 && !(code > 0x7F && code < NonAsciiPrintable)
}

///|
fn is_dcs_put_stop(code : Int) -> Bool {
  code == 0x18 ||
  code == 0x1A ||
  code == 0x1B ||
  (code > 0x7F && code < NonAsciiPrintable)
}

///|
fn is_apc_put_continue(code : Int) -> Bool {
  (code >= 0x20 && code < 0x7F) ||
  (code >= 0x08 && code < 0x0E) ||
  code >= NonAsciiPrintable
}

///|
fn EscapeSequenceParser::run_csi_handlers(
  self : EscapeSequenceParser,
  ident : Int,
) -> Unit {
  match self.csi_handlers.get(ident) {
    Some(handlers) => {
      let mut handled = false
      for i = handlers.length() - 1; i >= 0; i = i - 1 {
        if (handlers[i].handler)(self.params) {
          handled = true
          break
        }
      }
      if !handled {
        (self.csi_fallback)(ident, self.params)
      }
    }
    None => (self.csi_fallback)(ident, self.params)
  }
}

///|
fn EscapeSequenceParser::run_esc_handlers(
  self : EscapeSequenceParser,
  ident : Int,
) -> Unit {
  match self.esc_handlers.get(ident) {
    Some(handlers) => {
      let mut handled = false
      for i = handlers.length() - 1; i >= 0; i = i - 1 {
        if (handlers[i].handler)() {
          handled = true
          break
        }
      }
      if !handled {
        (self.esc_fallback)(ident)
      }
    }
    None => (self.esc_fallback)(ident)
  }
}

///|
fn EscapeSequenceParser::execute(
  self : EscapeSequenceParser,
  code : Int,
) -> Unit {
  match self.execute_handlers.get(code) {
    Some(handler) => handler(code) |> ignore
    None => (self.execute_fallback)(code)
  }
  self.preceding_join_state = 0
}

///|
pub fn EscapeSequenceParser::parse(
  self : EscapeSequenceParser,
  data : String,
) -> Unit {
  let mut i = 0
  while i < data.length() {
    let mut code = data[i].to_int()
    if code < 0x18 && self.current_state <= ParserStateCsiIgnore {
      self.execute(code)
      i += 1
      continue
    }
    let lookup_code = if code < NonAsciiPrintable {
      code
    } else {
      NonAsciiPrintable
    }
    let mut transition = self.transitions.transition(
      self.current_state,
      lookup_code,
    )
    match transition_action(transition) {
      ParserActionPrint => {
        let start = i
        i += 1
        while i < data.length() && is_printable(data[i].to_int()) {
          i += 1
        }
        (self.print_handler)(data[start:i].to_owned())
        i -= 1
      }
      ParserActionExecute => self.execute(code)
      ParserActionIgnore => ()
      ParserActionError => ()
      ParserActionCsiDispatch => {
        self.run_csi_handlers((self.collect << 8) | code)
        self.preceding_join_state = 0
      }
      ParserActionParam =>
        while true {
          match code {
            0x3B => self.params.add_param(0)
            0x3A => self.params.add_sub_param(-1)
            _ => self.params.add_digit(code - 48)
          }
          if i + 1 >= data.length() {
            break
          }
          let next = data[i + 1].to_int()
          if !(next > 0x2F && next < 0x3C) {
            break
          }
          i += 1
          code = next
        }
      ParserActionCollect => self.collect = (self.collect << 8) | code
      ParserActionEscDispatch => {
        self.run_esc_handlers((self.collect << 8) | code)
        self.preceding_join_state = 0
      }
      ParserActionClear => {
        self.params.reset_zdm()
        self.collect = 0
      }
      ParserActionDcsHook =>
        self.dcs_parser.hook((self.collect << 8) | code, self.params)
      ParserActionDcsPut => {
        let start = i
        i += 1
        while i < data.length() && !is_dcs_put_stop(data[i].to_int()) {
          i += 1
        }
        self.dcs_parser.put(data[start:i].to_owned())
        i -= 1
      }
      ParserActionDcsUnhook => {
        self.dcs_parser.unhook(code != 0x18 && code != 0x1A)
        if code == 0x1B {
          transition = (transition_action(transition) << TransitionActionShift) |
            ParserStateEscape
        }
        self.params.reset_zdm()
        self.collect = 0
        self.preceding_join_state = 0
      }
      ParserActionOscStart => self.osc_parser.start()
      ParserActionOscPut => {
        let start = i
        i += 1
        while i < data.length() && is_osc_put_continue(data[i].to_int()) {
          i += 1
        }
        self.osc_parser.put(data[start:i].to_owned())
        i -= 1
      }
      ParserActionOscEnd => {
        self.osc_parser.end(code != 0x18 && code != 0x1A)
        if code == 0x1B {
          transition = (transition_action(transition) << TransitionActionShift) |
            ParserStateEscape
        }
        self.params.reset_zdm()
        self.collect = 0
        self.preceding_join_state = 0
      }
      ParserActionApcStart => self.apc_parser.start((self.collect << 8) | code)
      ParserActionApcPut => {
        let start = i
        i += 1
        while i < data.length() && is_apc_put_continue(data[i].to_int()) {
          i += 1
        }
        self.apc_parser.put(data[start:i].to_owned())
        i -= 1
      }
      ParserActionApcEnd => {
        self.apc_parser.end(code != 0x18 && code != 0x1A)
        if code == 0x1B {
          transition = (transition_action(transition) << TransitionActionShift) |
            ParserStateEscape
        }
        self.params.reset_zdm()
        self.collect = 0
        self.preceding_join_state = 0
      }
      _ => ()
    }
    self.current_state = transition_state(transition)
    i += 1
  }
}
