///|
pub(all) enum MouseTrackingMode {
  None
  X10
  Vt200
  Drag
  Any
} derive(Eq, Debug)

///|
pub(all) struct Modes {
  application_cursor_keys_mode : Bool
  application_keypad_mode : Bool
  bracketed_paste_mode : Bool
  insert_mode : Bool
  mouse_tracking_mode : MouseTrackingMode
  origin_mode : Bool
  reverse_wraparound_mode : Bool
  send_focus_mode : Bool
  show_cursor : Bool
  synchronized_output_mode : Bool
  win32_input_mode : Bool
  wraparound_mode : Bool
} derive(Eq, Debug)

///|
fn mouse_mode_from_core(value : String) -> MouseTrackingMode {
  match value {
    "x10" => MouseTrackingMode::X10
    "vt200" => MouseTrackingMode::Vt200
    "drag" => MouseTrackingMode::Drag
    "any" => MouseTrackingMode::Any
    _ => MouseTrackingMode::None
  }
}
