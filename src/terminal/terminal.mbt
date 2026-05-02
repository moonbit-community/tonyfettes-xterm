///|
struct Terminal {
  buffers : @buffer.BufferSet
  current_attr : @buffer.AttributeData
}

///|
pub fn Terminal::new(cols : Int, rows : Int, scrollback : Int) -> Terminal {
  {
    buffers: @buffer.BufferSet::new(cols, rows, scrollback),
    current_attr: @buffer.AttributeData::new(),
  }
}

///|
pub fn Terminal::buffer(self : Terminal) -> @buffer.Buffer {
  self.buffers.active()
}

///|
pub fn Terminal::buffers(self : Terminal) -> @buffer.BufferSet {
  self.buffers
}

///|
pub fn Terminal::cursor_x(self : Terminal) -> Int {
  self.buffer().x()
}

///|
pub fn Terminal::cursor_y(self : Terminal) -> Int {
  self.buffer().y()
}

///|
fn Terminal::carriage_return(self : Terminal) -> Unit {
  self.buffer().set_x(0)
}

///|
fn Terminal::line_feed(self : Terminal) -> Unit {
  let buffer = self.buffer()
  if buffer.y() == buffer.rows() - 1 {
    buffer.scroll_up_one(Some(self.current_attr))
  } else {
    buffer.set_y(buffer.y() + 1)
  }
}

///|
fn Terminal::backspace(self : Terminal) -> Unit {
  let buffer = self.buffer()
  if buffer.x() > 0 {
    buffer.set_x(buffer.x() - 1)
  }
}

///|
fn Terminal::put_code_unit(self : Terminal, code : Int) -> Unit {
  let buffer = self.buffer()
  if buffer.x() >= buffer.cols() {
    buffer.set_x(0)
    self.line_feed()
  }
  match buffer.line_at_cursor() {
    Some(line) => {
      let chars = String::from_array([code.unsafe_to_char()])
      let cell = @buffer.CellData::from_char_data(
        @buffer.CharData::new(self.current_attr.fg(), chars, 1, code),
      )
      line.set_cell(buffer.x(), cell)
      buffer.set_x(buffer.x() + 1)
    }
    None => ()
  }
}

///|
pub fn Terminal::write(self : Terminal, data : String) -> Unit {
  for i = 0; i < data.length(); i = i + 1 {
    let code = data[i].to_int()
    match code {
      8 => self.backspace()
      10 => self.line_feed()
      13 => self.carriage_return()
      _ => self.put_code_unit(code)
    }
  }
}

///|
pub fn Terminal::screen_text(self : Terminal, trim_right : Bool) -> String {
  self.buffer().viewport_to_string(trim_right)
}
