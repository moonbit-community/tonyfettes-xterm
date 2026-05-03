///|
pub type TerminalOptions = @headless.TerminalOptions

///|
pub(all) struct RenderCell {
  x : Int
  chars : String
  width : Int
  fg : Int
  bg : Int
  fg_css : String?
  bg_css : String?
  bold : Bool
  dim : Bool
  italic : Bool
  underline : Bool
  blink : Bool
  invisible : Bool
  inverse : Bool
  is_cursor : Bool
} derive(Eq, Debug)

///|
pub(all) struct RenderRow {
  y : Int
  buffer_index : Int
  text : String
  is_wrapped : Bool
  dirty : Bool
  cells : Array[RenderCell]
} derive(Eq, Debug)

///|
pub(all) struct RenderModel {
  cols : Int
  rows : Int
  cursor_x : Int
  cursor_y : Int
  viewport_y : Int
  base_y : Int
  focused : Bool
  rows_data : Array[RenderRow]
} derive(Eq, Debug)

///|
fn rgb_css(r : Int, g : Int, b : Int) -> String {
  "rgb(\{r}, \{g}, \{b})"
}

///|
fn ansi_component(value : Int) -> Int {
  if value == 0 {
    0
  } else {
    55 + value * 40
  }
}

///|
fn palette_color(index : Int) -> String? {
  match index {
    0 => Some("#000000")
    1 => Some("#cd3131")
    2 => Some("#0dbc79")
    3 => Some("#e5e510")
    4 => Some("#2472c8")
    5 => Some("#bc3fbc")
    6 => Some("#11a8cd")
    7 => Some("#e5e5e5")
    8 => Some("#666666")
    9 => Some("#f14c4c")
    10 => Some("#23d18b")
    11 => Some("#f5f543")
    12 => Some("#3b8eea")
    13 => Some("#d670d6")
    14 => Some("#29b8db")
    15 => Some("#e5e5e5")
    _ =>
      if index >= 16 && index <= 231 {
        let value = index - 16
        let r = ansi_component(value / 36)
        let g = ansi_component(value / 6 % 6)
        let b = ansi_component(value % 6)
        Some(rgb_css(r, g, b))
      } else if index >= 232 && index <= 255 {
        let gray = 8 + (index - 232) * 10
        Some(rgb_css(gray, gray, gray))
      } else {
        None
      }
  }
}

///|
fn color_css(attr : Int) -> String? {
  match attr & @buffer.CmMask {
    @buffer.CmP16 | @buffer.CmP256 => palette_color(attr & @buffer.PcolorMask)
    @buffer.CmRgb => {
      let value = attr & @buffer.RgbMask
      Some(
        rgb_css(
          (value >> @buffer.RedShift) & 255,
          (value >> @buffer.GreenShift) & 255,
          value & 255,
        ),
      )
    }
    _ => None
  }
}

///|
fn is_fg_flag(value : Int, flag : Int) -> Bool {
  (value & flag) != 0
}

///|
fn is_bg_flag(value : Int, flag : Int) -> Bool {
  (value & flag) != 0
}

///|
fn make_render_cell(
  x : Int,
  chars : String,
  width : Int,
  fg : Int,
  bg : Int,
  cursor_x : Int,
  cursor_y : Int,
  y : Int,
) -> RenderCell {
  let inverse = is_fg_flag(fg, @buffer.FgInverse)
  let raw_fg_css = color_css(fg)
  let raw_bg_css = color_css(bg)
  {
    x,
    chars,
    width,
    fg,
    bg,
    fg_css: if inverse {
      raw_bg_css
    } else {
      raw_fg_css
    },
    bg_css: if inverse {
      raw_fg_css
    } else {
      raw_bg_css
    },
    bold: is_fg_flag(fg, @buffer.FgBold),
    dim: is_bg_flag(bg, @buffer.BgDim),
    italic: is_bg_flag(bg, @buffer.BgItalic),
    underline: is_fg_flag(fg, @buffer.FgUnderline),
    blink: is_fg_flag(fg, @buffer.FgBlink),
    invisible: is_fg_flag(fg, @buffer.FgInvisible),
    inverse,
    is_cursor: x == cursor_x && y == cursor_y,
  }
}

///|
fn blank_cell(x : Int, cursor_x : Int, cursor_y : Int, y : Int) -> RenderCell {
  make_render_cell(x, "", 1, 0, 0, cursor_x, cursor_y, y)
}

///|
fn render_cell_from_view(
  cell : @headless.BufferCellView,
  x : Int,
  cursor_x : Int,
  cursor_y : Int,
  y : Int,
) -> RenderCell {
  make_render_cell(
    x,
    cell.get_chars(),
    cell.get_width(),
    cell.get_fg(),
    cell.get_bg(),
    cursor_x,
    cursor_y,
    y,
  )
}

///|
pub fn RenderCell::style_declarations(self : RenderCell) -> Array[String] {
  let styles = []
  if self.fg_css is Some(color) {
    styles.push("color: \{color}")
  }
  if self.bg_css is Some(color) {
    styles.push("background-color: \{color}")
  }
  if self.bold {
    styles.push("font-weight: 700")
  }
  if self.dim {
    styles.push("opacity: 0.62")
  }
  if self.italic {
    styles.push("font-style: italic")
  }
  if self.underline {
    styles.push("text-decoration: underline")
  }
  if self.blink {
    styles.push("animation: mb-xterm-blink 1s steps(2, start) infinite")
  }
  if self.invisible {
    styles.push("visibility: hidden")
  }
  styles
}

///|
pub fn RenderCell::text(self : RenderCell) -> String {
  if self.chars == "" {
    " "
  } else {
    self.chars
  }
}

///|
pub fn RenderCell::class_name(self : RenderCell) -> String {
  let mut class_name = "mb-xterm-cell"
  if self.is_cursor {
    class_name = class_name + " mb-xterm-cell-cursor"
  }
  if self.width == 0 {
    class_name = class_name + " mb-xterm-cell-zero-width"
  } else if self.width > 1 {
    class_name = class_name + " mb-xterm-cell-wide"
  }
  if self.bold {
    class_name = class_name + " mb-xterm-cell-bold"
  }
  if self.italic {
    class_name = class_name + " mb-xterm-cell-italic"
  }
  if self.underline {
    class_name = class_name + " mb-xterm-cell-underline"
  }
  if self.inverse {
    class_name = class_name + " mb-xterm-cell-inverse"
  }
  class_name
}

///|
fn blank_text(cols : Int) -> String {
  let mut result = ""
  for _ in 0..<cols {
    result = result + " "
  }
  result
}

///|
fn row_from_line(
  line : @headless.BufferLineView,
  y : Int,
  buffer_index : Int,
  cols : Int,
  cursor_x : Int,
  cursor_y : Int,
) -> RenderRow {
  let cells = []
  for x in 0..<cols {
    let cell = match line.get_cell(x) {
      Some(cell) => render_cell_from_view(cell, x, cursor_x, cursor_y, y)
      None => blank_cell(x, cursor_x, cursor_y, y)
    }
    cells.push(cell)
  }
  {
    y,
    buffer_index,
    text: line.translate_to_string(end_col=cols),
    is_wrapped: line.is_wrapped(),
    dirty: true,
    cells,
  }
}

///|
fn blank_row(
  y : Int,
  buffer_index : Int,
  cols : Int,
  cursor_x : Int,
  cursor_y : Int,
) -> RenderRow {
  let cells = []
  for x in 0..<cols {
    cells.push(blank_cell(x, cursor_x, cursor_y, y))
  }
  {
    y,
    buffer_index,
    text: blank_text(cols),
    is_wrapped: false,
    dirty: true,
    cells,
  }
}

///|
pub fn RenderModel::from_terminal(
  terminal : @headless.Terminal,
  focused? : Bool = false,
) -> RenderModel {
  let active = terminal.buffer().active()
  let cursor_x = active.cursor_x()
  let cursor_y = active.cursor_y()
  let rows_data = []
  for y in 0..<terminal.rows() {
    let buffer_index = active.viewport_y() + y
    let row = match active.get_line(buffer_index) {
      Some(line) =>
        row_from_line(
          line,
          y,
          buffer_index,
          terminal.cols(),
          cursor_x,
          cursor_y,
        )
      None => blank_row(y, buffer_index, terminal.cols(), cursor_x, cursor_y)
    }
    rows_data.push(row)
  }
  {
    cols: terminal.cols(),
    rows: terminal.rows(),
    cursor_x,
    cursor_y,
    viewport_y: active.viewport_y(),
    base_y: active.base_y(),
    focused,
    rows_data,
  }
}

///|
pub fn RenderModel::line_texts(self : RenderModel) -> Array[String] {
  self.rows_data.map(row => row.text)
}
