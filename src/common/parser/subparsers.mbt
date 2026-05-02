///|
priv struct OscHandlerEntry {
  id : Int
  handler : OscHandler
}

///|
priv struct DcsHandlerEntry {
  id : Int
  handler : DcsHandler
}

///|
priv struct ApcHandlerEntry {
  id : Int
  handler : ApcHandler
}

///|
struct OscHandler {
  start_cb : () -> Unit
  put_cb : (String) -> Unit
  end_cb : (Bool) -> Bool
}

///|
pub fn OscHandler::from_callbacks(
  start : () -> Unit,
  put : (String) -> Unit,
  end : (Bool) -> Bool,
) -> OscHandler {
  { start_cb: start, put_cb: put, end_cb: end }
}

///|
pub fn OscHandler::new(handler : (String) -> Bool) -> OscHandler {
  let data : Ref[String] = Ref::{ val: "" }
  let hit_limit : Ref[Bool] = Ref::{ val: false }
  OscHandler::from_callbacks(
    fn() {
      data.val = ""
      hit_limit.val = false
    },
    fn(chunk) {
      if hit_limit.val {
        return
      }
      data.val = data.val + chunk
      if data.val.length() > PayloadLimit {
        data.val = ""
        hit_limit.val = true
      }
    },
    fn(success) {
      let mut result = false
      if hit_limit.val {
        result = false
      } else if success {
        result = handler(data.val)
      }
      data.val = ""
      hit_limit.val = false
      result
    },
  )
}

///|
fn OscHandler::start(self : OscHandler) -> Unit {
  (self.start_cb)()
}

///|
fn OscHandler::put(self : OscHandler, data : String) -> Unit {
  (self.put_cb)(data)
}

///|
fn OscHandler::end(self : OscHandler, success : Bool) -> Bool {
  (self.end_cb)(success)
}

///|
struct OscParser {
  handlers : Map[Int, Array[OscHandlerEntry]]
  mut active : Array[OscHandlerEntry]
  mut next_id : Int
  mut state : Int
  mut ident : Int
  mut fallback : (Int, String, String?) -> Unit
}

///|
const OscStateStart : Int = 0

///|
const OscStateId : Int = 1

///|
const OscStatePayload : Int = 2

///|
const OscStateAbort : Int = 3

///|
pub fn OscParser::new() -> OscParser {
  {
    handlers: {},
    active: [],
    next_id: 0,
    state: OscStateStart,
    ident: -1,
    fallback: fn(_, _, _) { () },
  }
}

///|
pub fn OscParser::register_handler(
  self : OscParser,
  ident : Int,
  handler : OscHandler,
) -> Disposable {
  let id = self.next_id
  self.next_id += 1
  let list = match self.handlers.get(ident) {
    Some(list) => list
    None => {
      let list : Array[OscHandlerEntry] = []
      self.handlers[ident] = list
      list
    }
  }
  list.push({ id, handler })
  Disposable(fn() {
    match self.handlers.get(ident) {
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
pub fn OscParser::clear_handler(self : OscParser, ident : Int) -> Unit {
  self.handlers.remove(ident)
}

///|
pub fn OscParser::set_handler_fallback(
  self : OscParser,
  handler : (Int, String, String?) -> Unit,
) -> Unit {
  self.fallback = handler
}

///|
pub fn OscParser::dispose(self : OscParser) -> Unit {
  self.handlers.clear()
  self.active = []
  self.fallback = fn(_, _, _) { () }
}

///|
pub fn OscParser::reset(self : OscParser) -> Unit {
  if self.state == OscStatePayload {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.end(false) |> ignore
    }
  }
  self.active = []
  self.ident = -1
  self.state = OscStateStart
}

///|
fn OscParser::start_active(self : OscParser) -> Unit {
  self.active = self.handlers.get(self.ident).unwrap_or([])
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "START", None)
  } else {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.start()
    }
  }
}

///|
pub fn OscParser::start(self : OscParser) -> Unit {
  self.reset()
  self.state = OscStateId
}

///|
pub fn OscParser::put(self : OscParser, data : String) -> Unit {
  if self.state == OscStateAbort {
    return
  }
  let mut start = 0
  if self.state == OscStateId {
    while start < data.length() {
      let code = data[start].to_int()
      start += 1
      if code == 0x3B {
        self.state = OscStatePayload
        self.start_active()
        break
      }
      if code < 0x30 || code > 0x39 {
        self.state = OscStateAbort
        return
      }
      if self.ident == -1 {
        self.ident = 0
      }
      self.ident = self.ident * 10 + code - 48
    }
  }
  if self.state == OscStatePayload && data.length() - start > 0 {
    let chunk = data[start:].to_owned()
    if self.active.length() == 0 {
      (self.fallback)(self.ident, "PUT", Some(chunk))
    } else {
      for i = self.active.length() - 1; i >= 0; i = i - 1 {
        self.active[i].handler.put(chunk)
      }
    }
  }
}

///|
pub fn OscParser::end(self : OscParser, success : Bool) -> Unit {
  if self.state == OscStateStart {
    return
  }
  if self.state != OscStateAbort {
    if self.state == OscStateId {
      self.start_active()
    }
    if self.active.length() == 0 {
      (self.fallback)(self.ident, "END", Some(success.to_string()))
    } else {
      let mut handled = false
      for i = self.active.length() - 1; i >= 0; i = i - 1 {
        let call_success = success && !handled
        let result = self.active[i].handler.end(call_success)
        if call_success && result {
          handled = true
        }
      }
    }
  }
  self.active = []
  self.ident = -1
  self.state = OscStateStart
}

///|
struct DcsHandler {
  hook_cb : (Params) -> Unit
  put_cb : (String) -> Unit
  unhook_cb : (Bool) -> Bool
}

///|
pub fn DcsHandler::from_callbacks(
  hook : (Params) -> Unit,
  put : (String) -> Unit,
  unhook : (Bool) -> Bool,
) -> DcsHandler {
  { hook_cb: hook, put_cb: put, unhook_cb: unhook }
}

///|
pub fn DcsHandler::new(handler : (String, Params) -> Bool) -> DcsHandler {
  let data : Ref[String] = Ref::{ val: "" }
  let params : Ref[Params] = Ref::{ val: Params::from_array([Param(0)]) }
  let hit_limit : Ref[Bool] = Ref::{ val: false }
  DcsHandler::from_callbacks(
    fn(value) {
      if value.length() > 1 || value.param_at(0) != 0 {
        params.val = value.clone()
      } else {
        params.val = Params::from_array([Param(0)])
      }
      data.val = ""
      hit_limit.val = false
    },
    fn(chunk) {
      if hit_limit.val {
        return
      }
      data.val = data.val + chunk
      if data.val.length() > PayloadLimit {
        data.val = ""
        hit_limit.val = true
      }
    },
    fn(success) {
      let mut result = false
      if hit_limit.val {
        result = false
      } else if success {
        result = handler(data.val, params.val)
      }
      params.val = Params::from_array([Param(0)])
      data.val = ""
      hit_limit.val = false
      result
    },
  )
}

///|
fn DcsHandler::hook(self : DcsHandler, params : Params) -> Unit {
  (self.hook_cb)(params)
}

///|
fn DcsHandler::put(self : DcsHandler, data : String) -> Unit {
  (self.put_cb)(data)
}

///|
fn DcsHandler::unhook(self : DcsHandler, success : Bool) -> Bool {
  (self.unhook_cb)(success)
}

///|
struct DcsParser {
  handlers : Map[Int, Array[DcsHandlerEntry]]
  mut active : Array[DcsHandlerEntry]
  mut next_id : Int
  mut ident : Int
  mut fallback : (Int, String, DcsFallbackPayload) -> Unit
}

///|
pub(all) enum DcsFallbackPayload {
  DcsParams(Params)
  DcsData(String)
  DcsSuccess(Bool)
}

///|
pub fn DcsParser::new() -> DcsParser {
  {
    handlers: {},
    active: [],
    next_id: 0,
    ident: 0,
    fallback: fn(_, _, _) { () },
  }
}

///|
pub fn DcsParser::register_handler(
  self : DcsParser,
  ident : Int,
  handler : DcsHandler,
) -> Disposable {
  let id = self.next_id
  self.next_id += 1
  let list = match self.handlers.get(ident) {
    Some(list) => list
    None => {
      let list : Array[DcsHandlerEntry] = []
      self.handlers[ident] = list
      list
    }
  }
  list.push({ id, handler })
  Disposable(fn() {
    match self.handlers.get(ident) {
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
pub fn DcsParser::clear_handler(self : DcsParser, ident : Int) -> Unit {
  self.handlers.remove(ident)
}

///|
pub fn DcsParser::set_handler_fallback(
  self : DcsParser,
  handler : (Int, String, DcsFallbackPayload) -> Unit,
) -> Unit {
  self.fallback = handler
}

///|
pub fn DcsParser::dispose(self : DcsParser) -> Unit {
  self.handlers.clear()
  self.active = []
  self.fallback = fn(_, _, _) { () }
}

///|
pub fn DcsParser::reset(self : DcsParser) -> Unit {
  if self.active.length() > 0 {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.unhook(false) |> ignore
    }
  }
  self.active = []
  self.ident = 0
}

///|
pub fn DcsParser::hook(self : DcsParser, ident : Int, params : Params) -> Unit {
  self.reset()
  self.ident = ident
  self.active = self.handlers.get(ident).unwrap_or([])
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "HOOK", DcsParams(params))
  } else {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.hook(params)
    }
  }
}

///|
pub fn DcsParser::put(self : DcsParser, data : String) -> Unit {
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "PUT", DcsData(data))
  } else {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.put(data)
    }
  }
}

///|
pub fn DcsParser::unhook(self : DcsParser, success : Bool) -> Unit {
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "UNHOOK", DcsSuccess(success))
  } else {
    let mut handled = false
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      let call_success = success && !handled
      let result = self.active[i].handler.unhook(call_success)
      if call_success && result {
        handled = true
      }
    }
  }
  self.active = []
  self.ident = 0
}

///|
struct ApcHandler {
  start_cb : () -> Unit
  put_cb : (String) -> Unit
  end_cb : (Bool) -> Bool
}

///|
pub fn ApcHandler::from_callbacks(
  start : () -> Unit,
  put : (String) -> Unit,
  end : (Bool) -> Bool,
) -> ApcHandler {
  { start_cb: start, put_cb: put, end_cb: end }
}

///|
pub fn ApcHandler::new(handler : (String) -> Bool) -> ApcHandler {
  let data : Ref[String] = Ref::{ val: "" }
  let hit_limit : Ref[Bool] = Ref::{ val: false }
  ApcHandler::from_callbacks(
    fn() {
      data.val = ""
      hit_limit.val = false
    },
    fn(chunk) {
      if hit_limit.val {
        return
      }
      data.val = data.val + chunk
      if data.val.length() > PayloadLimit {
        data.val = ""
        hit_limit.val = true
      }
    },
    fn(success) {
      let mut result = false
      if hit_limit.val {
        result = false
      } else if success {
        result = handler(data.val)
      }
      data.val = ""
      hit_limit.val = false
      result
    },
  )
}

///|
fn ApcHandler::start(self : ApcHandler) -> Unit {
  (self.start_cb)()
}

///|
fn ApcHandler::put(self : ApcHandler, data : String) -> Unit {
  (self.put_cb)(data)
}

///|
fn ApcHandler::end(self : ApcHandler, success : Bool) -> Bool {
  (self.end_cb)(success)
}

///|
struct ApcParser {
  handlers : Map[Int, Array[ApcHandlerEntry]]
  mut active : Array[ApcHandlerEntry]
  mut next_id : Int
  mut ident : Int
  mut fallback : (Int, String, String?) -> Unit
}

///|
pub fn ApcParser::new() -> ApcParser {
  {
    handlers: {},
    active: [],
    next_id: 0,
    ident: 0,
    fallback: fn(_, _, _) { () },
  }
}

///|
pub fn ApcParser::register_handler(
  self : ApcParser,
  ident : Int,
  handler : ApcHandler,
) -> Disposable {
  let id = self.next_id
  self.next_id += 1
  let list = match self.handlers.get(ident) {
    Some(list) => list
    None => {
      let list : Array[ApcHandlerEntry] = []
      self.handlers[ident] = list
      list
    }
  }
  list.push({ id, handler })
  Disposable(fn() {
    match self.handlers.get(ident) {
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
pub fn ApcParser::clear_handler(self : ApcParser, ident : Int) -> Unit {
  self.handlers.remove(ident)
}

///|
pub fn ApcParser::set_handler_fallback(
  self : ApcParser,
  handler : (Int, String, String?) -> Unit,
) -> Unit {
  self.fallback = handler
}

///|
pub fn ApcParser::dispose(self : ApcParser) -> Unit {
  self.handlers.clear()
  self.active = []
  self.fallback = fn(_, _, _) { () }
}

///|
pub fn ApcParser::reset(self : ApcParser) -> Unit {
  if self.active.length() > 0 {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.end(false) |> ignore
    }
  }
  self.active = []
  self.ident = 0
}

///|
pub fn ApcParser::start(self : ApcParser, ident : Int) -> Unit {
  self.reset()
  self.ident = ident
  self.active = self.handlers.get(ident).unwrap_or([])
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "START", None)
  } else {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.start()
    }
  }
}

///|
pub fn ApcParser::put(self : ApcParser, data : String) -> Unit {
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "PUT", Some(data))
  } else {
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      self.active[i].handler.put(data)
    }
  }
}

///|
pub fn ApcParser::end(self : ApcParser, success : Bool) -> Unit {
  if self.active.length() == 0 {
    (self.fallback)(self.ident, "END", Some(success.to_string()))
  } else {
    let mut handled = false
    for i = self.active.length() - 1; i >= 0; i = i - 1 {
      let call_success = success && !handled
      let result = self.active[i].handler.end(call_success)
      if call_success && result {
        handled = true
      }
    }
  }
  self.active = []
  self.ident = 0
}
