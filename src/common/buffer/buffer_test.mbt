///|
fn assert_blank_line(line : BufferLine, cols : Int) -> Unit raise {
  guard line.length() == cols else {
    fail("blank line should have requested column count")
  }
  for x = 0; x < cols; x = x + 1 {
    guard line.load_cell(x, CellData::new()).get_as_char_data() ==
      CharData::new(0, NullCellChar, NullCellWidth, NullCellCode) else {
      fail("blank line cell should be null cell")
    }
  }
}

///|
test "Buffer constructor tracks scrollback and scroll region" {
  let buffer = Buffer::new(true, 80, 24, 1000)
  guard buffer.lines().max_length() == 1024 else {
    fail("normal buffer should allocate rows + scrollback")
  }
  guard buffer.scroll_bottom() == 23 && buffer.scroll_top() == 0 else {
    fail("scroll region should default to viewport")
  }

  let alt = Buffer::new(false, 80, 24, 1000)
  guard alt.lines().max_length() == 24 && alt.has_scrollback() == false else {
    fail("alt buffer should not have scrollback")
  }
}

///|
test "Buffer fills viewport rows with blank lines" {
  let buffer = Buffer::new(true, 5, 3, 10)
  buffer.fill_viewport_rows(None)
  guard buffer.lines().length() == 3 else {
    fail("fill_viewport_rows should fill to viewport height")
  }
  for y = 0; y < 3; y = y + 1 {
    match buffer.lines().get(y) {
      Some(line) => assert_blank_line(line, 5)
      None => fail("expected filled buffer line")
    }
  }
}

///|
test "Buffer translates buffer lines" {
  let buffer = Buffer::new(true, 5, 2, 10)
  buffer.fill_viewport_rows(None)
  match buffer.lines().get(0) {
    Some(line) => {
      line.set_cell(0, CellData::from_char_data(CharData::new(1, "a", 1, 97)))
      line.set_cell(2, CellData::from_char_data(CharData::new(1, "b", 1, 98)))
    }
    None => fail("expected line")
  }

  inspect(
    buffer.translate_buffer_line_to_string(0, false, 0, 5),
    content="a b  ",
  )
  inspect(buffer.translate_buffer_line_to_string(0, true, 0, 5), content="a b")
  inspect(buffer.viewport_to_string(true), content="a b\n")
}

///|
test "Buffer finds wrapped range" {
  let buffer = Buffer::new(true, 5, 5, 10)
  buffer.fill_viewport_rows(None)
  match buffer.lines().get(2) {
    Some(line) => line.set_is_wrapped(true)
    None => fail("expected line 2")
  }
  match buffer.lines().get(3) {
    Some(line) => line.set_is_wrapped(true)
    None => fail("expected line 3")
  }

  guard buffer.get_wrapped_range_for_line(2) ==
    WrappedRange::{ first: 1, last: 3 } else {
    fail("wrapped range should scan upward and downward")
  }
}

///|
test "Buffer resizes rows and columns" {
  let buffer = Buffer::new(true, 5, 3, 10)
  buffer.fill_viewport_rows(None)
  buffer.resize(7, 4)
  guard buffer.cols() == 7 && buffer.rows() == 4 else {
    fail("resize should update dimensions")
  }
  guard buffer.lines().length() == 4 else {
    fail("resize should grow viewport rows")
  }
  match buffer.lines().get(0) {
    Some(line) => {
      guard line.length() == 7 else { fail("resize should grow line columns") }
    }
    None => fail("expected resized line")
  }

  buffer.resize(3, 2)
  guard buffer.lines().length() == 2 else {
    fail("resize should shrink viewport rows")
  }
  match buffer.lines().get(0) {
    Some(line) => {
      guard line.length() == 3 else {
        fail("resize should shrink line columns")
      }
    }
    None => fail("expected resized line")
  }
}

///|
test "BufferSet switches normal and alt buffers" {
  let buffers = BufferSet::new(10, 4, 100)
  guard buffers.active_kind() == BufferKind::Normal else {
    fail("BufferSet should start on normal buffer")
  }
  guard buffers.normal().lines().max_length() !=
    buffers.alt().lines().max_length() else {
    fail("normal and alt buffers should be separately configured")
  }

  buffers.active().set_x(3)
  buffers.active().set_y(2)
  buffers.activate_alt_buffer(None)
  guard buffers.active_kind() == BufferKind::Alt else {
    fail("activate_alt_buffer should switch active buffer")
  }
  guard buffers.active().x() == 3 && buffers.active().y() == 2 else {
    fail("cursor should carry into alt buffer")
  }
  guard buffers.alt().lines().length() == 4 else {
    fail("alt buffer should be filled when activated")
  }

  buffers.active().set_x(7)
  buffers.active().set_y(1)
  buffers.activate_normal_buffer()
  guard buffers.active_kind() == BufferKind::Normal else {
    fail("activate_normal_buffer should switch active buffer")
  }
  guard buffers.active().x() == 7 && buffers.active().y() == 1 else {
    fail("cursor should carry back into normal buffer")
  }
  guard buffers.alt().lines().length() == 0 else {
    fail("alt buffer should clear when returning to normal")
  }
}
