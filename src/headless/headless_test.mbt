///|
fn expect_line(buffer : BufferView, index : Int) -> BufferLineView raise {
  match buffer.get_line(index) {
    Some(line) => line
    None => fail("expected buffer line")
  }
}

///|
fn expect_cell(line : BufferLineView, index : Int) -> BufferCellView raise {
  match line.get_cell(index) {
    Some(cell) => cell
    None => fail("expected buffer cell")
  }
}

///|
test "Terminal constructs with default and custom options" {
  let terminal = Terminal::new()
  guard terminal.cols() == 80 && terminal.rows() == 24 else {
    fail("default terminal size should match xterm.js defaults")
  }
  guard terminal.options() == TerminalOptions::new() else {
    fail("default options should round-trip")
  }

  let custom = TerminalOptions::new(
    cols=4,
    rows=3,
    scrollback=2,
    allow_proposed_api=true,
    font_size=13,
    font_family="serif",
    line_height=2,
    cursor_width=3,
  )
  let custom_terminal = Terminal::new(options=custom)
  guard custom_terminal.cols() == 4 && custom_terminal.rows() == 3 else {
    fail("custom dimensions should initialize the core terminal")
  }
  guard custom_terminal.options() == custom else {
    fail("custom options should be retained")
  }

  custom_terminal.set_options(
    TerminalOptions::new(
      cols=99,
      rows=99,
      scrollback=7,
      font_size=12,
      font_family="mono",
      line_height=1,
      cursor_width=2,
    ),
  )
  guard custom_terminal.cols() == 4 &&
    custom_terminal.rows() == 3 &&
    custom_terminal.options().cols == 4 &&
    custom_terminal.options().rows == 3 &&
    custom_terminal.options().scrollback == 7 else {
    fail("set_options should not resize the terminal")
  }

  let clamped = TerminalOptions::new(cols=0, rows=0, scrollback=-1)
  guard clamped.cols == 1 && clamped.rows == 1 && clamped.scrollback == 0 else {
    fail("options should clamp invalid dimensions")
  }
}

///|
test "Terminal exposes modes and reset defaults" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=5, rows=2))
  guard terminal.modes() ==
    Modes::{
      application_cursor_keys_mode: false,
      application_keypad_mode: false,
      bracketed_paste_mode: false,
      insert_mode: false,
      mouse_tracking_mode: MouseTrackingMode::None,
      origin_mode: false,
      reverse_wraparound_mode: false,
      send_focus_mode: false,
      show_cursor: true,
      synchronized_output_mode: false,
      win32_input_mode: false,
      wraparound_mode: true,
    } else {
    fail("new terminals should expose mode defaults")
  }

  terminal.write("\u{1b}[?9h")
  guard terminal.modes().mouse_tracking_mode == MouseTrackingMode::X10 else {
    fail("DECSET ?9 should expose X10 mouse tracking")
  }
  terminal.write("\u{1b}[?1000h")
  guard terminal.modes().mouse_tracking_mode == MouseTrackingMode::Vt200 else {
    fail("DECSET ?1000 should expose VT200 mouse tracking")
  }
  terminal.write("\u{1b}[?1003h")
  guard terminal.modes().mouse_tracking_mode == MouseTrackingMode::Any else {
    fail("DECSET ?1003 should expose any-event mouse tracking")
  }

  terminal.write(
    "\u{1b}[4h" +
    "\u{1b}[?1;6;45;66;1002;1004;2004;2026;9001h" +
    "\u{1b}[?25;7l",
  )
  let modes = terminal.modes()
  guard modes.insert_mode &&
    modes.application_cursor_keys_mode &&
    modes.application_keypad_mode &&
    modes.bracketed_paste_mode &&
    modes.mouse_tracking_mode == MouseTrackingMode::Drag &&
    modes.origin_mode &&
    modes.reverse_wraparound_mode &&
    modes.send_focus_mode &&
    !modes.show_cursor &&
    modes.synchronized_output_mode &&
    modes.win32_input_mode &&
    !modes.wraparound_mode else {
    fail("CSI modes should be reflected by the public mode snapshot")
  }

  terminal.reset()
  guard terminal.modes() ==
    Terminal::new(options=TerminalOptions::new(cols=5, rows=2)).modes() else {
    fail("reset should restore mode defaults")
  }
}

///|
test "Terminal writes strings, bytes, and line endings" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=8, rows=3))
  let callbacks : Ref[Int] = Ref::{ val: 0 }

  terminal.write("ab", callback=fn() { callbacks.val += 1 })
  terminal.write_bytes(@utf8.encode("中"), callback=fn() { callbacks.val += 1 })
  terminal.writeln("c", callback=fn() { callbacks.val += 1 })
  terminal.writeln_bytes(@utf8.encode("de"), callback=fn() {
    callbacks.val += 1
  })

  let active = terminal.buffer().active()
  inspect(
    expect_line(active, 0).translate_to_string(trim_right=true),
    content="ab中c",
  )
  inspect(
    expect_line(active, 1).translate_to_string(trim_right=true),
    content="de",
  )
  guard callbacks.val == 4 else { fail("write callbacks should run") }
}

///|
test "Terminal exposes public buffer views" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=4, rows=2))
  let buffers = terminal.buffer()
  guard buffers.active().buffer_type() == BufferType::Normal &&
    buffers.normal().buffer_type() == BufferType::Normal &&
    buffers.alternate().buffer_type() == BufferType::Alternate else {
    fail("buffer namespace should expose active, normal, and alternate buffers")
  }

  terminal.write("ab中")
  let normal = buffers.active()
  guard normal.cursor_x() == 4 &&
    normal.cursor_y() == 0 &&
    normal.viewport_y() == 0 &&
    normal.base_y() == 0 &&
    normal.length() == 2 else {
    fail("buffer view should expose cursor and scroll state")
  }
  let line = expect_line(normal, 0)
  inspect(line.translate_to_string(trim_right=true), content="ab中")
  guard !line.is_wrapped() && line.length() == 4 else {
    fail("line view should expose line metadata")
  }
  let cell = expect_cell(line, 2)
  guard cell.get_chars() == "中" &&
    cell.get_width() == 2 &&
    cell.get_code() == 0x4E2D &&
    cell.get_fg() == 0 &&
    cell.get_bg() == 0 else {
    fail("cell view should expose content and attributes")
  }

  terminal.write("\u{1b}[?47h\rxy")
  guard buffers.active().buffer_type() == BufferType::Alternate else {
    fail("DEC private mode 47 should activate the alternate buffer")
  }
  inspect(
    expect_line(buffers.active(), 0).translate_to_string(trim_right=true),
    content="xy",
  )

  terminal.write("\u{1b}[?47l")
  guard buffers.active().buffer_type() == BufferType::Normal else {
    fail("resetting DEC private mode 47 should restore normal buffer")
  }
  inspect(
    expect_line(buffers.active(), 0).translate_to_string(trim_right=true),
    content="ab中",
  )
  match line.get_cell(-1) {
    None => ()
    Some(_) => fail("out-of-range cells should return None")
  }
  match normal.get_line(-1) {
    None => ()
    Some(_) => fail("out-of-range lines should return None")
  }
}

///|
test "Terminal parser API registers custom handlers" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=5, rows=2))
  let reports : Array[String] = []
  let parser = terminal.parser()

  parser.register_csi_handler(
    { prefix: Some("?"), intermediates: None, final_byte: "z" },
    fn(params) {
      reports.push("csi:\{params.params_slice()}")
      true
    },
  )
  |> ignore
  parser.register_esc_handler(
    { prefix: None, intermediates: None, final_byte: "7" },
    fn() {
      reports.push("esc")
      true
    },
  )
  |> ignore
  parser.register_osc_handler(9, fn(data) {
    reports.push("osc:\{data}")
    true
  })
  |> ignore
  parser.register_dcs_handler(
    { prefix: None, intermediates: Some("+"), final_byte: "p" },
    fn(data, params) {
      reports.push("dcs:\{params.params_slice()}:\{data}")
      true
    },
  )
  |> ignore
  parser.register_apc_handler(
    { prefix: None, intermediates: Some("+"), final_byte: "p" },
    fn(data) {
      reports.push("apc:\{data}")
      true
    },
  )
  |> ignore

  terminal.write("\u{1b}[?1;2z")
  terminal.write("\u{1b}7")
  terminal.write("\u{1b}]9;hello\u{0007}")
  terminal.write("\u{1b}P1+pabc\u{1b}\\")
  terminal.write("\u{1b}_+pxyz\u{1b}\\")

  inspect(
    reports,
    content="[\"csi:[1, 2]\", \"esc\", \"osc:hello\", " +
      "\"dcs:[1]:abc\", \"apc:xyz\"]",
  )
}

///|
test "Terminal events fire through the headless API" {
  let terminal = Terminal::new(options=TerminalOptions::new(cols=3, rows=2))
  let data_events : Array[String] = []
  let title_events : Array[String] = []
  let scroll_events : Array[Int] = []
  let resize_events : Array[String] = []
  let render_events : Array[RenderEvent] = []
  let bell_count : Ref[Int] = Ref::{ val: 0 }
  let line_feed_count : Ref[Int] = Ref::{ val: 0 }
  let cursor_move_count : Ref[Int] = Ref::{ val: 0 }
  let write_parsed_count : Ref[Int] = Ref::{ val: 0 }
  let binary_count : Ref[Int] = Ref::{ val: 0 }

  let binary_disposable = terminal.on_binary(fn(_) { binary_count.val += 1 })
  binary_disposable.dispose()
  binary_disposable.dispose()
  terminal.on_data(fn(data) { data_events.push(data) }) |> ignore
  terminal.on_bell(fn(_) { bell_count.val += 1 }) |> ignore
  terminal.on_line_feed(fn(_) { line_feed_count.val += 1 }) |> ignore
  terminal.on_cursor_move(fn(_) { cursor_move_count.val += 1 }) |> ignore
  terminal.on_render(fn(event) { render_events.push(event) }) |> ignore
  terminal.on_resize(fn(event) {
    resize_events.push("\{event.cols}x\{event.rows}")
  })
  |> ignore
  terminal.on_scroll(fn(value) { scroll_events.push(value) }) |> ignore
  terminal.on_title_change(fn(title) { title_events.push(title) }) |> ignore
  terminal.on_write_parsed(fn(_) { write_parsed_count.val += 1 }) |> ignore

  terminal.input("kbd")
  terminal.write("A")
  terminal.write("\u{0007}")
  terminal.writeln("")
  terminal.write("\u{1b}]2;title\u{0007}")
  terminal.resize(4, 3)
  terminal.resize(4, 3)
  terminal.write("1\r\n2\r\n3\r\n4")
  terminal.write("\u{1b}[1A")

  inspect(data_events, content="[\"kbd\"]")
  inspect(title_events, content="[\"title\"]")
  inspect(resize_events, content="[\"4x3\"]")
  guard binary_count.val == 0 &&
    bell_count.val == 1 &&
    line_feed_count.val >= 4 &&
    cursor_move_count.val >= 1 &&
    render_events.length() >= 5 &&
    scroll_events.length() >= 1 &&
    write_parsed_count.val >= 5 else {
    fail("public events should observe terminal activity")
  }

  terminal.dispose()
  terminal.input("after")
  terminal.write("\u{0007}")
  inspect(data_events, content="[\"kbd\"]")
  guard bell_count.val == 1 else {
    fail("dispose should clear core event listeners")
  }
}

///|
test "Terminal scroll and clear methods update public state" {
  let terminal = Terminal::new(
    options=TerminalOptions::new(cols=3, rows=2, scrollback=5),
  )
  terminal.write("aa\r\nbb\r\ncc")
  guard terminal.buffer().active().base_y() == 1 &&
    terminal.buffer().active().viewport_y() == 1 else {
    fail("writing past the bottom should create scrollback")
  }

  terminal.scroll_to_top()
  guard terminal.buffer().active().viewport_y() == 0 else {
    fail("scroll_to_top should move viewport to scrollback start")
  }
  terminal.scroll_to_bottom()
  guard terminal.buffer().active().viewport_y() == 1 else {
    fail("scroll_to_bottom should move viewport to base")
  }
  terminal.scroll_to_line(0)
  guard terminal.buffer().active().viewport_y() == 0 else {
    fail("scroll_to_line should clamp to requested history line")
  }
  terminal.scroll_lines(10)
  guard terminal.buffer().active().viewport_y() == 1 else {
    fail("scroll_lines should clamp to base")
  }
  terminal.scroll_pages(-1)
  guard terminal.buffer().active().viewport_y() == 0 else {
    fail("scroll_pages should move by viewport-sized pages")
  }

  terminal.clear()
  guard terminal.buffer().active().base_y() == 0 &&
    terminal.buffer().active().viewport_y() == 0 &&
    terminal.buffer().active().cursor_y() == 0 else {
    fail("clear should reset scrollback around the current line")
  }
}
