///|
test "harness adapter applies steps and snapshots public headless state" {
  let terminal = @headless.Terminal::new(
    options=@headless.TerminalOptions::new(cols=10, rows=3, scrollback=5),
  )
  let titles : Array[String] = []
  let data_events : Array[String] = []
  let bell_count : Ref[Int] = Ref::{ val: 0 }
  terminal.on_title_change(fn(title) { titles.push(title) }) |> ignore
  terminal.on_data(fn(data) { data_events.push(data) }) |> ignore
  terminal.on_bell(fn(_) { bell_count.val += 1 }) |> ignore

  apply_steps(
    terminal,
    [
      "writeBytes", "102,111,111", "writeBytes", "230,150,135", "writeln", "bar",
      "write", "\u{1b}[?1;1003h\u{1b}]2;title\u{0007}\u{0007}", "input", "kbd",
    ],
    0,
  )

  inspect(snapshot_lines(terminal), content="[\"foo文bar\", \"\", \"\"]")
  inspect(
    buffer_json(terminal.buffer().active()).stringify(),
    content="{\"type\":\"normal\",\"cursorX\":0,\"cursorY\":1,\"viewportY\":0," +
      "\"baseY\":0,\"length\":3}",
  )
  inspect(
    modes_json(terminal.modes()).stringify(),
    content="{\"applicationCursorKeysMode\":true,\"applicationKeypadMode\":false," +
      "\"bracketedPasteMode\":false,\"insertMode\":false," +
      "\"mouseTrackingMode\":\"any\",\"originMode\":false," +
      "\"reverseWraparoundMode\":false,\"sendFocusMode\":false," +
      "\"showCursor\":true,\"synchronizedOutputMode\":false," +
      "\"win32InputMode\":false,\"wraparoundMode\":true}",
  )
  inspect(
    events_json(titles, data_events, bell_count.val).stringify(),
    content="{\"title\":[\"title\"],\"data\":[\"kbd\"],\"bell\":1}",
  )
  inspect(mouse_mode_name(@headless.MouseTrackingMode::Vt200), content="vt200")
  inspect(
    buffer_type_name(@headless.BufferType::Alternate),
    content="alternate",
  )
}
