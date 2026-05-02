///|
const DefaultCols : Int = 80

///|
const DefaultRows : Int = 24

///|
const DefaultScrollback : Int = 1000

///|
const DefaultFontSize : Int = 15

///|
const DefaultLineHeight : Int = 1

///|
const DefaultCursorWidth : Int = 1

///|
pub(all) struct TerminalOptions {
  cols : Int
  rows : Int
  scrollback : Int
  allow_proposed_api : Bool
  font_size : Int
  font_family : String
  line_height : Int
  cursor_width : Int
} derive(Eq, Debug)

///|
pub fn TerminalOptions::new(
  cols? : Int = DefaultCols,
  rows? : Int = DefaultRows,
  scrollback? : Int = DefaultScrollback,
  allow_proposed_api? : Bool = false,
  font_size? : Int = DefaultFontSize,
  font_family? : String = "monospace",
  line_height? : Int = DefaultLineHeight,
  cursor_width? : Int = DefaultCursorWidth,
) -> TerminalOptions {
  {
    cols: if cols < 1 {
      1
    } else {
      cols
    },
    rows: if rows < 1 {
      1
    } else {
      rows
    },
    scrollback: if scrollback < 0 {
      0
    } else {
      scrollback
    },
    allow_proposed_api,
    font_size,
    font_family,
    line_height,
    cursor_width,
  }
}
