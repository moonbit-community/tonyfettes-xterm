///|
struct Terminal {
  buffers : @buffer.BufferSet
  parser : @parser.EscapeSequenceParser
  current_attr : @buffer.AttributeData
  mut insert_mode : Bool
}

///|
pub fn Terminal::new(cols : Int, rows : Int, scrollback : Int) -> Terminal {
  let terminal = {
    buffers: @buffer.BufferSet::new(cols, rows, scrollback),
    parser: @parser.EscapeSequenceParser::new(),
    current_attr: @buffer.AttributeData::new(),
    insert_mode: false,
  }
  terminal.install_input_handlers()
  terminal
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
fn clamp(value : Int, low : Int, high : Int) -> Int {
  if value < low {
    low
  } else if value > high {
    high
  } else {
    value
  }
}

///|
fn clear_bits(value : Int, mask : Int) -> Int {
  value & (-mask - 1)
}

///|
fn param_or(params : @parser.Params, index : Int, fallback : Int) -> Int {
  if index >= params.length() {
    return fallback
  }
  let value = params.param_at(index)
  if value <= 0 {
    fallback
  } else {
    value
  }
}

///|
fn csi_id(final_byte : String) -> @parser.FunctionIdentifier {
  { prefix: None, intermediates: None, final_byte }
}

///|
fn csi_id_with_prefix(
  prefix : String,
  final_byte : String,
) -> @parser.FunctionIdentifier {
  { prefix: Some(prefix), intermediates: None, final_byte }
}

///|
fn Terminal::install_input_handlers(self : Terminal) -> Unit {
  let parser = self.parser
  parser.set_print_handler(fn(data) { self.print(data) })
  parser.set_execute_handler("\u{0007}", fn(_) { true })
  parser.set_execute_handler("\u{0008}", fn(_) {
    self.backspace()
    true
  })
  parser.set_execute_handler("\u{0009}", fn(_) {
    self.tab()
    true
  })
  parser.set_execute_handler("\u{000a}", fn(_) {
    self.line_feed()
    true
  })
  parser.set_execute_handler("\u{000b}", fn(_) {
    self.line_feed()
    true
  })
  parser.set_execute_handler("\u{000c}", fn(_) {
    self.line_feed()
    true
  })
  parser.set_execute_handler("\u{000d}", fn(_) {
    self.carriage_return()
    true
  })
  parser.set_execute_handler("\u{000e}", fn(_) { true })
  parser.set_execute_handler("\u{000f}", fn(_) { true })

  parser.register_csi_handler(csi_id("@"), fn(params) {
    self.insert_chars(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("A"), fn(params) {
    self.move_cursor(0, -param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("B"), fn(params) {
    self.move_cursor(0, param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("C"), fn(params) {
    self.move_cursor(param_or(params, 0, 1), 0)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("D"), fn(params) {
    self.move_cursor(-param_or(params, 0, 1), 0)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("E"), fn(params) {
    self.move_cursor(0, param_or(params, 0, 1))
    self.carriage_return()
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("F"), fn(params) {
    self.move_cursor(0, -param_or(params, 0, 1))
    self.carriage_return()
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("G"), fn(params) {
    self.set_cursor_x(param_or(params, 0, 1) - 1)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("H"), fn(params) {
    self.set_cursor(param_or(params, 1, 1) - 1, param_or(params, 0, 1) - 1)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("J"), fn(params) {
    self.erase_in_display(param_or(params, 0, 0))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("K"), fn(params) {
    self.erase_in_line(param_or(params, 0, 0))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("L"), fn(params) {
    self.insert_lines(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("M"), fn(params) {
    self.delete_lines(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("P"), fn(params) {
    self.delete_chars(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("S"), fn(params) {
    self.scroll_up(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("T"), fn(params) {
    self.scroll_down(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("X"), fn(params) {
    self.erase_chars(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("`"), fn(params) {
    self.set_cursor_x(param_or(params, 0, 1) - 1)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("a"), fn(params) {
    self.move_cursor(param_or(params, 0, 1), 0)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("d"), fn(params) {
    self.set_cursor_y(param_or(params, 0, 1) - 1)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("e"), fn(params) {
    self.move_cursor(0, param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("f"), fn(params) {
    self.set_cursor(param_or(params, 1, 1) - 1, param_or(params, 0, 1) - 1)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("h"), fn(params) {
    self.set_mode(params, true)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("l"), fn(params) {
    self.set_mode(params, false)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("m"), fn(params) {
    self.char_attributes(params)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("r"), fn(params) {
    self.set_scroll_region(params)
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id("^"), fn(params) {
    self.scroll_down(param_or(params, 0, 1))
    true
  })
  |> ignore
  parser.register_csi_handler(csi_id_with_prefix("?", "h"), fn(_) { true })
  |> ignore
  parser.register_csi_handler(csi_id_with_prefix("?", "l"), fn(_) { true })
  |> ignore
}

///|
fn Terminal::set_cursor_x(self : Terminal, x : Int) -> Unit {
  let buffer = self.buffer()
  buffer.set_x(clamp(x, 0, buffer.cols() - 1))
}

///|
fn Terminal::set_cursor_y(self : Terminal, y : Int) -> Unit {
  let buffer = self.buffer()
  buffer.set_y(clamp(y, 0, buffer.rows() - 1))
}

///|
fn Terminal::set_cursor(self : Terminal, x : Int, y : Int) -> Unit {
  self.set_cursor_x(x)
  self.set_cursor_y(y)
}

///|
fn Terminal::move_cursor(self : Terminal, dx : Int, dy : Int) -> Unit {
  let buffer = self.buffer()
  self.set_cursor(buffer.x() + dx, buffer.y() + dy)
}

///|
fn Terminal::carriage_return(self : Terminal) -> Unit {
  self.buffer().set_x(0)
}

///|
fn Terminal::line_feed(self : Terminal) -> Unit {
  self.line_feed_wrapped(false)
}

///|
fn Terminal::line_feed_wrapped(self : Terminal, is_wrapped : Bool) -> Unit {
  let buffer = self.buffer()
  if buffer.y() == buffer.scroll_bottom() {
    self.scroll_up(1)
  } else if buffer.y() < buffer.rows() - 1 {
    buffer.set_y(buffer.y() + 1)
  }
  match buffer.line_at_cursor() {
    Some(line) => line.set_is_wrapped(is_wrapped)
    None => ()
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
fn Terminal::tab(self : Terminal) -> Unit {
  let buffer = self.buffer()
  let next = (buffer.x() / 8 + 1) * 8
  buffer.set_x(clamp(next, 0, buffer.cols() - 1))
}

///|
fn Terminal::line_at_active_y(self : Terminal, y : Int) -> @buffer.BufferLine? {
  let buffer = self.buffer()
  buffer.lines().get(buffer.ybase() + y)
}

///|
fn Terminal::blank_cell(self : Terminal) -> @buffer.CellData {
  self.buffer().get_null_cell(Some(self.current_attr))
}

///|
fn Terminal::blank_line(self : Terminal) -> @buffer.BufferLine {
  self.buffer().get_blank_line(Some(self.current_attr), false)
}

///|
fn is_combining(codepoint : Int) -> Bool {
  (codepoint >= 0x0300 && codepoint <= 0x036F) ||
  (codepoint >= 0x1AB0 && codepoint <= 0x1AFF) ||
  (codepoint >= 0x1DC0 && codepoint <= 0x1DFF) ||
  (codepoint >= 0x20D0 && codepoint <= 0x20FF) ||
  (codepoint >= 0xFE20 && codepoint <= 0xFE2F)
}

///|
fn is_wide(codepoint : Int) -> Bool {
  (codepoint >= 0x1100 && codepoint <= 0x115F) ||
  (codepoint >= 0x2329 && codepoint <= 0x232A) ||
  (codepoint >= 0x2E80 && codepoint <= 0xA4CF) ||
  (codepoint >= 0xAC00 && codepoint <= 0xD7A3) ||
  (codepoint >= 0xF900 && codepoint <= 0xFAFF) ||
  (codepoint >= 0xFE10 && codepoint <= 0xFE19) ||
  (codepoint >= 0xFE30 && codepoint <= 0xFE6F) ||
  (codepoint >= 0xFF00 && codepoint <= 0xFF60) ||
  (codepoint >= 0xFFE0 && codepoint <= 0xFFE6)
}

///|
fn char_width(codepoint : Int) -> Int {
  if is_combining(codepoint) {
    0
  } else if is_wide(codepoint) {
    2
  } else {
    1
  }
}

///|
fn Terminal::print(self : Terminal, data : String) -> Unit {
  for char in data {
    self.print_codepoint(char.to_int())
  }
}

///|
fn Terminal::print_codepoint(self : Terminal, codepoint : Int) -> Unit {
  let width = char_width(codepoint)
  let buffer = self.buffer()
  if width == 0 {
    match buffer.line_at_cursor() {
      Some(line) if buffer.x() > 0 =>
        line.add_codepoint_to_cell(buffer.x() - 1, codepoint, 0)
      _ => ()
    }
    return
  }

  if buffer.x() >= buffer.cols() || buffer.x() + width > buffer.cols() {
    buffer.set_x(0)
    self.line_feed_wrapped(true)
  }

  match buffer.line_at_cursor() {
    Some(line) => {
      if self.insert_mode {
        line.insert_cells(buffer.x(), width, self.blank_cell())
      }
      line.set_cell_from_codepoint(
        buffer.x(),
        codepoint,
        width,
        self.current_attr,
      )
      if width == 2 && buffer.x() + 1 < buffer.cols() {
        line.set_cell_from_codepoint(buffer.x() + 1, 0, 0, self.current_attr)
      }
      buffer.set_x(buffer.x() + width)
    }
    None => ()
  }
}

///|
fn Terminal::insert_chars(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  if buffer.x() >= buffer.cols() {
    return
  }
  match buffer.line_at_cursor() {
    Some(line) => line.insert_cells(buffer.x(), count, self.blank_cell())
    None => ()
  }
}

///|
fn Terminal::delete_chars(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  if buffer.x() >= buffer.cols() {
    return
  }
  match buffer.line_at_cursor() {
    Some(line) => line.delete_cells(buffer.x(), count, self.blank_cell())
    None => ()
  }
}

///|
fn Terminal::erase_chars(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  match buffer.line_at_cursor() {
    Some(line) =>
      line.replace_cells(buffer.x(), buffer.x() + count, self.blank_cell())
    None => ()
  }
}

///|
fn Terminal::erase_in_line(self : Terminal, mode : Int) -> Unit {
  let buffer = self.buffer()
  match buffer.line_at_cursor() {
    Some(line) =>
      match mode {
        1 => line.replace_cells(0, buffer.x() + 1, self.blank_cell())
        2 => line.replace_cells(0, buffer.cols(), self.blank_cell())
        _ => line.replace_cells(buffer.x(), buffer.cols(), self.blank_cell())
      }
    None => ()
  }
}

///|
fn Terminal::erase_line_range(
  self : Terminal,
  y : Int,
  start : Int,
  end : Int,
) -> Unit {
  match self.line_at_active_y(y) {
    Some(line) => line.replace_cells(start, end, self.blank_cell())
    None => ()
  }
}

///|
fn Terminal::erase_in_display(self : Terminal, mode : Int) -> Unit {
  let buffer = self.buffer()
  match mode {
    1 => {
      for y = 0; y < buffer.y(); y = y + 1 {
        self.erase_line_range(y, 0, buffer.cols())
      }
      self.erase_line_range(buffer.y(), 0, buffer.x() + 1)
    }
    2 =>
      for y = 0; y < buffer.rows(); y = y + 1 {
        self.erase_line_range(y, 0, buffer.cols())
      }
    3 =>
      if buffer.ybase() > 0 {
        buffer.lines().trim_start(buffer.ybase())
        buffer.set_ybase(0)
        buffer.set_ydisp(0)
      }
    _ => {
      self.erase_line_range(buffer.y(), buffer.x(), buffer.cols())
      for y = buffer.y() + 1; y < buffer.rows(); y = y + 1 {
        self.erase_line_range(y, 0, buffer.cols())
      }
    }
  }
}

///|
fn Terminal::insert_lines(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  if buffer.y() < buffer.scroll_top() || buffer.y() > buffer.scroll_bottom() {
    return
  }
  let count = if count > buffer.scroll_bottom() - buffer.y() + 1 {
    buffer.scroll_bottom() - buffer.y() + 1
  } else {
    count
  }
  for _i = 0; _i < count; _i = _i + 1 {
    let base = buffer.ybase()
    buffer.lines().splice(base + buffer.scroll_bottom(), 1, [])
    buffer.lines().splice(base + buffer.y(), 0, [self.blank_line()])
  }
  buffer.set_x(0)
}

///|
fn Terminal::delete_lines(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  if buffer.y() < buffer.scroll_top() || buffer.y() > buffer.scroll_bottom() {
    return
  }
  let count = if count > buffer.scroll_bottom() - buffer.y() + 1 {
    buffer.scroll_bottom() - buffer.y() + 1
  } else {
    count
  }
  for _i = 0; _i < count; _i = _i + 1 {
    let base = buffer.ybase()
    buffer.lines().splice(base + buffer.y(), 1, [])
    buffer.lines().splice(base + buffer.scroll_bottom(), 0, [self.blank_line()])
  }
  buffer.set_x(0)
}

///|
fn Terminal::is_full_scroll_region(self : Terminal) -> Bool {
  let buffer = self.buffer()
  buffer.scroll_top() == 0 && buffer.scroll_bottom() == buffer.rows() - 1
}

///|
fn Terminal::scroll_up(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  for _i = 0; _i < count; _i = _i + 1 {
    if self.is_full_scroll_region() {
      buffer.scroll_up_one(Some(self.current_attr))
    } else {
      let base = buffer.ybase()
      buffer.lines().splice(base + buffer.scroll_top(), 1, [])
      buffer
      .lines()
      .splice(base + buffer.scroll_bottom(), 0, [self.blank_line()])
    }
  }
}

///|
fn Terminal::scroll_down(self : Terminal, count : Int) -> Unit {
  let buffer = self.buffer()
  for _i = 0; _i < count; _i = _i + 1 {
    let base = buffer.ybase()
    buffer.lines().splice(base + buffer.scroll_bottom(), 1, [])
    buffer.lines().splice(base + buffer.scroll_top(), 0, [self.blank_line()])
  }
}

///|
fn Terminal::set_scroll_region(
  self : Terminal,
  params : @parser.Params,
) -> Unit {
  let buffer = self.buffer()
  let top = clamp(param_or(params, 0, 1) - 1, 0, buffer.rows() - 1)
  let bottom = clamp(
    param_or(params, 1, buffer.rows()) - 1,
    0,
    buffer.rows() - 1,
  )
  if bottom <= top {
    return
  }
  buffer.set_scroll_top(top)
  buffer.set_scroll_bottom(bottom)
  buffer.set_x(0)
  buffer.set_y(0)
}

///|
fn Terminal::set_mode(
  self : Terminal,
  params : @parser.Params,
  enabled : Bool,
) -> Unit {
  for i = 0; i < params.length(); i = i + 1 {
    if params.param_at(i) == 4 {
      self.insert_mode = enabled
    }
  }
}

///|
fn Terminal::reset_attrs(self : Terminal) -> Unit {
  self.current_attr.set_fg(0)
  self.current_attr.set_bg(0)
  self.current_attr.extended().set_underline_style(@buffer.UnderlineStyle::None)
  self.current_attr.extended().set_underline_color(0)
  self.current_attr.extended().set_underline_variant_offset(0)
  self.current_attr.extended().set_url_id(0)
  self.current_attr.update_extended()
}

///|
fn Terminal::set_fg_color(self : Terminal, value : Int) -> Unit {
  let color_mask = @buffer.CmMask | @buffer.RgbMask
  self.current_attr.set_fg(
    clear_bits(self.current_attr.fg(), color_mask) | value,
  )
}

///|
fn Terminal::set_bg_color(self : Terminal, value : Int) -> Unit {
  let color_mask = @buffer.CmMask | @buffer.RgbMask
  self.current_attr.set_bg(
    clear_bits(self.current_attr.bg(), color_mask) | value,
  )
}

///|
fn underline_style(value : Int) -> @buffer.UnderlineStyle {
  match value {
    2 => @buffer.UnderlineStyle::Double
    3 => @buffer.UnderlineStyle::Curly
    4 => @buffer.UnderlineStyle::Dotted
    5 => @buffer.UnderlineStyle::Dashed
    _ => @buffer.UnderlineStyle::Single
  }
}

///|
fn Terminal::set_underline(
  self : Terminal,
  style : @buffer.UnderlineStyle,
) -> Unit {
  self.current_attr.set_fg(self.current_attr.fg() | @buffer.FgUnderline)
  self.current_attr.extended().set_underline_style(style)
  self.current_attr.update_extended()
}

///|
fn Terminal::clear_underline(self : Terminal) -> Unit {
  self.current_attr.set_fg(
    clear_bits(self.current_attr.fg(), @buffer.FgUnderline),
  )
  self.current_attr.extended().set_underline_style(@buffer.UnderlineStyle::None)
  self.current_attr.update_extended()
}

///|
fn Terminal::apply_sgr_color(
  self : Terminal,
  params : @parser.Params,
  index : Int,
  foreground : Bool,
) -> Int {
  if index + 1 >= params.length() {
    return index + 1
  }
  let mode = params.param_at(index + 1)
  if mode == 5 && index + 2 < params.length() {
    let value = @buffer.CmP256 | clamp(params.param_at(index + 2), 0, 255)
    if foreground {
      self.set_fg_color(value)
    } else {
      self.set_bg_color(value)
    }
    return index + 3
  }
  if mode == 2 && index + 4 < params.length() {
    let rgb = @buffer.AttributeData::from_color_rgb(
      (
        clamp(params.param_at(index + 2), 0, 255),
        clamp(params.param_at(index + 3), 0, 255),
        clamp(params.param_at(index + 4), 0, 255),
      ),
    )
    if foreground {
      self.set_fg_color(@buffer.CmRgb | rgb)
    } else {
      self.set_bg_color(@buffer.CmRgb | rgb)
    }
    return index + 5
  }
  index + 1
}

///|
fn Terminal::char_attributes(self : Terminal, params : @parser.Params) -> Unit {
  let mut i = 0
  while i < params.length() {
    let code = params.param_at(i)
    match code {
      0 => self.reset_attrs()
      1 => self.current_attr.set_fg(self.current_attr.fg() | @buffer.FgBold)
      2 => self.current_attr.set_bg(self.current_attr.bg() | @buffer.BgDim)
      3 => self.current_attr.set_bg(self.current_attr.bg() | @buffer.BgItalic)
      4 => {
        let style = match params.get_sub_params(i) {
          Some(subs) if subs.length() > 0 => underline_style(subs[0])
          _ => @buffer.UnderlineStyle::Single
        }
        self.set_underline(style)
      }
      5 | 6 =>
        self.current_attr.set_fg(self.current_attr.fg() | @buffer.FgBlink)
      7 => self.current_attr.set_fg(self.current_attr.fg() | @buffer.FgInverse)
      8 =>
        self.current_attr.set_fg(self.current_attr.fg() | @buffer.FgInvisible)
      21 => self.set_underline(@buffer.UnderlineStyle::Double)
      22 => {
        self.current_attr.set_fg(
          clear_bits(self.current_attr.fg(), @buffer.FgBold),
        )
        self.current_attr.set_bg(
          clear_bits(self.current_attr.bg(), @buffer.BgDim),
        )
      }
      23 =>
        self.current_attr.set_bg(
          clear_bits(self.current_attr.bg(), @buffer.BgItalic),
        )
      24 => self.clear_underline()
      25 =>
        self.current_attr.set_fg(
          clear_bits(self.current_attr.fg(), @buffer.FgBlink),
        )
      27 =>
        self.current_attr.set_fg(
          clear_bits(self.current_attr.fg(), @buffer.FgInverse),
        )
      28 =>
        self.current_attr.set_fg(
          clear_bits(self.current_attr.fg(), @buffer.FgInvisible),
        )
      30..=37 => self.set_fg_color(@buffer.CmP16 | (code - 30))
      38 => {
        i = self.apply_sgr_color(params, i, true)
        continue
      }
      39 => self.set_fg_color(0)
      40..=47 => self.set_bg_color(@buffer.CmP16 | (code - 40))
      48 => {
        i = self.apply_sgr_color(params, i, false)
        continue
      }
      49 => self.set_bg_color(0)
      53 =>
        self.current_attr.set_bg(self.current_attr.bg() | @buffer.BgOverline)
      55 =>
        self.current_attr.set_bg(
          clear_bits(self.current_attr.bg(), @buffer.BgOverline),
        )
      90..=97 => self.set_fg_color(@buffer.CmP16 | (code - 90 + 8))
      100..=107 => self.set_bg_color(@buffer.CmP16 | (code - 100 + 8))
      _ => ()
    }
    i += 1
  }
}

///|
pub fn Terminal::write(self : Terminal, data : String) -> Unit {
  self.parser.parse(data)
}

///|
pub fn Terminal::write_utf8(self : Terminal, data : Bytes) -> Unit raise {
  self.write(@utf8.decode(data.view()))
}

///|
pub fn Terminal::screen_text(self : Terminal, trim_right : Bool) -> String {
  self.buffer().viewport_to_string(trim_right)
}
