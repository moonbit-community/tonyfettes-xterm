///|
pub(all) struct WrappedRange {
  first : Int
  last : Int
} derive(Eq, Debug)

///|
struct Buffer {
  lines : @common.CircularList[BufferLine]
  mut ydisp : Int
  mut ybase : Int
  mut y : Int
  mut x : Int
  mut scroll_bottom : Int
  mut scroll_top : Int
  mut cols : Int
  mut rows : Int
  has_scrollback_flag : Bool
  scrollback : Int
}

///|
fn correct_buffer_length(
  has_scrollback : Bool,
  rows : Int,
  scrollback : Int,
) -> Int {
  if has_scrollback {
    rows + scrollback
  } else {
    rows
  }
}

///|
fn default_attr_data() -> AttributeData {
  AttributeData::new()
}

///|
pub fn Buffer::new(
  has_scrollback : Bool,
  cols : Int,
  rows : Int,
  scrollback : Int,
) -> Buffer {
  {
    lines: @common.CircularList::new(
      correct_buffer_length(has_scrollback, rows, scrollback),
    ),
    ydisp: 0,
    ybase: 0,
    y: 0,
    x: 0,
    scroll_bottom: rows - 1,
    scroll_top: 0,
    cols,
    rows,
    has_scrollback_flag: has_scrollback,
    scrollback,
  }
}

///|
pub fn Buffer::lines(self : Buffer) -> @common.CircularList[BufferLine] {
  self.lines
}

///|
pub fn Buffer::cols(self : Buffer) -> Int {
  self.cols
}

///|
pub fn Buffer::rows(self : Buffer) -> Int {
  self.rows
}

///|
pub fn Buffer::x(self : Buffer) -> Int {
  self.x
}

///|
pub fn Buffer::set_x(self : Buffer, value : Int) -> Unit {
  self.x = value
}

///|
pub fn Buffer::y(self : Buffer) -> Int {
  self.y
}

///|
pub fn Buffer::set_y(self : Buffer, value : Int) -> Unit {
  self.y = value
}

///|
pub fn Buffer::ydisp(self : Buffer) -> Int {
  self.ydisp
}

///|
pub fn Buffer::set_ydisp(self : Buffer, value : Int) -> Unit {
  self.ydisp = value
}

///|
pub fn Buffer::ybase(self : Buffer) -> Int {
  self.ybase
}

///|
pub fn Buffer::set_ybase(self : Buffer, value : Int) -> Unit {
  self.ybase = value
}

///|
pub fn Buffer::scroll_bottom(self : Buffer) -> Int {
  self.scroll_bottom
}

///|
pub fn Buffer::scroll_top(self : Buffer) -> Int {
  self.scroll_top
}

///|
pub fn Buffer::has_scrollback(self : Buffer) -> Bool {
  self.has_scrollback_flag && self.lines.max_length() > self.rows
}

///|
pub fn Buffer::get_null_cell(_self : Buffer, attr : AttributeData?) -> CellData {
  let cell = CellData::from_char_data(
    CharData::new(0, NullCellChar, NullCellWidth, NullCellCode),
  )
  match attr {
    Some(attr) => {
      cell.fg = attr.fg()
      cell.bg = attr.bg()
      copy_extended_attrs(cell.extended, attr.extended())
    }
    None => ()
  }
  cell
}

///|
pub fn Buffer::get_whitespace_cell(
  _self : Buffer,
  attr : AttributeData?,
) -> CellData {
  let cell = CellData::from_char_data(
    CharData::new(
      0,
      WhitespaceCellChar,
      WhitespaceCellWidth,
      WhitespaceCellCode,
    ),
  )
  match attr {
    Some(attr) => {
      cell.fg = attr.fg()
      cell.bg = attr.bg()
      copy_extended_attrs(cell.extended, attr.extended())
    }
    None => ()
  }
  cell
}

///|
pub fn Buffer::get_blank_line(
  self : Buffer,
  attr : AttributeData?,
  is_wrapped : Bool,
) -> BufferLine {
  BufferLine::new(self.cols, Some(self.get_null_cell(attr)), is_wrapped)
}

///|
pub fn Buffer::fill_viewport_rows(
  self : Buffer,
  fill_attr : AttributeData?,
) -> Unit {
  if self.lines.length() != 0 {
    return
  }
  let attr = match fill_attr {
    Some(attr) => attr
    None => default_attr_data()
  }
  for _i = 0; _i < self.rows; _i = _i + 1 {
    self.lines.push(self.get_blank_line(Some(attr), false))
  }
}

///|
pub fn Buffer::clear(self : Buffer) -> Unit {
  self.ydisp = 0
  self.ybase = 0
  self.y = 0
  self.x = 0
  self.lines.set_length(0)
  self.scroll_top = 0
  self.scroll_bottom = self.rows - 1
}

///|
pub fn Buffer::resize(self : Buffer, new_cols : Int, new_rows : Int) -> Unit {
  let null_cell = self.get_null_cell(Some(default_attr_data()))
  let new_max_length = correct_buffer_length(
    self.has_scrollback_flag,
    new_rows,
    self.scrollback,
  )
  self.lines.set_max_length(new_max_length)
  for i = 0; i < self.lines.length(); i = i + 1 {
    match self.lines.get(i) {
      Some(line) => line.resize(new_cols, null_cell) |> ignore
      None => ()
    }
  }
  if self.lines.length() > 0 {
    if new_rows > self.lines.length() {
      for _i = self.lines.length(); _i < new_rows; _i = _i + 1 {
        self.lines.push(BufferLine::new(new_cols, Some(null_cell), false))
      }
    } else {
      while self.lines.length() > new_rows {
        self.lines.pop() |> ignore
      }
    }
  }
  self.cols = new_cols
  self.rows = new_rows
  if self.x >= new_cols {
    self.x = new_cols - 1
  }
  if self.y >= new_rows {
    self.y = new_rows - 1
  }
  self.scroll_top = 0
  self.scroll_bottom = new_rows - 1
}

///|
pub fn Buffer::translate_buffer_line_to_string(
  self : Buffer,
  line_index : Int,
  trim_right : Bool,
  start_col : Int,
  end_col : Int,
) -> String {
  match self.lines.get(line_index) {
    Some(line) => line.translate_to_string(trim_right, start_col, end_col)
    None => ""
  }
}

///|
pub fn Buffer::line_at_cursor(self : Buffer) -> BufferLine? {
  self.lines.get(self.ybase + self.y)
}

///|
pub fn Buffer::line_at_viewport_y(self : Buffer, y : Int) -> BufferLine? {
  self.lines.get(self.ydisp + y)
}

///|
pub fn Buffer::scroll_up_one(self : Buffer, attr : AttributeData?) -> Unit {
  self.lines.push(self.get_blank_line(attr, false))
  if self.has_scrollback_flag {
    let base = self.lines.length() - self.rows
    self.ybase = if base < 0 { 0 } else { base }
    self.ydisp = self.ybase
  } else {
    self.ybase = 0
    self.ydisp = 0
  }
}

///|
pub fn Buffer::viewport_to_string(self : Buffer, trim_right : Bool) -> String {
  let mut result = ""
  for y = 0; y < self.rows; y = y + 1 {
    if y != 0 {
      result = result + "\n"
    }
    result = result +
      self.translate_buffer_line_to_string(
        self.ydisp + y,
        trim_right,
        0,
        self.cols,
      )
  }
  result
}

///|
pub fn Buffer::get_wrapped_range_for_line(
  self : Buffer,
  y : Int,
) -> WrappedRange {
  let mut first = y
  let mut last = y
  while first > 0 {
    match self.lines.get(first) {
      Some(line) if line.is_wrapped() => first -= 1
      _ => break
    }
  }
  while last + 1 < self.lines.length() {
    match self.lines.get(last + 1) {
      Some(line) if line.is_wrapped() => last += 1
      _ => break
    }
  }
  { first, last }
}
