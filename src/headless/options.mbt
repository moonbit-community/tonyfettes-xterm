///|
const DefaultCols : Int32 = 80

///|
const DefaultRows : Int32 = 24

///|
const DefaultScrollback : Int32 = 1000

///|
const DefaultFontSize : Int32 = 15

///|
const DefaultLineHeight : Int32 = 1

///|
const DefaultCursorWidth : Int32 = 1

///|
pub(all) struct TerminalOptions {
  cols : Int32
  rows : Int32
  scrollback : Int32
  allow_proposed_api : Bool
  font_size : Int32
  font_family : String
  line_height : Int32
  cursor_width : Int32
} derive(Eq, Debug)

///|
pub fn TerminalOptions::new(
  cols~ : Int32 = DefaultCols,
  rows~ : Int32 = DefaultRows,
  scrollback~ : Int32 = DefaultScrollback,
  allow_proposed_api~ : Bool = false,
  font_size~ : Int32 = DefaultFontSize,
  font_family~ : String = "monospace",
  line_height~ : Int32 = DefaultLineHeight,
  cursor_width~ : Int32 = DefaultCursorWidth,
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
