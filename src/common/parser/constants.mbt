///|
pub const ParserStateGround : Int = 0

///|
pub const ParserStateEscape : Int = 1

///|
pub const ParserStateEscapeIntermediate : Int = 2

///|
pub const ParserStateCsiEntry : Int = 3

///|
pub const ParserStateCsiParam : Int = 4

///|
pub const ParserStateCsiIntermediate : Int = 5

///|
pub const ParserStateCsiIgnore : Int = 6

///|
pub const ParserStateSosPmString : Int = 7

///|
pub const ParserStateOscString : Int = 8

///|
pub const ParserStateDcsEntry : Int = 9

///|
pub const ParserStateDcsParam : Int = 10

///|
pub const ParserStateDcsIgnore : Int = 11

///|
pub const ParserStateDcsIntermediate : Int = 12

///|
pub const ParserStateDcsPassthrough : Int = 13

///|
pub const ParserStateApcEntry : Int = 14

///|
pub const ParserStateApcIntermediate : Int = 15

///|
pub const ParserStateApcPassthrough : Int = 16

///|
pub const ParserStateLength : Int = 17

///|
pub const ParserActionIgnore : Int = 0

///|
pub const ParserActionError : Int = 1

///|
pub const ParserActionPrint : Int = 2

///|
pub const ParserActionExecute : Int = 3

///|
pub const ParserActionOscStart : Int = 4

///|
pub const ParserActionOscPut : Int = 5

///|
pub const ParserActionOscEnd : Int = 6

///|
pub const ParserActionCsiDispatch : Int = 7

///|
pub const ParserActionParam : Int = 8

///|
pub const ParserActionCollect : Int = 9

///|
pub const ParserActionEscDispatch : Int = 10

///|
pub const ParserActionClear : Int = 11

///|
pub const ParserActionDcsHook : Int = 12

///|
pub const ParserActionDcsPut : Int = 13

///|
pub const ParserActionDcsUnhook : Int = 14

///|
pub const ParserActionApcStart : Int = 15

///|
pub const ParserActionApcPut : Int = 16

///|
pub const ParserActionApcEnd : Int = 17

///|
const TransitionActionShift : Int = 8

///|
const TransitionStateMask : Int = 255

///|
const IndexStateShift : Int = 8

///|
const NonAsciiPrintable : Int = 0xA0

///|
const PayloadLimit : Int = 10000000
