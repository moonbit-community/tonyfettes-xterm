///|
struct TransitionTable {
  table : Array[Int]
}

///|
pub fn TransitionTable::new(length : Int) -> TransitionTable {
  { table: Array::make(length, 0) }
}

///|
pub fn TransitionTable::length(self : TransitionTable) -> Int {
  self.table.length()
}

///|
pub fn TransitionTable::set_default(
  self : TransitionTable,
  action : Int,
  next : Int,
) -> Unit {
  let value = (action << TransitionActionShift) | next
  for i = 0; i < self.table.length(); i = i + 1 {
    self.table[i] = value
  }
}

///|
pub fn TransitionTable::add(
  self : TransitionTable,
  code : Int,
  state : Int,
  action : Int,
  next : Int,
) -> Unit {
  self.table[(state << IndexStateShift) | code] = (
      action << TransitionActionShift
    ) |
    next
}

///|
pub fn TransitionTable::add_range(
  self : TransitionTable,
  start : Int,
  end : Int,
  state : Int,
  action : Int,
  next : Int,
) -> Unit {
  for code = start; code < end; code = code + 1 {
    self.add(code, state, action, next)
  }
}

///|
pub fn TransitionTable::add_many(
  self : TransitionTable,
  codes : Array[Int],
  state : Int,
  action : Int,
  next : Int,
) -> Unit {
  for code in codes {
    self.add(code, state, action, next)
  }
}

///|
pub fn TransitionTable::transition(
  self : TransitionTable,
  state : Int,
  code : Int,
) -> Int {
  self.table[(state << IndexStateShift) | code]
}

///|
pub fn transition_action(transition : Int) -> Int {
  transition >> TransitionActionShift
}

///|
pub fn transition_state(transition : Int) -> Int {
  transition & TransitionStateMask
}

///|
fn add_executables(
  table : TransitionTable,
  state : Int,
  action : Int,
  next : Int,
) -> Unit {
  table.add_range(0x00, 0x18, state, action, next)
  table.add(0x19, state, action, next)
  table.add_range(0x1C, 0x20, state, action, next)
}

///|
pub fn vt500_transition_table() -> TransitionTable {
  let table = TransitionTable::new(4257)
  table.set_default(ParserActionError, ParserStateGround)
  table.add_range(
    0x20,
    0x7F,
    ParserStateGround,
    ParserActionPrint,
    ParserStateGround,
  )
  for state = ParserStateGround; state < ParserStateLength; state = state + 1 {
    table.add_many(
      [0x18, 0x1A, 0x99, 0x9A],
      state,
      ParserActionExecute,
      ParserStateGround,
    )
    table.add_range(0x80, 0x90, state, ParserActionExecute, ParserStateGround)
    table.add_range(0x90, 0x98, state, ParserActionExecute, ParserStateGround)
    table.add(0x9C, state, ParserActionIgnore, ParserStateGround)
    table.add(0x1B, state, ParserActionClear, ParserStateEscape)
    table.add(0x9D, state, ParserActionOscStart, ParserStateOscString)
    table.add_many(
      [0x98, 0x9E],
      state,
      ParserActionIgnore,
      ParserStateSosPmString,
    )
    table.add(0x9F, state, ParserActionClear, ParserStateApcEntry)
    table.add(0x9B, state, ParserActionClear, ParserStateCsiEntry)
    table.add(0x90, state, ParserActionClear, ParserStateDcsEntry)
  }

  add_executables(
    table,
    ParserStateGround,
    ParserActionExecute,
    ParserStateGround,
  )
  add_executables(
    table,
    ParserStateEscape,
    ParserActionExecute,
    ParserStateEscape,
  )
  table.add(0x7F, ParserStateEscape, ParserActionIgnore, ParserStateEscape)
  add_executables(
    table,
    ParserStateOscString,
    ParserActionIgnore,
    ParserStateOscString,
  )
  add_executables(
    table,
    ParserStateCsiEntry,
    ParserActionExecute,
    ParserStateCsiEntry,
  )
  table.add(0x7F, ParserStateCsiEntry, ParserActionIgnore, ParserStateCsiEntry)
  add_executables(
    table,
    ParserStateCsiParam,
    ParserActionExecute,
    ParserStateCsiParam,
  )
  table.add(0x7F, ParserStateCsiParam, ParserActionIgnore, ParserStateCsiParam)
  add_executables(
    table,
    ParserStateCsiIgnore,
    ParserActionExecute,
    ParserStateCsiIgnore,
  )
  add_executables(
    table,
    ParserStateCsiIntermediate,
    ParserActionExecute,
    ParserStateCsiIntermediate,
  )
  table.add(
    0x7F,
    ParserStateCsiIntermediate,
    ParserActionIgnore,
    ParserStateCsiIntermediate,
  )
  add_executables(
    table,
    ParserStateEscapeIntermediate,
    ParserActionExecute,
    ParserStateEscapeIntermediate,
  )
  table.add(
    0x7F,
    ParserStateEscapeIntermediate,
    ParserActionIgnore,
    ParserStateEscapeIntermediate,
  )

  table.add(0x5D, ParserStateEscape, ParserActionOscStart, ParserStateOscString)
  table.add_range(
    0x20,
    0x7F,
    ParserStateOscString,
    ParserActionOscPut,
    ParserStateOscString,
  )
  table.add(
    0x7F,
    ParserStateOscString,
    ParserActionOscPut,
    ParserStateOscString,
  )
  table.add_many(
    [0x9C, 0x1B, 0x18, 0x1A, 0x07],
    ParserStateOscString,
    ParserActionOscEnd,
    ParserStateGround,
  )
  table.add_range(
    0x1C,
    0x20,
    ParserStateOscString,
    ParserActionIgnore,
    ParserStateOscString,
  )

  table.add_many(
    [0x58, 0x5E],
    ParserStateEscape,
    ParserActionIgnore,
    ParserStateSosPmString,
  )
  table.add_range(
    0x20,
    0x7F,
    ParserStateSosPmString,
    ParserActionIgnore,
    ParserStateSosPmString,
  )
  add_executables(
    table,
    ParserStateSosPmString,
    ParserActionIgnore,
    ParserStateSosPmString,
  )
  table.add(0x9C, ParserStateSosPmString, ParserActionIgnore, ParserStateGround)
  table.add(
    0x7F,
    ParserStateSosPmString,
    ParserActionIgnore,
    ParserStateSosPmString,
  )

  table.add(0x5F, ParserStateEscape, ParserActionClear, ParserStateApcEntry)
  add_executables(
    table,
    ParserStateApcEntry,
    ParserActionIgnore,
    ParserStateApcEntry,
  )
  table.add(0x7F, ParserStateApcEntry, ParserActionIgnore, ParserStateApcEntry)
  table.add_range(
    0x20,
    0x30,
    ParserStateApcEntry,
    ParserActionCollect,
    ParserStateApcIntermediate,
  )
  table.add_range(
    0x30,
    0x7F,
    ParserStateApcEntry,
    ParserActionApcStart,
    ParserStateApcPassthrough,
  )
  table.add_range(
    0x30,
    0x7F,
    ParserStateApcIntermediate,
    ParserActionApcStart,
    ParserStateApcPassthrough,
  )
  add_executables(
    table,
    ParserStateApcIntermediate,
    ParserActionIgnore,
    ParserStateApcIntermediate,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateApcIntermediate,
    ParserActionCollect,
    ParserStateApcIntermediate,
  )
  table.add(
    0x7F,
    ParserStateApcIntermediate,
    ParserActionIgnore,
    ParserStateApcIntermediate,
  )
  table.add_range(
    0x20,
    0x7F,
    ParserStateApcPassthrough,
    ParserActionApcPut,
    ParserStateApcPassthrough,
  )
  add_executables(
    table,
    ParserStateApcPassthrough,
    ParserActionIgnore,
    ParserStateApcPassthrough,
  )
  table.add_range(
    0x08,
    0x0E,
    ParserStateApcPassthrough,
    ParserActionApcPut,
    ParserStateApcPassthrough,
  )
  table.add(
    0x7F,
    ParserStateApcPassthrough,
    ParserActionIgnore,
    ParserStateApcPassthrough,
  )
  table.add_many(
    [0x1B, 0x9C, 0x18, 0x1A],
    ParserStateApcPassthrough,
    ParserActionApcEnd,
    ParserStateGround,
  )

  table.add(0x5B, ParserStateEscape, ParserActionClear, ParserStateCsiEntry)
  table.add_range(
    0x40,
    0x7F,
    ParserStateCsiEntry,
    ParserActionCsiDispatch,
    ParserStateGround,
  )
  table.add_range(
    0x30,
    0x3C,
    ParserStateCsiEntry,
    ParserActionParam,
    ParserStateCsiParam,
  )
  table.add_many(
    [0x3C, 0x3D, 0x3E, 0x3F],
    ParserStateCsiEntry,
    ParserActionCollect,
    ParserStateCsiParam,
  )
  table.add_range(
    0x30,
    0x3C,
    ParserStateCsiParam,
    ParserActionParam,
    ParserStateCsiParam,
  )
  table.add_range(
    0x40,
    0x7F,
    ParserStateCsiParam,
    ParserActionCsiDispatch,
    ParserStateGround,
  )
  table.add_many(
    [0x3C, 0x3D, 0x3E, 0x3F],
    ParserStateCsiParam,
    ParserActionIgnore,
    ParserStateCsiIgnore,
  )
  table.add_range(
    0x20,
    0x40,
    ParserStateCsiIgnore,
    ParserActionIgnore,
    ParserStateCsiIgnore,
  )
  table.add(
    0x7F,
    ParserStateCsiIgnore,
    ParserActionIgnore,
    ParserStateCsiIgnore,
  )
  table.add_range(
    0x40,
    0x7F,
    ParserStateCsiIgnore,
    ParserActionIgnore,
    ParserStateGround,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateCsiEntry,
    ParserActionCollect,
    ParserStateCsiIntermediate,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateCsiIntermediate,
    ParserActionCollect,
    ParserStateCsiIntermediate,
  )
  table.add_range(
    0x30,
    0x40,
    ParserStateCsiIntermediate,
    ParserActionIgnore,
    ParserStateCsiIgnore,
  )
  table.add_range(
    0x40,
    0x7F,
    ParserStateCsiIntermediate,
    ParserActionCsiDispatch,
    ParserStateGround,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateCsiParam,
    ParserActionCollect,
    ParserStateCsiIntermediate,
  )

  table.add_range(
    0x20,
    0x30,
    ParserStateEscape,
    ParserActionCollect,
    ParserStateEscapeIntermediate,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateEscapeIntermediate,
    ParserActionCollect,
    ParserStateEscapeIntermediate,
  )
  table.add_range(
    0x30,
    0x7F,
    ParserStateEscapeIntermediate,
    ParserActionEscDispatch,
    ParserStateGround,
  )
  table.add_range(
    0x30,
    0x50,
    ParserStateEscape,
    ParserActionEscDispatch,
    ParserStateGround,
  )
  table.add_range(
    0x51,
    0x58,
    ParserStateEscape,
    ParserActionEscDispatch,
    ParserStateGround,
  )
  table.add_many(
    [0x59, 0x5A, 0x5C],
    ParserStateEscape,
    ParserActionEscDispatch,
    ParserStateGround,
  )
  table.add_range(
    0x60,
    0x7F,
    ParserStateEscape,
    ParserActionEscDispatch,
    ParserStateGround,
  )

  table.add(0x50, ParserStateEscape, ParserActionClear, ParserStateDcsEntry)
  add_executables(
    table,
    ParserStateDcsEntry,
    ParserActionIgnore,
    ParserStateDcsEntry,
  )
  table.add(0x7F, ParserStateDcsEntry, ParserActionIgnore, ParserStateDcsEntry)
  table.add_range(
    0x20,
    0x30,
    ParserStateDcsEntry,
    ParserActionCollect,
    ParserStateDcsIntermediate,
  )
  table.add_range(
    0x30,
    0x3C,
    ParserStateDcsEntry,
    ParserActionParam,
    ParserStateDcsParam,
  )
  table.add_many(
    [0x3C, 0x3D, 0x3E, 0x3F],
    ParserStateDcsEntry,
    ParserActionCollect,
    ParserStateDcsParam,
  )
  add_executables(
    table,
    ParserStateDcsIgnore,
    ParserActionIgnore,
    ParserStateDcsIgnore,
  )
  table.add_range(
    0x20,
    0x80,
    ParserStateDcsIgnore,
    ParserActionIgnore,
    ParserStateDcsIgnore,
  )
  add_executables(
    table,
    ParserStateDcsParam,
    ParserActionIgnore,
    ParserStateDcsParam,
  )
  table.add(0x7F, ParserStateDcsParam, ParserActionIgnore, ParserStateDcsParam)
  table.add_range(
    0x30,
    0x3C,
    ParserStateDcsParam,
    ParserActionParam,
    ParserStateDcsParam,
  )
  table.add_many(
    [0x3C, 0x3D, 0x3E, 0x3F],
    ParserStateDcsParam,
    ParserActionIgnore,
    ParserStateDcsIgnore,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateDcsParam,
    ParserActionCollect,
    ParserStateDcsIntermediate,
  )
  add_executables(
    table,
    ParserStateDcsIntermediate,
    ParserActionIgnore,
    ParserStateDcsIntermediate,
  )
  table.add(
    0x7F,
    ParserStateDcsIntermediate,
    ParserActionIgnore,
    ParserStateDcsIntermediate,
  )
  table.add_range(
    0x20,
    0x30,
    ParserStateDcsIntermediate,
    ParserActionCollect,
    ParserStateDcsIntermediate,
  )
  table.add_range(
    0x30,
    0x40,
    ParserStateDcsIntermediate,
    ParserActionIgnore,
    ParserStateDcsIgnore,
  )
  table.add_range(
    0x40,
    0x7F,
    ParserStateDcsIntermediate,
    ParserActionDcsHook,
    ParserStateDcsPassthrough,
  )
  table.add_range(
    0x40,
    0x7F,
    ParserStateDcsParam,
    ParserActionDcsHook,
    ParserStateDcsPassthrough,
  )
  table.add_range(
    0x40,
    0x7F,
    ParserStateDcsEntry,
    ParserActionDcsHook,
    ParserStateDcsPassthrough,
  )
  add_executables(
    table,
    ParserStateDcsPassthrough,
    ParserActionDcsPut,
    ParserStateDcsPassthrough,
  )
  table.add_range(
    0x20,
    0x7F,
    ParserStateDcsPassthrough,
    ParserActionDcsPut,
    ParserStateDcsPassthrough,
  )
  table.add(
    0x7F,
    ParserStateDcsPassthrough,
    ParserActionIgnore,
    ParserStateDcsPassthrough,
  )
  table.add_many(
    [0x1B, 0x9C, 0x18, 0x1A],
    ParserStateDcsPassthrough,
    ParserActionDcsUnhook,
    ParserStateGround,
  )

  table.add(
    NonAsciiPrintable,
    ParserStateGround,
    ParserActionPrint,
    ParserStateGround,
  )
  table.add(
    NonAsciiPrintable,
    ParserStateOscString,
    ParserActionOscPut,
    ParserStateOscString,
  )
  table.add(
    NonAsciiPrintable,
    ParserStateCsiIgnore,
    ParserActionIgnore,
    ParserStateCsiIgnore,
  )
  table.add(
    NonAsciiPrintable,
    ParserStateDcsIgnore,
    ParserActionIgnore,
    ParserStateDcsIgnore,
  )
  table.add(
    NonAsciiPrintable,
    ParserStateDcsPassthrough,
    ParserActionDcsPut,
    ParserStateDcsPassthrough,
  )
  table.add(
    NonAsciiPrintable,
    ParserStateApcPassthrough,
    ParserActionApcPut,
    ParserStateApcPassthrough,
  )
  table
}
