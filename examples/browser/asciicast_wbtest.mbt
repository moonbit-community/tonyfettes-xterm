///|
test "parse sample asciicast replay" {
  match parse_cast(sample_cast()) {
    ParseOk(cast) => {
      inspect(cast.version, content="3")
      inspect(cast.cols, content="76")
      inspect(cast.rows, content="18")
      guard cast.events.length() >= 10 else {
        fail("sample cast should contain replay events")
      }
      guard cast.duration_ms > 0 else {
        fail("sample cast should have duration")
      }
    }
    ParseErr(message) => fail(message)
  }
}

///|
test "parse asciicast v2 cumulative timestamps" {
  let source = "{\"version\":2,\"width\":80,\"height\":24}\n" +
    "[0.5,\"o\",\"a\"]\n" +
    "[1.25,\"o\",\"b\"]\n"
  match parse_cast(source) {
    ParseOk(cast) => {
      inspect(cast.events[0].delay_ms, content="500")
      inspect(cast.events[1].delay_ms, content="750")
      inspect(cast.duration_ms, content="1250")
    }
    ParseErr(message) => fail(message)
  }
}

///|
test "parse resize event payload" {
  match parse_resize("90x30") {
    Some(size) => {
      inspect(size.cols, content="90")
      inspect(size.rows, content="30")
    }
    None => fail("resize should parse")
  }
  guard parse_resize("90") is None else { fail("resize should need rows") }
  guard parse_resize("widextall") is None else {
    fail("resize should reject invalid numbers")
  }
}

///|
test "format replay time" {
  inspect(format_time(-1), content="0.0s")
  inspect(format_time(1250), content="1.2s")
  inspect(format_time(9999), content="9.9s")
}

///|
test "replay player applies non-output events without dom" {
  let cast : Cast = {
    version: 3,
    title: Some("unit"),
    cols: 10,
    rows: 4,
    duration_ms: 100,
    events: [
      { delay_ms: 0, kind: Marker, data: "phase" },
      { delay_ms: 0, kind: Resize, data: "12x5" },
      { delay_ms: 0, kind: Exit, data: "0" },
    ],
  }
  let player = ReplayPlayer::new(cast)
  player.playing = true
  player.elapsed_ms = 25
  inspect(player.progress_percent(), content="25")
  player.play_current_event()
  inspect(player.status_text(), content="marker: phase")
  player.play_current_event()
  inspect(player.terminal.cols(), content="12")
  inspect(player.terminal.rows(), content="5")
  player.elapsed_ms = 200
  inspect(player.progress_percent(), content="100")
  player.play_current_event()
  inspect(player.status_text(), content="exit 0")
  inspect(player.playing, content="false")
}
