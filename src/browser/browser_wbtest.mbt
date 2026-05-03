///|
fn expect_line(model : RenderModel, index : Int) -> String raise {
  match model.line_texts().get(index) {
    Some(line) => line
    None => fail("expected render model line")
  }
}

///|
test "RenderModel captures headless viewport rows" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=6, rows=3))
  terminal.write("abc\r\ndef")
  let model = terminal.snapshot()
  guard model.cols == 6 && model.rows == 3 else {
    fail("snapshot should include terminal dimensions")
  }
  inspect(expect_line(model, 0), content="abc   ")
  inspect(expect_line(model, 1), content="def   ")
  guard model.cursor_x == 3 && model.cursor_y == 1 else {
    fail("snapshot should include cursor position")
  }
}

///|
test "RenderModel marks the cursor cell" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=4, rows=2))
  terminal.write("ab")
  let row = terminal.snapshot().rows_data[0]
  guard row.cells[2].is_cursor else {
    fail("cursor should be marked on the render cell")
  }
  guard !row.cells[1].is_cursor else {
    fail("only the active cursor cell should be marked")
  }
}

///|
#warnings("-alert_unstable")
test "Rabbita view renders terminal rows" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=8, rows=2))
  terminal.write("MoonBit\r\nRabbita")
  terminal.screen_element_id = Some("test-screen")
  let html = @rabbita.render_to_string(@rabbita.static_cell(terminal.view()))
  guard html.rev_find("mb-xterm-screen") is Some(_) &&
    html.rev_find("mb-xterm-cell-cursor") is Some(_) &&
    html.rev_find("data-testid=\"terminal-screen\"") is Some(_) else {
    fail("SSR output should contain terminal screen rows")
  }
}
