///|
struct CharData {
  attr : Int
  chars : String
  width : Int
  code : Int
} derive(Eq, Debug)

///|
pub fn CharData::new(
  attr : Int,
  chars : String,
  width : Int,
  code : Int,
) -> CharData {
  { attr, chars, width, code }
}

///|
pub fn CharData::attr(self : CharData) -> Int {
  self.attr
}

///|
pub fn CharData::chars(self : CharData) -> String {
  self.chars
}

///|
pub fn CharData::width(self : CharData) -> Int {
  self.width
}

///|
pub fn CharData::code(self : CharData) -> Int {
  self.code
}

///|
struct CellData {
  mut content : Int
  mut fg : Int
  mut bg : Int
  extended : ExtendedAttrs
  mut combined_data : String
}

///|
pub fn CellData::new() -> CellData {
  {
    content: 0,
    fg: 0,
    bg: 0,
    extended: ExtendedAttrs::new(),
    combined_data: "",
  }
}

///|
pub fn CellData::from_char_data(value : CharData) -> CellData {
  let cell = CellData::new()
  cell.set_from_char_data(value)
  cell
}

///|
pub fn CellData::clone(self : CellData) -> CellData {
  {
    content: self.content,
    fg: self.fg,
    bg: self.bg,
    extended: self.extended.clone(),
    combined_data: self.combined_data,
  }
}

///|
pub fn CellData::fg(self : CellData) -> Int {
  self.fg
}

///|
pub fn CellData::set_fg(self : CellData, value : Int) -> Unit {
  self.fg = value
}

///|
pub fn CellData::bg(self : CellData) -> Int {
  self.bg
}

///|
pub fn CellData::set_bg(self : CellData, value : Int) -> Unit {
  self.bg = value
}

///|
pub fn CellData::extended(self : CellData) -> ExtendedAttrs {
  self.extended
}

///|
pub fn CellData::is_combined(self : CellData) -> Bool {
  (self.content & ContentIsCombinedMask) != 0
}

///|
pub fn CellData::get_width(self : CellData) -> Int {
  self.content >> ContentWidthShift
}

///|
pub fn CellData::get_chars(self : CellData) -> String {
  if self.is_combined() {
    self.combined_data
  } else if (self.content & ContentCodepointMask) != 0 {
    String::from_array([(self.content & ContentCodepointMask).unsafe_to_char()])
  } else {
    ""
  }
}

///|
pub fn CellData::get_code(self : CellData) -> Int {
  if self.is_combined() {
    self.combined_data[self.combined_data.length() - 1].to_int()
  } else {
    self.content & ContentCodepointMask
  }
}

///|
pub fn CellData::set_from_char_data(self : CellData, value : CharData) -> Unit {
  self.fg = value.attr
  self.bg = 0
  self.combined_data = ""
  let mut combined = false
  if value.chars.length() > 2 {
    combined = true
  } else if value.chars.length() == 2 {
    let code = value.chars[0].to_int()
    if 0xD800 <= code && code <= 0xDBFF {
      let second = value.chars[1].to_int()
      if 0xDC00 <= second && second <= 0xDFFF {
        self.content = ((code - 0xD800) * 0x400 + second - 0xDC00 + 0x10000) |
          (value.width << ContentWidthShift)
      } else {
        combined = true
      }
    } else {
      combined = true
    }
  } else if value.chars.length() == 1 {
    self.content = value.chars[0].to_int() | (value.width << ContentWidthShift)
  } else {
    self.content = value.width << ContentWidthShift
  }

  if combined {
    self.combined_data = value.chars
    self.content = ContentIsCombinedMask | (value.width << ContentWidthShift)
  }
}

///|
pub fn CellData::get_as_char_data(self : CellData) -> CharData {
  CharData::new(self.fg, self.get_chars(), self.get_width(), self.get_code())
}

///|
pub fn CellData::update_extended(self : CellData) -> Unit {
  if self.extended.is_empty() {
    self.bg = self.bg & (-BgHasExtended - 1)
  } else {
    self.bg = self.bg | BgHasExtended
  }
}

///|
fn CellData::as_attrs(self : CellData) -> AttributeData {
  let attrs = AttributeData::new()
  attrs.set_fg(self.fg)
  attrs.set_bg(self.bg)
  attrs.extended().set_underline_style(self.extended.underline_style())
  attrs.extended().set_underline_color(self.extended.underline_color())
  attrs
  .extended()
  .set_underline_variant_offset(self.extended.underline_variant_offset())
  attrs.extended().set_url_id(self.extended.url_id())
  attrs
}

///|
pub fn CellData::attributes_equals(self : CellData, other : CellData) -> Bool {
  let self_attrs = self.as_attrs()
  let other_attrs = other.as_attrs()
  if self_attrs.get_fg_color_mode() != other_attrs.get_fg_color_mode() ||
    self_attrs.get_fg_color() != other_attrs.get_fg_color() {
    return false
  }
  if self_attrs.get_bg_color_mode() != other_attrs.get_bg_color_mode() ||
    self_attrs.get_bg_color() != other_attrs.get_bg_color() {
    return false
  }
  if self_attrs.is_inverse() != other_attrs.is_inverse() {
    return false
  }
  if self_attrs.is_bold() != other_attrs.is_bold() {
    return false
  }
  if self_attrs.is_underline() != other_attrs.is_underline() {
    return false
  }
  if self_attrs.is_underline() {
    if self_attrs.get_underline_style() != other_attrs.get_underline_style() {
      return false
    }
    let self_default = self_attrs.is_underline_color_default()
    let other_default = other_attrs.is_underline_color_default()
    if !(self_default && other_default) {
      if self_default != other_default {
        return false
      }
      if self_attrs.get_underline_color() != other_attrs.get_underline_color() {
        return false
      }
      if self_attrs.get_underline_color_mode() !=
        other_attrs.get_underline_color_mode() {
        return false
      }
    }
  }
  if self_attrs.is_overline() != other_attrs.is_overline() {
    return false
  }
  if self_attrs.is_blink() != other_attrs.is_blink() {
    return false
  }
  if self_attrs.is_invisible() != other_attrs.is_invisible() {
    return false
  }
  if self_attrs.is_italic() != other_attrs.is_italic() {
    return false
  }
  if self_attrs.is_dim() != other_attrs.is_dim() {
    return false
  }
  true
}
