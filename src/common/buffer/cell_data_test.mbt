///|
fn assert_char_data(
  cell : CellData,
  expected : CharData,
  label : String,
) -> Unit raise {
  guard cell.get_as_char_data() == expected else { fail(label) }
}

///|
test "CellData converts ASCII char data" {
  let cell = CellData::new()
  cell.set_from_char_data(CharData::new(DefaultAttr, "a", 1, 97))

  assert_char_data(
    cell,
    CharData::new(DefaultAttr, "a", 1, 97),
    "ASCII char data",
  )
  guard cell.is_combined() == false else {
    fail("ASCII cell should not be combined")
  }
}

///|
test "CellData converts combining char data" {
  let cell = CellData::new()
  cell.set_from_char_data(CharData::new(DefaultAttr, "e\u{0301}", 1, 0x0301))

  assert_char_data(
    cell,
    CharData::new(DefaultAttr, "e\u{0301}", 1, 0x0301),
    "combining char data",
  )
  guard cell.is_combined() else { fail("combining cell should be combined") }
}

///|
test "CellData converts surrogate pair char data" {
  let music = "\u{1D11E}"
  let cell = CellData::new()
  cell.set_from_char_data(CharData::new(DefaultAttr, music, 1, 0xDD1E))

  assert_char_data(
    cell,
    CharData::new(DefaultAttr, music, 1, 0x1D11E),
    "surrogate pair char data",
  )
  guard cell.is_combined() == false else {
    fail("surrogate pair alone should not be combined")
  }
}

///|
test "CellData converts surrogate pair plus combining char data" {
  let char = "\u{13080}\u{0301}"
  let cell = CellData::new()
  cell.set_from_char_data(CharData::new(DefaultAttr, char, 1, 0x0301))

  assert_char_data(
    cell,
    CharData::new(DefaultAttr, char, 1, 0x0301),
    "surrogate pair with combining char data",
  )
  guard cell.is_combined() else {
    fail("surrogate pair with combining mark should be combined")
  }
}

///|
test "CellData converts wide char data" {
  let wide = "\u{FF11}"
  let cell = CellData::new()
  cell.set_from_char_data(CharData::new(DefaultAttr, wide, 2, 0xFF11))

  assert_char_data(
    cell,
    CharData::new(DefaultAttr, wide, 2, 0xFF11),
    "wide char data",
  )
  guard cell.get_width() == 2 else { fail("wide char should have width 2") }
}

///|
fn create_styled_cell(
  char : String,
  style : UnderlineStyle,
  underline_color : Int,
) -> CellData {
  let cell = CellData::new()
  let fg = CmP256 | 12 | FgBold | FgUnderline
  cell.set_from_char_data(CharData::new(fg, char, 1, char[0].to_int()))
  cell.set_bg(CmP16 | 2 | BgItalic)
  cell.extended().set_underline_style(style)
  cell.extended().set_underline_color(CmP256 | underline_color)
  cell.update_extended()
  cell
}

///|
test "CellData attributesEquals ignores cell content" {
  let cell = create_styled_cell("a", UnderlineStyle::Dotted, 4)
  let other = create_styled_cell("b", UnderlineStyle::Dotted, 4)

  guard cell.attributes_equals(other) else {
    fail("attributesEquals should ignore character content")
  }
}

///|
test "CellData attributesEquals detects underline style and color" {
  let cell = create_styled_cell("a", UnderlineStyle::Dotted, 4)
  let style_changed = create_styled_cell("a", UnderlineStyle::Double, 4)
  let color_changed = create_styled_cell("a", UnderlineStyle::Dotted, 5)

  guard cell.attributes_equals(style_changed) == false else {
    fail("attributesEquals should compare underline style")
  }
  guard cell.attributes_equals(color_changed) == false else {
    fail("attributesEquals should compare underline color")
  }
}

///|
test "CellData attributesEquals ignores underline variants and url ids" {
  let cell = create_styled_cell("a", UnderlineStyle::Dotted, 4)
  let variant_changed = create_styled_cell("a", UnderlineStyle::Dotted, 4)
  cell.extended().set_underline_variant_offset(1)
  variant_changed.extended().set_underline_variant_offset(3)
  cell.update_extended()
  variant_changed.update_extended()

  let url_a = create_styled_cell("a", UnderlineStyle::Single, 4)
  let url_b = create_styled_cell("b", UnderlineStyle::Single, 4)
  url_a.extended().set_url_id(1)
  url_b.extended().set_url_id(2)
  url_a.update_extended()
  url_b.update_extended()

  guard cell.attributes_equals(variant_changed) else {
    fail("attributesEquals should ignore underline variant offset")
  }
  guard url_a.attributes_equals(url_b) else {
    fail("attributesEquals should ignore url id")
  }
}
