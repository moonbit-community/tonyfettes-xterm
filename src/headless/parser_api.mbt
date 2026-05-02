///|
struct ParserApi {
  core : @core.Terminal
}

///|
pub fn ParserApi::register_csi_handler(
  self : ParserApi,
  id : @parser.FunctionIdentifier,
  handler : (@parser.Params) -> Bool,
) -> @parser.Disposable {
  self.core.register_csi_handler(id, handler)
}

///|
pub fn ParserApi::register_esc_handler(
  self : ParserApi,
  id : @parser.FunctionIdentifier,
  handler : () -> Bool,
) -> @parser.Disposable {
  self.core.register_esc_handler(id, handler)
}

///|
pub fn ParserApi::register_osc_handler(
  self : ParserApi,
  ident : Int,
  handler : (String) -> Bool,
) -> @parser.Disposable {
  self.core.register_osc_handler(ident, handler)
}

///|
pub fn ParserApi::register_dcs_handler(
  self : ParserApi,
  id : @parser.FunctionIdentifier,
  handler : (String, @parser.Params) -> Bool,
) -> @parser.Disposable {
  self.core.register_dcs_handler(id, handler)
}

///|
pub fn ParserApi::register_apc_handler(
  self : ParserApi,
  id : @parser.FunctionIdentifier,
  handler : (String) -> Bool,
) -> @parser.Disposable {
  self.core.register_apc_handler(id, handler)
}
