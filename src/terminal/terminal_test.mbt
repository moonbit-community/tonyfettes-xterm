///|
test "Terminal starts with blank viewport" {
  let terminal = Terminal::new(4, 2, 10)
  inspect(terminal.screen_text(true), content="\n")
  guard terminal.cursor_x() == 0 && terminal.cursor_y() == 0 else {
    fail("new terminal cursor should start at origin")
  }
}

///|
test "Terminal writes printable ASCII" {
  let terminal = Terminal::new(5, 2, 10)
  terminal.write("abc")
  inspect(terminal.screen_text(true), content="abc\n")
  guard terminal.cursor_x() == 3 && terminal.cursor_y() == 0 else {
    fail("cursor should advance after printable text")
  }
}

///|
test "Terminal handles CR LF and backspace" {
  let terminal = Terminal::new(5, 2, 10)
  terminal.write("ab\bC\r\nxy")
  inspect(terminal.screen_text(true), content="aC\nxy")
  guard terminal.cursor_x() == 2 && terminal.cursor_y() == 1 else {
    fail("cursor should track CR LF and backspace")
  }
}

///|
test "Terminal wraps printable input" {
  let terminal = Terminal::new(3, 2, 10)
  terminal.write("abcde")
  inspect(terminal.screen_text(true), content="abc\nde")
  guard terminal.cursor_x() == 2 && terminal.cursor_y() == 1 else {
    fail("cursor should wrap to next row")
  }
}

///|
test "Terminal scrolls at bottom row" {
  let terminal = Terminal::new(3, 2, 10)
  terminal.write("abc\r\ndef\r\ngh")
  inspect(terminal.screen_text(true), content="def\ngh")
  guard terminal.buffer().ybase() == 1 && terminal.buffer().ydisp() == 1 else {
    fail("scroll should advance viewport into scrollback")
  }
}
