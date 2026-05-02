///|
pub fn empty_snapshot_json() -> String {
  empty_snapshot().stringify(indent=2)
}

///|
fn empty_snapshot() -> Json {
  let cols = 80
  let rows = 24
  {
    "case": "moonbit-empty",
    "cols": cols,
    "rows": rows,
    "modes": {},
    "events": empty_events(),
    "buffers": {
      "active": "normal",
      "normal": empty_buffer("normal", rows),
      "alternate": empty_buffer("alternate", rows),
    },
  }
}

///|
fn empty_events() -> Json {
  let binary : Array[Json] = []
  let data : Array[Json] = []
  let render : Array[Json] = []
  let resize : Array[Json] = []
  let scroll : Array[Json] = []
  let title_change : Array[Json] = []
  {
    "bell": 0,
    "binary": binary,
    "cursorMove": 0,
    "data": data,
    "lineFeed": 0,
    "render": render,
    "resize": resize,
    "scroll": scroll,
    "titleChange": title_change,
    "writeParsed": 0,
  }
}

///|
fn empty_buffer(kind : String, rows : Int) -> Json {
  let lines : Array[Json] = []
  {
    "type": kind,
    "cursorX": 0,
    "cursorY": 0,
    "viewportY": 0,
    "baseY": 0,
    "length": rows,
    "lines": lines,
  }
}
