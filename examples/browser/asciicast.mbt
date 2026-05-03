///|
priv enum CastKind {
  Output
  Input
  Marker
  Resize
  Exit
  Unknown(String)
}

///|
priv struct CastEvent {
  delay_ms : Int
  kind : CastKind
  data : String
}

///|
priv struct Cast {
  version : Int
  title : String?
  cols : Int
  rows : Int
  duration_ms : Int
  events : Array[CastEvent]
}

///|
priv struct CastHeader {
  version : Int
  title : String?
  cols : Int
  rows : Int
}

///|
priv enum HeaderResult {
  HeaderOk(CastHeader)
  HeaderErr(String)
}

///|
priv enum ParseResult {
  ParseOk(Cast)
  ParseErr(String)
}

///|
fn sample_cast() -> String {
  "{\"version\":3,\"term\":{\"cols\":76,\"rows\":18,\"type\":\"xterm-256color\"},\"title\":\"MoonBit xterm asciinema replay\",\"env\":{\"SHELL\":\"/bin/zsh\"}}\n" +
  "[0.14,\"o\",\"\\u001b[38;5;42m$ moon check --target js\\u001b[0m\\r\\n\"]\n" +
  "[0.22,\"o\",\"Checking feihaoxiang/xterm browser package ...\\r\\n\"]\n" +
  "[0.18,\"o\",\"Checked parser, buffer, headless, and Rabbita DOM packages.\\r\\n\\r\\n\"]\n" +
  "[0.20,\"m\",\"build\"]\n" +
  "[0.14,\"o\",\"\\u001b[38;5;81m$ moon build examples/browser --target js\\u001b[0m\\r\\n\"]\n" +
  "[0.24,\"o\",\"Bundling browser demo for JavaScript ...\\r\\n\"]\n" +
  "[0.18,\"o\",\"Wrote _build/js/debug/build/feihaoxiang/xterm/examples/browser/browser.js\\r\\n\\r\\n\"]\n" +
  "[0.24,\"r\",\"80x20\"]\n" +
  "[0.16,\"m\",\"replay\"]\n" +
  "[0.14,\"o\",\"\\u001b[38;5;214m$ asciinema play moonbit-xterm.cast\\u001b[0m\\r\\n\"]\n" +
  "[0.22,\"o\",\"This demo parses asciicast v2/v3 NDJSON and replays output through the MoonBit terminal core.\\r\\n\"]\n" +
  "[0.20,\"o\",\"Resize events call Terminal::resize; output events call Terminal::write.\\r\\n\"]\n" +
  "[0.26,\"o\",\"\\r\\n\\u001b[38;5;118mreplay complete\\u001b[0m\\r\\n\"]\n" +
  "[0.30,\"x\",\"0\"]\n"
}

///|
fn seconds_to_ms(seconds : Double) -> Int {
  let ms = (seconds * 1000.0).to_int()
  if ms < 0 {
    0
  } else {
    ms
  }
}

///|
fn title_from_json(value : Json?) -> String? {
  match value {
    Some(String(title)) => if title.is_empty() { None } else { Some(title) }
    _ => None
  }
}

///|
fn parse_header(header : Json) -> HeaderResult {
  if header
    is {
      "version": Number(version, ..),
      "width": Number(width, ..),
      "height": Number(height, ..),
      "title"? : title,
      ..
    } {
    HeaderOk({
      version: version.to_int(),
      title: title_from_json(title),
      cols: width.to_int(),
      rows: height.to_int(),
    })
  } else if header
    is {
      "version": Number(version, ..),
      "term": { "cols": Number(cols, ..), "rows": Number(rows, ..), .. },
      "title"? : title,
      ..
    } {
    HeaderOk({
      version: version.to_int(),
      title: title_from_json(title),
      cols: cols.to_int(),
      rows: rows.to_int(),
    })
  } else {
    HeaderErr("missing asciicast header fields")
  }
}

///|
fn kind_from_code(code : String) -> CastKind {
  match code {
    "o" => Output
    "i" => Input
    "m" => Marker
    "r" => Resize
    "x" => Exit
    other => Unknown(other)
  }
}

///|
fn event_from_json(
  version : Int,
  previous_time : Double,
  json : Json,
) -> (CastEvent, Double) raise {
  let (time, code, data) : (Double, String, String) = @json.from_json(json)
  let delay = if version == 2 {
    seconds_to_ms(time - previous_time)
  } else {
    seconds_to_ms(time)
  }
  let next_time = if version == 2 { time } else { previous_time + time }
  ({ delay_ms: delay, kind: kind_from_code(code), data }, next_time)
}

///|
fn parse_cast(source : String) -> ParseResult {
  let mut header : Json? = None
  let raw_events : Array[(Int, Json)] = []
  let mut line_no = 0
  for piece in source.split("\n") {
    line_no += 1
    let line = piece.trim().to_owned()
    if line.is_empty() {
      continue
    }
    if header is Some(_) && line.strip_prefix("#") is Some(_) {
      continue
    }
    let json = @json.parse(line) catch {
      err => return ParseErr("line \{line_no}: \{err}")
    }
    match header {
      None => header = Some(json)
      Some(_) => raw_events.push((line_no, json))
    }
  }
  guard header is Some(header_json) else { return ParseErr("empty asciicast") }
  let cast_header = match parse_header(header_json) {
    HeaderOk(header) => header
    HeaderErr(message) => return ParseErr(message)
  }
  if cast_header.version != 2 && cast_header.version != 3 {
    return ParseErr("unsupported asciicast version \{cast_header.version}")
  }
  let events : Array[CastEvent] = []
  let mut previous_time = 0.0
  let mut duration_ms = 0
  for raw_event in raw_events {
    let (event_line, json) = raw_event
    let (event, next_time) = event_from_json(
      cast_header.version,
      previous_time,
      json,
    ) catch {
      err => return ParseErr("line \{event_line}: \{err}")
    }
    previous_time = next_time
    duration_ms += event.delay_ms
    events.push(event)
  }
  ParseOk({
    version: cast_header.version,
    title: cast_header.title,
    cols: cast_header.cols,
    rows: cast_header.rows,
    duration_ms,
    events,
  })
}
