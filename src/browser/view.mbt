///|
fn css_bool(value : Bool) -> String {
  if value {
    "true"
  } else {
    "false"
  }
}

///|
fn render_cell(cell : RenderCell) -> @html.Html {
  @html.span(
    class=cell.class_name(),
    style=cell.style_declarations(),
    attrs=@html.Attrs::build()
      .data_set("x", "\{cell.x}")
      .data_set("width", "\{cell.width}")
      .data_set("fg", "\{cell.fg}")
      .data_set("bg", "\{cell.bg}")
      .data_set("cursor", css_bool(cell.is_cursor)),
    cell.text(),
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
fn[E : @dom.IsEvent] current_input_from_event(
  event : E,
) -> @dom.HTMLInputElement? {
  let target = match event.current_target().to_option() {
    Some(target) => target
    None => event.target()
  }
  target.to_html_input_element()
}

///|
fn[E : @dom.IsEvent] clear_event_input(event : E) -> Unit {
  if current_input_from_event(event) is Some(input) {
    input.set_value("")
  }
}

///|
fn handle_input_event(
  event : @dom.InputEvent,
  on_text : (String) -> Unit,
) -> @rabbita.Cmd {
  let text = match current_input_from_event(event) {
    Some(input) => input.value()
    None => event.data()
  }
  clear_event_input(event)
  if text != "" {
    on_text(text)
  }
  @rabbita.none
}

///|
fn handle_paste_event(
  event : @dom.ClipboardEvent,
  on_text : (String) -> Unit,
) -> @rabbita.Cmd {
  event.prevent_default()
  clear_event_input(event)
  let text = event.clipboard_data().get_data("text/plain")
  if text != "" {
    on_text(text)
  }
  @rabbita.none
}

///|
fn key_text(event : @dom.KeyboardEvent) -> String? {
  match event.key() {
    "Enter" => Some("\r")
    "Backspace" => Some("\u{7f}")
    "Tab" => Some("\t")
    "Escape" => Some("\u{1b}")
    "ArrowUp" => Some("\u{1b}[A")
    "ArrowDown" => Some("\u{1b}[B")
    "ArrowRight" => Some("\u{1b}[C")
    "ArrowLeft" => Some("\u{1b}[D")
    "Home" => Some("\u{1b}[H")
    "End" => Some("\u{1b}[F")
    "Delete" => Some("\u{1b}[3~")
    _ => None
  }
}

///|
fn handle_keydown_event(
  event : @dom.KeyboardEvent,
  on_text : (String) -> Unit,
) -> @rabbita.Cmd {
  match key_text(event) {
    Some(text) => {
      event.prevent_default()
      on_text(text)
    }
    None => ()
  }
  @rabbita.none
}

///|
fn handle_wheel_event(
  event : @dom.WheelEvent,
  on_scroll : (Int) -> Unit,
) -> @rabbita.Cmd {
  event.prevent_default()
  let amount = if event.get_delta_y() > 0.0 { 3 } else { -3 }
  on_scroll(amount)
  @rabbita.none
}

///|
fn render_terminal_view(
  model : RenderModel,
  screen_id : String,
  input_id : String,
  on_focus_request : () -> Unit,
  on_text : (String) -> Unit,
  on_focus : (Bool) -> Unit,
  on_scroll : (Int) -> Unit,
) -> @html.Html {
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
      .data_set("base-y", "\{model.base_y}")
      .on_mousedown(fn(event) {
        event.prevent_default()
        on_focus_request()
        @rabbita.none
      })
      .on_wheel(fn(event) { handle_wheel_event(event, on_scroll) }),
    [
      @html.div(
        id=screen_id,
        class="mb-xterm-screen",
        attrs=@html.Attrs::build().data_set("testid", "terminal-screen"),
        model.rows_data.map(row => render_row(row)),
      ),
      @html.input(
        input_type=@html.InputType::Text,
        value="",
        id=input_id,
        class="mb-xterm-input",
        attrs=@html.Attrs::build()
          .aria_hidden("true")
          .autocomplete(@html.AutoComplete::Off)
          .autocapitalize("off")
          .spellcheck(false)
          .data_set("testid", "terminal-input")
          .on_input(fn(event) { handle_input_event(event, on_text) })
          .on_paste(fn(event) { handle_paste_event(event, on_text) })
          .on_keydown(fn(event) { handle_keydown_event(event, on_text) })
          .on_focus(fn(_) {
            on_focus(true)
            @rabbita.none
          })
          .on_blur(fn(_) {
            on_focus(false)
            @rabbita.none
          }),
        "",
      ),
    ],
  )
}
