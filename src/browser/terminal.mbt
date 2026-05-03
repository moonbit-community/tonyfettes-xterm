///|
struct Terminal {
  headless : @headless.Terminal
  mut element_id : String?
  mut screen_element_id : String?
  mut input_element_id : String?
  mut app : @rabbita.App?
  mut focused : Bool
  mut disposed : Bool
  mut refresh_scheduled : Bool
}

///|
pub fn Terminal::new(
  options? : TerminalOptions = TerminalOptions::new(),
) -> Terminal {
  {
    headless: @headless.Terminal::new(options~),
    element_id: None,
    screen_element_id: None,
    input_element_id: None,
    app: None,
    focused: false,
    disposed: false,
    refresh_scheduled: false,
  }
}

///|
pub fn Terminal::cols(self : Terminal) -> Int {
  self.headless.cols()
}

///|
pub fn Terminal::rows(self : Terminal) -> Int {
  self.headless.rows()
}

///|
pub fn Terminal::element_id(self : Terminal) -> String? {
  self.element_id
}

///|
pub fn Terminal::screen_element_id(self : Terminal) -> String? {
  self.screen_element_id
}

///|
pub fn Terminal::input_element_id(self : Terminal) -> String? {
  self.input_element_id
}

///|
pub fn Terminal::is_open(self : Terminal) -> Bool {
  self.app is Some(_) && !self.disposed
}

///|
pub fn Terminal::element(self : Terminal) -> @dom.Element? {
  match self.element_id {
    Some(id) => @dom.document().get_element_by_id(id).to_option()
    None => None
  }
}

///|
pub fn Terminal::screen_element(self : Terminal) -> @dom.Element? {
  match self.screen_element_id {
    Some(id) => @dom.document().get_element_by_id(id).to_option()
    None => None
  }
}

///|
pub fn Terminal::input_element(self : Terminal) -> @dom.Element? {
  match self.input_element_id {
    Some(id) => @dom.document().get_element_by_id(id).to_option()
    None => None
  }
}

///|
pub fn Terminal::snapshot(self : Terminal) -> RenderModel {
  RenderModel::from_terminal(self.headless, focused=self.focused)
}

///|
fn Terminal::view(self : Terminal) -> @html.Html {
  let screen_id = self.screen_element_id.unwrap_or("mb-xterm-screen")
  let input_id = self.input_element_id.unwrap_or("mb-xterm-input")
  render_terminal_view(
    self.snapshot(),
    screen_id,
    input_id,
    fn() { self.focus_input() },
    fn(data) { self.input(data) },
    fn(value) { self.set_focused(value) },
    fn(amount) { self.scroll_lines(amount) },
  )
}

///|
pub fn Terminal::open(self : Terminal, element_id : String) -> Unit {
  self.element_id = Some(element_id)
  self.screen_element_id = Some(element_id + "-screen")
  self.input_element_id = Some(element_id + "-input")
  self.refresh()
}

///|
pub fn Terminal::refresh(self : Terminal) -> Unit {
  guard !self.disposed else { return }
  guard self.element_id is Some(element_id) else { return }
  self.refresh_scheduled = false
  let app = @rabbita.new(@rabbita.static_cell(self.view()))
  self.app = Some(app)
  app.mount(element_id)
  if self.focused && self.input_element_id is Some(input_id) {
    focus_input_element(input_id)
  }
}

///|
fn Terminal::schedule_refresh(self : Terminal) -> Unit {
  guard !self.disposed else { return }
  guard self.element_id is Some(_) else { return }
  guard !self.refresh_scheduled else { return }
  self.refresh_scheduled = true
  @dom.window().request_animation_frame(fn(_) { self.refresh() }) |> ignore
}

///|
fn Terminal::set_focused(self : Terminal, value : Bool) -> Unit {
  guard self.focused != value else { return }
  self.focused = value
  self.schedule_refresh()
}

///|
fn Terminal::focus_input(self : Terminal) -> Unit {
  self.set_focused(true)
  if self.input_element_id is Some(input_id) {
    focus_input_element(input_id)
  }
}

///|
pub fn Terminal::focus(self : Terminal) -> Unit {
  self.focused = true
  self.refresh()
  if self.input_element_id is Some(input_id) {
    focus_input_element(input_id)
  }
}

///|
pub fn Terminal::blur(self : Terminal) -> Unit {
  self.focused = false
  self.refresh()
  if self.input_element_id is Some(input_id) {
    blur_input_element(input_id)
  }
}

///|
pub fn Terminal::input(
  self : Terminal,
  data : String,
  was_user_input? : Bool = true,
) -> Unit {
  self.headless.input(data, was_user_input~)
}

///|
pub fn Terminal::on_data(
  self : Terminal,
  listener : (String) -> Unit,
) -> @common.Disposable {
  self.headless.on_data(listener)
}

///|
pub fn Terminal::write(
  self : Terminal,
  data : String,
  callback? : () -> Unit = fn() { () },
) -> Unit {
  self.headless.write(data, callback=fn() {
    callback()
    self.schedule_refresh()
  })
}

///|
pub fn Terminal::write_bytes(
  self : Terminal,
  data : Bytes,
  callback? : () -> Unit = fn() { () },
) -> Unit raise {
  self.headless.write_bytes(data, callback=fn() {
    callback()
    self.schedule_refresh()
  })
}

///|
pub fn Terminal::writeln(
  self : Terminal,
  data : String,
  callback? : () -> Unit = fn() { () },
) -> Unit {
  self.headless.writeln(data, callback=fn() {
    callback()
    self.schedule_refresh()
  })
}

///|
pub fn Terminal::writeln_bytes(
  self : Terminal,
  data : Bytes,
  callback? : () -> Unit = fn() { () },
) -> Unit raise {
  self.headless.writeln_bytes(data, callback=fn() {
    callback()
    self.schedule_refresh()
  })
}

///|
pub fn Terminal::resize(self : Terminal, cols : Int, rows : Int) -> Unit {
  self.headless.resize(cols, rows)
  self.schedule_refresh()
}

///|
pub fn Terminal::scroll_lines(self : Terminal, amount : Int) -> Unit {
  self.headless.scroll_lines(amount)
  self.schedule_refresh()
}

///|
pub fn Terminal::scroll_pages(self : Terminal, page_count : Int) -> Unit {
  self.headless.scroll_pages(page_count)
  self.refresh()
}

///|
pub fn Terminal::scroll_to_top(self : Terminal) -> Unit {
  self.headless.scroll_to_top()
  self.schedule_refresh()
}

///|
pub fn Terminal::scroll_to_bottom(self : Terminal) -> Unit {
  self.headless.scroll_to_bottom()
  self.schedule_refresh()
}

///|
pub fn Terminal::scroll_to_line(self : Terminal, line : Int) -> Unit {
  self.headless.scroll_to_line(line)
  self.schedule_refresh()
}

///|
pub fn Terminal::clear(self : Terminal) -> Unit {
  self.headless.clear()
  self.schedule_refresh()
}

///|
pub fn Terminal::reset(self : Terminal) -> Unit {
  self.headless.reset()
  self.schedule_refresh()
}

///|
pub fn Terminal::dispose(self : Terminal) -> Unit {
  if self.disposed {
    return
  }
  if self.element() is Some(element) {
    element.set_inner_html("")
  }
  self.headless.dispose()
  self.app = None
  self.disposed = true
}

///|
fn focus_input_element(input_id : String) -> Unit {
  if @dom.document().get_element_by_id(input_id).to_option() is Some(element) {
    if element.to_html_element() is Some(html_element) {
      html_element.focus()
    }
  }
}

///|
fn blur_input_element(input_id : String) -> Unit {
  if @dom.document().get_element_by_id(input_id).to_option() is Some(element) {
    if element.to_html_element() is Some(html_element) {
      html_element.blur()
    }
  }
}
