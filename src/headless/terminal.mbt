///|
struct Terminal {
  core : @core.Terminal
  mut options : TerminalOptions
  on_binary_emitter : @common.Emitter[String]
  on_cursor_move_emitter : @common.Emitter[Unit]
  on_data_emitter : @common.Emitter[String]
  on_render_emitter : @common.Emitter[RenderEvent]
  on_resize_emitter : @common.Emitter[ResizeEvent]
  on_write_parsed_emitter : @common.Emitter[Unit]
}

///|
pub fn Terminal::new(
  options? : TerminalOptions = TerminalOptions::new(),
) -> Terminal {
  let core = @core.Terminal::new(options.cols, options.rows, options.scrollback)
  {
    core,
    options,
    on_binary_emitter: @common.Emitter::new(),
    on_cursor_move_emitter: @common.Emitter::new(),
    on_data_emitter: @common.Emitter::new(),
    on_render_emitter: @common.Emitter::new(),
    on_resize_emitter: @common.Emitter::new(),
    on_write_parsed_emitter: @common.Emitter::new(),
  }
}

///|
pub fn Terminal::cols(self : Terminal) -> Int {
  self.core.cols()
}

///|
pub fn Terminal::rows(self : Terminal) -> Int {
  self.core.rows()
}

///|
pub fn Terminal::options(self : Terminal) -> TerminalOptions {
  self.options
}

///|
pub fn Terminal::set_options(
  self : Terminal,
  options : TerminalOptions,
) -> Unit {
  self.options = {
    cols: self.cols(),
    rows: self.rows(),
    scrollback: options.scrollback,
    allow_proposed_api: options.allow_proposed_api,
    font_size: options.font_size,
    font_family: options.font_family,
    line_height: options.line_height,
    cursor_width: options.cursor_width,
  }
}

///|
pub fn Terminal::modes(self : Terminal) -> Modes {
  {
    application_cursor_keys_mode: self.core.application_cursor_keys_mode(),
    application_keypad_mode: self.core.application_keypad_mode(),
    bracketed_paste_mode: self.core.bracketed_paste_mode(),
    insert_mode: self.core.insert_mode(),
    mouse_tracking_mode: mouse_mode_from_core(self.core.mouse_tracking_mode()),
    origin_mode: self.core.origin_mode(),
    reverse_wraparound_mode: self.core.reverse_wraparound_mode(),
    send_focus_mode: self.core.send_focus_mode(),
    show_cursor: self.core.show_cursor(),
    synchronized_output_mode: self.core.synchronized_output_mode(),
    win32_input_mode: self.core.win32_input_mode(),
    wraparound_mode: self.core.wraparound_mode(),
  }
}

///|
pub fn Terminal::buffer(self : Terminal) -> BufferNamespace {
  { core: self.core }
}

///|
pub fn Terminal::parser(self : Terminal) -> ParserApi {
  { core: self.core }
}

///|
pub fn Terminal::on_bell(
  self : Terminal,
  listener : (Unit) -> Unit,
) -> @common.Disposable {
  self.core.on_bell(listener)
}

///|
pub fn Terminal::on_binary(
  self : Terminal,
  listener : (String) -> Unit,
) -> @common.Disposable {
  self.on_binary_emitter.event(listener)
}

///|
pub fn Terminal::on_cursor_move(
  self : Terminal,
  listener : (Unit) -> Unit,
) -> @common.Disposable {
  self.on_cursor_move_emitter.event(listener)
}

///|
pub fn Terminal::on_data(
  self : Terminal,
  listener : (String) -> Unit,
) -> @common.Disposable {
  self.on_data_emitter.event(listener)
}

///|
pub fn Terminal::on_line_feed(
  self : Terminal,
  listener : (Unit) -> Unit,
) -> @common.Disposable {
  self.core.on_line_feed(listener)
}

///|
pub fn Terminal::on_render(
  self : Terminal,
  listener : (RenderEvent) -> Unit,
) -> @common.Disposable {
  self.on_render_emitter.event(listener)
}

///|
pub fn Terminal::on_resize(
  self : Terminal,
  listener : (ResizeEvent) -> Unit,
) -> @common.Disposable {
  self.on_resize_emitter.event(listener)
}

///|
pub fn Terminal::on_scroll(
  self : Terminal,
  listener : (Int) -> Unit,
) -> @common.Disposable {
  self.core.on_scroll(listener)
}

///|
pub fn Terminal::on_title_change(
  self : Terminal,
  listener : (String) -> Unit,
) -> @common.Disposable {
  self.core.on_title_change(listener)
}

///|
pub fn Terminal::on_write_parsed(
  self : Terminal,
  listener : (Unit) -> Unit,
) -> @common.Disposable {
  self.on_write_parsed_emitter.event(listener)
}

///|
fn Terminal::after_write(
  self : Terminal,
  before_x : Int,
  before_y : Int,
  before_ydisp : Int,
  callback : () -> Unit,
) -> Unit {
  if self.core.cursor_x() != before_x || self.core.cursor_y() != before_y {
    self.on_cursor_move_emitter.fire(())
  }
  let after_y = self.core.cursor_y()
  let start = if before_y < after_y { before_y } else { after_y }
  let end = if before_ydisp != self.core.buffer().ydisp() {
    self.rows() - 1
  } else if before_y > after_y {
    before_y
  } else {
    after_y
  }
  self.on_render_emitter.fire({ start, end })
  self.on_write_parsed_emitter.fire(())
  callback()
}

///|
pub fn Terminal::write(
  self : Terminal,
  data : String,
  callback? : () -> Unit = fn() { () },
) -> Unit {
  let before_x = self.core.cursor_x()
  let before_y = self.core.cursor_y()
  let before_ydisp = self.core.buffer().ydisp()
  self.core.write(data)
  self.after_write(before_x, before_y, before_ydisp, callback)
}

///|
pub fn Terminal::write_bytes(
  self : Terminal,
  data : Bytes,
  callback? : () -> Unit = fn() { () },
) -> Unit raise {
  let before_x = self.core.cursor_x()
  let before_y = self.core.cursor_y()
  let before_ydisp = self.core.buffer().ydisp()
  self.core.write_utf8(data)
  self.after_write(before_x, before_y, before_ydisp, callback)
}

///|
pub fn Terminal::writeln(
  self : Terminal,
  data : String,
  callback? : () -> Unit = fn() { () },
) -> Unit {
  let before_x = self.core.cursor_x()
  let before_y = self.core.cursor_y()
  let before_ydisp = self.core.buffer().ydisp()
  self.core.write(data)
  self.core.write("\r\n")
  self.after_write(before_x, before_y, before_ydisp, callback)
}

///|
pub fn Terminal::writeln_bytes(
  self : Terminal,
  data : Bytes,
  callback? : () -> Unit = fn() { () },
) -> Unit raise {
  let before_x = self.core.cursor_x()
  let before_y = self.core.cursor_y()
  let before_ydisp = self.core.buffer().ydisp()
  self.core.write_utf8(data)
  self.core.write("\r\n")
  self.after_write(before_x, before_y, before_ydisp, callback)
}

///|
pub fn Terminal::input(
  self : Terminal,
  data : String,
  was_user_input? : Bool = true,
) -> Unit {
  ignore(was_user_input)
  self.on_data_emitter.fire(data)
}

///|
pub fn Terminal::resize(self : Terminal, cols : Int, rows : Int) -> Unit {
  let cols = if cols < 1 { 1 } else { cols }
  let rows = if rows < 1 { 1 } else { rows }
  if cols == self.cols() && rows == self.rows() {
    return
  }
  self.core.resize(cols, rows)
  self.options = {
    cols,
    rows,
    scrollback: self.options.scrollback,
    allow_proposed_api: self.options.allow_proposed_api,
    font_size: self.options.font_size,
    font_family: self.options.font_family,
    line_height: self.options.line_height,
    cursor_width: self.options.cursor_width,
  }
  self.on_resize_emitter.fire({ cols, rows })
}

///|
pub fn Terminal::scroll_lines(self : Terminal, amount : Int) -> Unit {
  self.core.scroll_lines(amount)
}

///|
pub fn Terminal::scroll_pages(self : Terminal, page_count : Int) -> Unit {
  self.scroll_lines(page_count * (self.rows() - 1))
}

///|
pub fn Terminal::scroll_to_top(self : Terminal) -> Unit {
  self.core.scroll_to_top()
}

///|
pub fn Terminal::scroll_to_bottom(self : Terminal) -> Unit {
  self.core.scroll_to_bottom()
}

///|
pub fn Terminal::scroll_to_line(self : Terminal, line : Int) -> Unit {
  self.core.scroll_to_line(line)
}

///|
pub fn Terminal::clear(self : Terminal) -> Unit {
  self.core.clear()
}

///|
pub fn Terminal::reset(self : Terminal) -> Unit {
  self.core.reset()
}

///|
pub fn Terminal::dispose(self : Terminal) -> Unit {
  self.core.dispose()
  self.on_binary_emitter.dispose()
  self.on_cursor_move_emitter.dispose()
  self.on_data_emitter.dispose()
  self.on_render_emitter.dispose()
  self.on_resize_emitter.dispose()
  self.on_write_parsed_emitter.dispose()
}
