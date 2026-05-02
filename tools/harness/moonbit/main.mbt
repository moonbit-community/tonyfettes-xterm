///|
fn int_arg(args : Array[String], index : Int, fallback : Int) -> Int {
  if args.length() <= index {
    return fallback
  }
  @string.parse_int(args[index]) catch {
    _ => fallback
  }
}

///|
fn parse_bytes(value : String) -> Bytes {
  let bytes : Array[Byte] = []
  if value.length() == 0 {
    return Bytes::from_array(bytes)
  }
  for part in value.split(",") {
    let byte = @string.parse_int(part) catch { _ => panic() }
    bytes.push(byte.to_byte())
  }
  Bytes::from_array(bytes)
}

///|
fn apply_steps(
  terminal : @headless.Terminal,
  args : Array[String],
  start : Int,
) -> Unit {
  let mut i = start
  while i < args.length() {
    match args[i] {
      "write" => {
        terminal.write(args[i + 1])
        i += 2
      }
      "writeln" => {
        terminal.writeln(args[i + 1])
        i += 2
      }
      "writeBytes" => {
        terminal.write_bytes(parse_bytes(args[i + 1])) catch {
          _ => panic()
        }
        i += 2
      }
      "writelnBytes" => {
        terminal.writeln_bytes(parse_bytes(args[i + 1])) catch {
          _ => panic()
        }
        i += 2
      }
      "input" => {
        terminal.input(args[i + 1])
        i += 2
      }
      "resize" => {
        terminal.resize(
          int_arg(args, i + 1, terminal.cols()),
          int_arg(args, i + 2, terminal.rows()),
        )
        i += 3
      }
      "scrollLines" => {
        terminal.scroll_lines(int_arg(args, i + 1, 0))
        i += 2
      }
      "scrollPages" => {
        terminal.scroll_pages(int_arg(args, i + 1, 0))
        i += 2
      }
      "scrollToLine" => {
        terminal.scroll_to_line(int_arg(args, i + 1, 0))
        i += 2
      }
      "scrollToTop" => {
        terminal.scroll_to_top()
        i += 1
      }
      "scrollToBottom" => {
        terminal.scroll_to_bottom()
        i += 1
      }
      "clear" => {
        terminal.clear()
        i += 1
      }
      "reset" => {
        terminal.reset()
        i += 1
      }
      _ => panic()
    }
  }
}

///|
fn buffer_type_name(value : @headless.BufferType) -> String {
  match value {
    @headless.BufferType::Normal => "normal"
    @headless.BufferType::Alternate => "alternate"
  }
}

///|
fn mouse_mode_name(value : @headless.MouseTrackingMode) -> String {
  match value {
    @headless.MouseTrackingMode::None => "none"
    @headless.MouseTrackingMode::X10 => "x10"
    @headless.MouseTrackingMode::Vt200 => "vt200"
    @headless.MouseTrackingMode::Drag => "drag"
    @headless.MouseTrackingMode::Any => "any"
  }
}

///|
fn snapshot_lines(terminal : @headless.Terminal) -> Array[String] {
  let active = terminal.buffer().active()
  let lines : Array[String] = []
  for y = 0; y < terminal.rows(); y = y + 1 {
    let line = match active.get_line(active.viewport_y() + y) {
      Some(line) => line.translate_to_string(trim_right=true)
      None => ""
    }
    lines.push(line)
  }
  lines
}

///|
fn buffer_json(buffer : @headless.BufferView) -> Json {
  {
    "type": buffer_type_name(buffer.buffer_type()),
    "cursorX": buffer.cursor_x(),
    "cursorY": buffer.cursor_y(),
    "viewportY": buffer.viewport_y(),
    "baseY": buffer.base_y(),
    "length": buffer.length(),
  }
}

///|
fn modes_json(modes : @headless.Modes) -> Json {
  {
    "applicationCursorKeysMode": modes.application_cursor_keys_mode,
    "applicationKeypadMode": modes.application_keypad_mode,
    "bracketedPasteMode": modes.bracketed_paste_mode,
    "insertMode": modes.insert_mode,
    "mouseTrackingMode": mouse_mode_name(modes.mouse_tracking_mode),
    "originMode": modes.origin_mode,
    "reverseWraparoundMode": modes.reverse_wraparound_mode,
    "sendFocusMode": modes.send_focus_mode,
    "showCursor": modes.show_cursor,
    "synchronizedOutputMode": modes.synchronized_output_mode,
    "win32InputMode": modes.win32_input_mode,
    "wraparoundMode": modes.wraparound_mode,
  }
}

///|
fn events_json(
  title_events : Array[String],
  data_events : Array[String],
  bell_count : Int,
) -> Json {
  { "title": title_events, "data": data_events, "bell": bell_count }
}

///|
fn main {
  let args = @env.args()
  let case_name = if args.length() > 1 { args[1] } else { "" }
  let cols = int_arg(args, 2, 80)
  let rows = int_arg(args, 3, 24)
  let scrollback = int_arg(args, 4, 1000)
  let terminal = @headless.Terminal::new(
    options=@headless.TerminalOptions::new(
      cols~,
      rows~,
      scrollback~,
      allow_proposed_api=true,
    ),
  )
  let title_events : Array[String] = []
  let data_events : Array[String] = []
  let bell_count : Ref[Int] = Ref::{ val: 0 }
  terminal.on_title_change(fn(title) { title_events.push(title) }) |> ignore
  terminal.on_data(fn(data) { data_events.push(data) }) |> ignore
  terminal.on_bell(fn(_) { bell_count.val += 1 }) |> ignore

  apply_steps(terminal, args, 5)

  let lines = snapshot_lines(terminal)
  let snapshot : Json = {
    "case": case_name,
    "cols": terminal.cols(),
    "rows": terminal.rows(),
    "screen": lines.join("\n"),
    "lines": lines,
    "buffer": buffer_json(terminal.buffer().active()),
    "modes": modes_json(terminal.modes()),
    "events": events_json(title_events, data_events, bell_count.val),
  }
  println(snapshot.stringify(indent=2))
}
