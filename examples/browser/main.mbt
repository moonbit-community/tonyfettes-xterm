///|
const TickMs : Int = 40

///|
struct ReplayPlayer {
  terminal : @xterm_browser.Terminal
  cast : Cast
  mut cursor : Int
  mut elapsed_ms : Int
  mut playing : Bool
  mut speed : Int
  mut remaining_ms : Int
  mut timeout_id : Int?
  mut last_marker : String?
  mut exit_status : String?
}

///|
fn initial_cast() -> Cast {
  match parse_cast(sample_cast()) {
    ParseOk(cast) => cast
    ParseErr(message) =>
      {
        version: 3,
        title: Some("parse error: \{message}"),
        cols: 80,
        rows: 20,
        duration_ms: 0,
        events: [],
      }
  }
}

///|
fn ReplayPlayer::new(cast : Cast) -> ReplayPlayer {
  {
    terminal: @xterm_browser.Terminal::new(
      options=@xterm_browser.TerminalOptions::new(
        cols=cast.cols,
        rows=cast.rows,
        scrollback=256,
      ),
    ),
    cast,
    cursor: 0,
    elapsed_ms: 0,
    playing: false,
    speed: 1,
    remaining_ms: first_delay(cast),
    timeout_id: None,
    last_marker: None,
    exit_status: None,
  }
}

///|
fn first_delay(cast : Cast) -> Int {
  match cast.events.get(0) {
    Some(event) => event.delay_ms
    None => 0
  }
}

///|
fn ReplayPlayer::mount(self : ReplayPlayer) -> Unit {
  self.terminal.open("terminal")
  self.terminal.focus()
  self.restart()
}

///|
fn ReplayPlayer::restart(self : ReplayPlayer) -> Unit {
  self.cancel_timer()
  self.cursor = 0
  self.elapsed_ms = 0
  self.playing = true
  self.remaining_ms = first_delay(self.cast)
  self.last_marker = None
  self.exit_status = None
  self.terminal.reset()
  self.terminal.resize(self.cast.cols, self.cast.rows)
  self.update_controls()
  self.schedule_tick()
}

///|
fn ReplayPlayer::toggle(self : ReplayPlayer) -> Unit {
  if self.playing {
    self.playing = false
    self.cancel_timer()
  } else {
    if self.cursor >= self.cast.events.length() {
      self.restart()
      return
    }
    self.playing = true
    self.schedule_tick()
  }
  self.update_controls()
}

///|
fn ReplayPlayer::cycle_speed(self : ReplayPlayer) -> Unit {
  self.speed = match self.speed {
    1 => 2
    2 => 4
    _ => 1
  }
  self.update_controls()
}

///|
fn ReplayPlayer::schedule_tick(self : ReplayPlayer) -> Unit {
  guard self.timeout_id is None else { return }
  self.timeout_id = Some(
    @dom.window().set_timeout(fn() { self.tick() }, TickMs),
  )
}

///|
fn ReplayPlayer::cancel_timer(self : ReplayPlayer) -> Unit {
  if self.timeout_id is Some(id) {
    @dom.window().clear_timeout(id)
    self.timeout_id = None
  }
}

///|
fn ReplayPlayer::tick(self : ReplayPlayer) -> Unit {
  self.timeout_id = None
  guard self.playing else { return }
  let advance = TickMs * self.speed
  self.elapsed_ms += advance
  self.remaining_ms -= advance
  while self.playing && self.remaining_ms <= 0 {
    self.play_current_event()
  }
  self.update_controls()
  if self.playing {
    self.schedule_tick()
  }
}

///|
fn ReplayPlayer::play_current_event(self : ReplayPlayer) -> Unit {
  match self.cast.events.get(self.cursor) {
    None => {
      self.playing = false
      self.elapsed_ms = self.cast.duration_ms
    }
    Some(event) => {
      self.apply_event(event)
      self.cursor += 1
      if self.cursor >= self.cast.events.length() {
        self.playing = false
        self.elapsed_ms = self.cast.duration_ms
      } else if self.cast.events.get(self.cursor) is Some(next) {
        self.remaining_ms += next.delay_ms
      }
    }
  }
}

///|
fn ReplayPlayer::apply_event(self : ReplayPlayer, event : CastEvent) -> Unit {
  match event.kind {
    Output => self.terminal.write(event.data)
    Resize =>
      match parse_resize(event.data) {
        Some(size) => self.terminal.resize(size.cols, size.rows)
        None => ()
      }
    Marker => self.last_marker = Some(event.data)
    Exit => self.exit_status = Some(event.data)
    Input => ()
    Unknown(code) => self.last_marker = Some("unknown event: \{code}")
  }
}

///|
struct Size {
  cols : Int
  rows : Int
}

///|
fn parse_resize(data : String) -> Size? {
  match data.split("x").collect() {
    [cols_text, rows_text] => {
      let cols = @string.parse_int(cols_text) catch { _ => return None }
      let rows = @string.parse_int(rows_text) catch { _ => return None }
      Some({ cols, rows })
    }
    _ => None
  }
}

///|
fn ReplayPlayer::update_controls(self : ReplayPlayer) -> Unit {
  set_text("player-title", self.cast.title.unwrap_or("asciicast replay"))
  set_text(
    "player-meta",
    "asciicast v\{self.cast.version} | \{self.cast.cols}x\{self.cast.rows}",
  )
  set_text("player-toggle", if self.playing { "Pause" } else { "Play" })
  set_text("player-speed", "\{self.speed}x")
  set_text(
    "player-time",
    "\{format_time(self.elapsed_ms)} / \{format_time(self.cast.duration_ms)}",
  )
  set_text("player-status", self.status_text())
  set_progress("player-progress", self.progress_percent())
}

///|
fn ReplayPlayer::status_text(self : ReplayPlayer) -> String {
  if self.exit_status is Some(status) {
    "exit \{status}"
  } else if self.last_marker is Some(marker) {
    "marker: \{marker}"
  } else if self.playing {
    "playing"
  } else {
    "paused"
  }
}

///|
fn ReplayPlayer::progress_percent(self : ReplayPlayer) -> Int {
  if self.cast.duration_ms <= 0 {
    0
  } else {
    let value = self.elapsed_ms * 100 / self.cast.duration_ms
    value.clamp(min=0, max=100)
  }
}

///|
fn format_time(ms : Int) -> String {
  let bounded = if ms < 0 { 0 } else { ms }
  let seconds = bounded / 1000
  let tenths = bounded % 1000 / 100
  "\{seconds}.\{tenths}s"
}

///|
fn element_by_id(id : String) -> @dom.Element? {
  @dom.document().get_element_by_id(id).to_option()
}

///|
fn set_text(id : String, text : String) -> Unit {
  if element_by_id(id) is Some(element) {
    if element.to_html_element() is Some(html) {
      html.set_inner_text(text)
    } else {
      element.set_inner_html(text)
    }
  }
}

///|
fn set_progress(id : String, percent : Int) -> Unit {
  if element_by_id(id) is Some(element) {
    element.set_attribute("style", "--progress: \{percent}%")
  }
}

///|
fn on_click(id : String, f : () -> Unit) -> Unit {
  if element_by_id(id) is Some(element) {
    element.add_event_listener("click", fn(event) {
      event.prevent_default()
      f()
    })
  }
}

///|
fn bind_controls(player : ReplayPlayer) -> Unit {
  on_click("player-toggle", fn() { player.toggle() })
  on_click("player-restart", fn() { player.restart() })
  on_click("player-speed", fn() { player.cycle_speed() })
}

///|
fn main {
  let player = ReplayPlayer::new(initial_cast())
  player.mount()
  bind_controls(player)
}
