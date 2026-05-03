///|
fn css_bool(value : Bool) -> String {
  if value {
    "true"
  } else {
    "false"
  }
}

///|
fn cell_class(cell : RenderCell) -> String {
  let mut class_name = "mb-xterm-cell"
  if cell.is_cursor {
    class_name = class_name + " mb-xterm-cell-cursor"
  }
  if cell.width == 0 {
    class_name = class_name + " mb-xterm-cell-zero-width"
  } else if cell.width > 1 {
    class_name = class_name + " mb-xterm-cell-wide"
  }
  class_name
}

///|
fn cell_text(cell : RenderCell) -> String {
  if cell.chars == "" {
    " "
  } else {
    cell.chars
  }
}

///|
fn render_cell(cell : RenderCell) -> @html.Html {
  @html.span(
    class=cell_class(cell),
    attrs=@html.Attrs::build()
      .data_set("x", "\{cell.x}")
      .data_set("width", "\{cell.width}")
      .data_set("fg", "\{cell.fg}")
      .data_set("bg", "\{cell.bg}")
      .data_set("cursor", css_bool(cell.is_cursor)),
    cell_text(cell),
  )
}

///|
fn row_class(row : RenderRow) -> String {
  if row.is_wrapped {
    "mb-xterm-row mb-xterm-row-wrapped"
  } else {
    "mb-xterm-row"
  }
}

///|
fn render_row(row : RenderRow) -> @html.Html {
  @html.div(
    class=row_class(row),
    attrs=@html.Attrs::build()
      .data_set("row", "\{row.y}")
      .data_set("buffer-index", "\{row.buffer_index}")
      .data_set("dirty", css_bool(row.dirty)),
    row.cells.map(cell => render_cell(cell)),
  )
}

///|
fn render_terminal_view(model : RenderModel, screen_id : String) -> @html.Html {
  let focus_class = if model.focused { " mb-xterm-focused" } else { "" }
  @html.div(
    class="mb-xterm" + focus_class,
    attrs=@html.Attrs::build()
      .role("terminal")
      .tabindex(0)
      .aria_label("Terminal output")
      .data_set("cols", "\{model.cols}")
      .data_set("rows", "\{model.rows}")
      .data_set("cursor-x", "\{model.cursor_x}")
      .data_set("cursor-y", "\{model.cursor_y}")
      .data_set("viewport-y", "\{model.viewport_y}")
      .data_set("base-y", "\{model.base_y}"),
    [
      @html.div(
        id=screen_id,
        class="mb-xterm-screen",
        attrs=@html.Attrs::build().data_set("testid", "terminal-screen"),
        model.rows_data.map(row => render_row(row)),
      ),
    ],
  )
}
