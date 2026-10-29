///|
pub const ParserStateGround : Int32 = 0

///|
pub const ParserStateEscape : Int32 = 1

///|
pub const ParserStateEscapeIntermediate : Int32 = 2

///|
pub const ParserStateCsiEntry : Int32 = 3

///|
pub const ParserStateCsiParam : Int32 = 4

///|
pub const ParserStateCsiIntermediate : Int32 = 5

///|
pub const ParserStateCsiIgnore : Int32 = 6

///|
pub const ParserStateSosPmString : Int32 = 7

///|
pub const ParserStateOscString : Int32 = 8

///|
pub const ParserStateDcsEntry : Int32 = 9

///|
pub const ParserStateDcsParam : Int32 = 10

///|
pub const ParserStateDcsIgnore : Int32 = 11

///|
pub const ParserStateDcsIntermediate : Int32 = 12

///|
pub const ParserStateDcsPassthrough : Int32 = 13

///|
pub const ParserStateApcEntry : Int32 = 14

///|
pub const ParserStateApcIntermediate : Int32 = 15

///|
pub const ParserStateApcPassthrough : Int32 = 16

///|
pub const ParserStateLength : Int32 = 17

///|
pub const ParserActionIgnore : Int32 = 0

///|
pub const ParserActionError : Int32 = 1

///|
pub const ParserActionPrint : Int32 = 2

///|
pub const ParserActionExecute : Int32 = 3

///|
pub const ParserActionOscStart : Int32 = 4

///|
pub const ParserActionOscPut : Int32 = 5

///|
pub const ParserActionOscEnd : Int32 = 6

///|
pub const ParserActionCsiDispatch : Int32 = 7

///|
pub const ParserActionParam : Int32 = 8

///|
pub const ParserActionCollect : Int32 = 9

///|
pub const ParserActionEscDispatch : Int32 = 10

///|
pub const ParserActionClear : Int32 = 11

///|
pub const ParserActionDcsHook : Int32 = 12

///|
pub const ParserActionDcsPut : Int32 = 13

///|
pub const ParserActionDcsUnhook : Int32 = 14

///|
pub const ParserActionApcStart : Int32 = 15

///|
pub const ParserActionApcPut : Int32 = 16

///|
pub const ParserActionApcEnd : Int32 = 17

///|
const TransitionActionShift : Int32 = 8

///|
const TransitionStateMask : Int32 = 255

///|
const IndexStateShift : Int32 = 8

///|
const NonAsciiPrintable : Int32 = 0xA0

///|
const PayloadLimit : Int32 = 10000000
