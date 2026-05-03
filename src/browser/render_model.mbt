///|
pub type TerminalOptions = @headless.TerminalOptions

///|
pub(all) struct RenderCell {
  x : Int
  chars : String
  width : Int
  fg : Int
  bg : Int
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
fn blank_cell(x : Int, cursor_x : Int, cursor_y : Int, y : Int) -> RenderCell {
  {
    x,
    chars: "",
    width: 1,
    fg: 0,
    bg: 0,
    is_cursor: x == cursor_x && y == cursor_y,
  }
}

///|
fn render_cell_from_view(
  cell : @headless.BufferCellView,
  x : Int,
  cursor_x : Int,
  cursor_y : Int,
  y : Int,
) -> RenderCell {
  {
    x,
    chars: cell.get_chars(),
    width: cell.get_width(),
    fg: cell.get_fg(),
    bg: cell.get_bg(),
    is_cursor: x == cursor_x && y == cursor_y,
  }
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
