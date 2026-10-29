///|
pub(all) struct RenderEvent {
  start : Int32
  end : Int32
} derive(Eq, Debug)

///|
pub(all) struct ResizeEvent {
  cols : Int32
  rows : Int32
} derive(Eq, Debug)
