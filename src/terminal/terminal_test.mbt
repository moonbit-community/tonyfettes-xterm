///|
fn active_line(terminal : Terminal, y : Int) -> @buffer.BufferLine raise {
  match terminal.buffer().line_at_viewport_y(y) {
    Some(line) => line
    None => fail("expected active viewport line")
  }
}

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

///|
test "Terminal writes UTF-8 bytes and wide chars" {
  let terminal = Terminal::new(4, 2, 10)
  terminal.write_utf8(@utf8.encode("abc中"))
  inspect(terminal.screen_text(true), content="abc\n中")
  guard terminal.cursor_x() == 2 && terminal.cursor_y() == 1 else {
    fail("wide char should wrap before writing when it does not fit")
  }
}

///|
test "Terminal handles C0 tab and shift controls" {
  let terminal = Terminal::new(10, 2, 10)
  terminal.write("a\tb\u{000e}c\u{000f}")
  inspect(terminal.screen_text(true), content="a       bc\n")
  guard terminal.cursor_x() == 10 && terminal.cursor_y() == 0 else {
    fail("tab should advance to the next tab stop and SO/SI should be no-ops")
  }
}

///|
test "Terminal handles CSI cursor movement" {
  let terminal = Terminal::new(5, 3, 10)
  terminal.write("abcd\u{1b}[2DXY")
  inspect(terminal.screen_text(true), content="abXY\n\n")
  guard terminal.cursor_x() == 4 && terminal.cursor_y() == 0 else {
    fail("cursor backward should move before printable overwrite")
  }

  terminal.write("\u{1b}[2;3HZ")
  inspect(terminal.screen_text(true), content="abXY\n  Z\n")
  guard terminal.cursor_x() == 3 && terminal.cursor_y() == 1 else {
    fail("CUP should position cursor using 1-based coordinates")
  }
}

///|
test "Terminal erases display and line ranges" {
  let terminal = Terminal::new(6, 2, 10)
  terminal.write("abcdef\u{1b}[3D\u{1b}[K")
  inspect(terminal.screen_text(true), content="abc\n")

  terminal.write("\u{1b}[2;1Hxyz\u{1b}[1;2H\u{1b}[J")
  inspect(terminal.screen_text(true), content="a\n")
}

///|
test "Terminal inserts and deletes characters" {
  let terminal = Terminal::new(6, 2, 10)
  terminal.write("abcd\u{1b}[3D\u{1b}[2@XY")
  inspect(terminal.screen_text(true), content="aXYbcd\n")

  terminal.write("\u{1b}[1;1Habcdef\u{1b}[3D\u{1b}[2P")
  inspect(terminal.screen_text(true), content="abcf\n")
}

///|
test "Terminal inserts and deletes lines" {
  let terminal = Terminal::new(3, 4, 10)
  terminal.write("aaa\r\nbbb\r\nccc\r\nddd")
  terminal.write("\u{1b}[2;1H\u{1b}[LXX")
  inspect(terminal.screen_text(true), content="aaa\nXX\nbbb\nccc")

  terminal.write("\u{1b}[3;1H\u{1b}[M")
  inspect(terminal.screen_text(true), content="aaa\nXX\nccc\n")
}

///|
test "Terminal scrolls inside scroll region" {
  let terminal = Terminal::new(3, 4, 10)
  terminal.write("aaa\r\nbbb\r\nccc\r\nddd")
  terminal.write("\u{1b}[2;3r\u{1b}[3;1H\nZ")
  inspect(terminal.screen_text(true), content="aaa\nccc\nZ\nddd")
  guard terminal.buffer().scroll_top() == 1 &&
    terminal.buffer().scroll_bottom() == 2 else {
    fail("scroll region should track 1-based DECSTBM params")
  }
}

///|
test "Terminal applies SGR basic attributes" {
  let terminal = Terminal::new(4, 2, 10)
  terminal.write("\u{1b}[31;44;1;4mA\u{1b}[0mB")
  let line = active_line(terminal, 0)
  let fg = line.get_fg(0)
  let bg = line.get_bg(0)
  guard (fg & @buffer.CmMask) == @buffer.CmP16 &&
    (fg & @buffer.PcolorMask) == 1 &&
    (fg & @buffer.FgBold) != 0 &&
    (fg & @buffer.FgUnderline) != 0 else {
    fail("SGR should set foreground palette and style flags")
  }
  guard (bg & @buffer.CmMask) == @buffer.CmP16 && (bg & @buffer.PcolorMask) == 4 else {
    fail("SGR should set background palette")
  }
  guard line.get_fg(1) == 0 && line.get_bg(1) == 0 else {
    fail("SGR 0 should reset following cells to default attributes")
  }
}
