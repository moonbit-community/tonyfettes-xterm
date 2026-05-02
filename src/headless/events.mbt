///|
pub(all) struct RenderEvent {
  start : Int
  end : Int
} derive(Eq, Debug)

///|
pub(all) struct ResizeEvent {
  cols : Int
  rows : Int
} derive(Eq, Debug)
