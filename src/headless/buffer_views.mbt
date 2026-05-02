///|
pub(all) enum BufferType {
  Normal
  Alternate
} derive(Eq, Debug)

///|
struct BufferCellView {
  line : @buffer.BufferLine
  index : Int
}

///|
pub fn BufferCellView::get_chars(self : BufferCellView) -> String {
  self.line.get_string(self.index)
}

///|
pub fn BufferCellView::get_width(self : BufferCellView) -> Int {
  self.line.get_width(self.index)
}

///|
pub fn BufferCellView::get_code(self : BufferCellView) -> Int {
  self.line.get_codepoint(self.index)
}

///|
pub fn BufferCellView::get_fg(self : BufferCellView) -> Int {
  self.line.get_fg(self.index)
}

///|
pub fn BufferCellView::get_bg(self : BufferCellView) -> Int {
  self.line.get_bg(self.index)
}

///|
struct BufferLineView {
  line : @buffer.BufferLine
}

///|
pub fn BufferLineView::is_wrapped(self : BufferLineView) -> Bool {
  self.line.is_wrapped()
}

///|
pub fn BufferLineView::length(self : BufferLineView) -> Int {
  self.line.length()
}

///|
pub fn BufferLineView::translate_to_string(
  self : BufferLineView,
  trim_right? : Bool = false,
  start_col? : Int = 0,
  end_col? : Int = -1,
) -> String {
  let end_col = if end_col < 0 { self.line.length() } else { end_col }
  self.line.translate_to_string(trim_right, start_col, end_col)
}

///|
pub fn BufferLineView::get_cell(
  self : BufferLineView,
  index : Int,
) -> BufferCellView? {
  if index < 0 || index >= self.line.length() {
    None
  } else {
    Some({ line: self.line, index })
  }
}

///|
struct BufferView {
  buffer : @buffer.Buffer
  buffer_type : BufferType
}

///|
pub fn BufferView::buffer_type(self : BufferView) -> BufferType {
  self.buffer_type
}

///|
pub fn BufferView::cursor_x(self : BufferView) -> Int {
  self.buffer.x()
}

///|
pub fn BufferView::cursor_y(self : BufferView) -> Int {
  self.buffer.y()
}

///|
pub fn BufferView::viewport_y(self : BufferView) -> Int {
  self.buffer.ydisp()
}

///|
pub fn BufferView::base_y(self : BufferView) -> Int {
  self.buffer.ybase()
}

///|
pub fn BufferView::length(self : BufferView) -> Int {
  self.buffer.lines().length()
}

///|
pub fn BufferView::get_line(self : BufferView, index : Int) -> BufferLineView? {
  if index < 0 || index >= self.buffer.lines().length() {
    None
  } else {
    match self.buffer.lines().get(index) {
      Some(line) => Some({ line, })
      None => None
    }
  }
}

///|
struct BufferNamespace {
  core : @core.Terminal
}

///|
pub fn BufferNamespace::active(self : BufferNamespace) -> BufferView {
  match self.core.buffers().active_kind() {
    @buffer.BufferKind::Normal =>
      { buffer: self.core.buffers().normal(), buffer_type: BufferType::Normal }
    @buffer.BufferKind::Alt =>
      { buffer: self.core.buffers().alt(), buffer_type: BufferType::Alternate }
  }
}

///|
pub fn BufferNamespace::normal(self : BufferNamespace) -> BufferView {
  { buffer: self.core.buffers().normal(), buffer_type: BufferType::Normal }
}

///|
pub fn BufferNamespace::alternate(self : BufferNamespace) -> BufferView {
  { buffer: self.core.buffers().alt(), buffer_type: BufferType::Alternate }
}
