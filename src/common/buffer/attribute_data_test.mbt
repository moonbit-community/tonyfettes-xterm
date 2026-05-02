///|
test "AttributeData tracks extended attributes" {
  let attrs = AttributeData::new()
  guard attrs.has_extended_attrs() == false else {
    fail("new attributes should not have extended attrs")
  }

  attrs.set_bg(attrs.bg() | BgHasExtended)
  guard attrs.has_extended_attrs() else {
    fail("HAS_EXTENDED should be reflected by has_extended_attrs")
  }

  attrs.extended().set_underline_style(UnderlineStyle::Curly)
  attrs.update_extended()
  guard attrs.has_extended_attrs() else {
    fail("non-empty extended attrs should keep HAS_EXTENDED")
  }
}

///|
test "AttributeData reports underline style" {
  let attrs = AttributeData::new()
  guard attrs.get_underline_style() == UnderlineStyle::None else {
    fail("underline style should be none without underline flag")
  }

  attrs.set_fg(attrs.fg() | FgUnderline)
  guard attrs.get_underline_style() == UnderlineStyle::Single else {
    fail("underline flag should default to single underline")
  }

  attrs.extended().set_underline_style(UnderlineStyle::Dotted)
  attrs.update_extended()
  guard attrs.get_underline_style() == UnderlineStyle::Dotted else {
    fail("extended underline style should win when present")
  }
}

///|
test "AttributeData reports underline color" {
  let attrs = AttributeData::new()
  attrs.set_fg(CmP256 | 12)
  guard attrs.get_underline_color() == 12 else {
    fail("underline color should default to foreground color")
  }

  attrs.extended().set_underline_style(UnderlineStyle::Single)
  attrs.extended().set_underline_color(CmP256 | 45)
  attrs.update_extended()
  guard attrs.get_underline_color() == 45 else {
    fail("P256 underline color should return palette index")
  }

  attrs.extended().set_underline_color(CmRgb | 0x112233)
  attrs.update_extended()
  guard attrs.get_underline_color() == 0x112233 else {
    fail("RGB underline color should return RGB value")
  }
}

///|
test "AttributeData preserves underline variant offsets" {
  let attrs = AttributeData::new()
  for i = 0; i < 8; i = i + 1 {
    attrs.extended().set_underline_variant_offset(i)
    guard attrs.extended().underline_variant_offset() == i else {
      fail("underline variant offset should round-trip")
    }
  }
}
