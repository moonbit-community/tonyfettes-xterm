///|
struct Terminal {
  headless : @headless.Terminal
  mut element_id : String?
  mut screen_element_id : String?
  mut app : @rabbita.App?
  mut focused : Bool
  mut disposed : Bool
}

///|
pub fn Terminal::new(
  options? : TerminalOptions = TerminalOptions::new(),
) -> Terminal {
  {
    headless: @headless.Terminal::new(options~),
    element_id: None,
    screen_element_id: None,
    app: None,
    focused: false,
    disposed: false,
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
pub fn Terminal::snapshot(self : Terminal) -> RenderModel {
  RenderModel::from_terminal(self.headless, focused=self.focused)
}

///|
fn Terminal::view(self : Terminal) -> @html.Html {
  let screen_id = self.screen_element_id.unwrap_or("mb-xterm-screen")
  render_terminal_view(self.snapshot(), screen_id)
}

///|
pub fn Terminal::open(self : Terminal, element_id : String) -> Unit {
  self.element_id = Some(element_id)
  self.screen_element_id = Some(element_id + "-screen")
  self.refresh()
}

///|
pub fn Terminal::refresh(self : Terminal) -> Unit {
  guard !self.disposed else { return }
  guard self.element_id is Some(element_id) else { return }
  let app = @rabbita.new(@rabbita.static_cell(self.view()))
  self.app = Some(app)
  app.mount(element_id)
}

///|
pub fn Terminal::focus(self : Terminal) -> Unit {
  self.focused = true
  self.refresh()
  if self.element() is Some(element) && element.to_html_element() is Some(html) {
    html.focus()
  }
}

///|
pub fn Terminal::blur(self : Terminal) -> Unit {
  self.focused = false
  self.refresh()
  if self.element() is Some(element) && element.to_html_element() is Some(html) {
    html.blur()
  }
}

///|
pub fn Terminal::write(
  self : Terminal,
  data : String,
  callback? : () -> Unit = fn() { () },
) -> Unit {
  self.headless.write(data, callback=fn() {
    callback()
    self.refresh()
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
    self.refresh()
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
    self.refresh()
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
    self.refresh()
  })
}

///|
pub fn Terminal::resize(self : Terminal, cols : Int, rows : Int) -> Unit {
  self.headless.resize(cols, rows)
  self.refresh()
}

///|
pub fn Terminal::scroll_lines(self : Terminal, amount : Int) -> Unit {
  self.headless.scroll_lines(amount)
  self.refresh()
}

///|
pub fn Terminal::scroll_pages(self : Terminal, page_count : Int) -> Unit {
  self.headless.scroll_pages(page_count)
  self.refresh()
}

///|
pub fn Terminal::scroll_to_top(self : Terminal) -> Unit {
  self.headless.scroll_to_top()
  self.refresh()
}

///|
pub fn Terminal::scroll_to_bottom(self : Terminal) -> Unit {
  self.headless.scroll_to_bottom()
  self.refresh()
}

///|
pub fn Terminal::scroll_to_line(self : Terminal, line : Int) -> Unit {
  self.headless.scroll_to_line(line)
  self.refresh()
}

///|
pub fn Terminal::clear(self : Terminal) -> Unit {
  self.headless.clear()
  self.refresh()
}

///|
pub fn Terminal::reset(self : Terminal) -> Unit {
  self.headless.reset()
  self.refresh()
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
