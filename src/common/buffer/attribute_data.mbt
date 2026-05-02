///|
pub(all) enum UnderlineStyle {
  None
  Single
  Double
  Curly
  Dotted
  Dashed
} derive(Eq, Debug)

///|
struct ExtendedAttrs {
  mut underline_style : UnderlineStyle
  mut underline_color : Int
  mut underline_variant_offset : Int
  mut url_id : Int
}

///|
pub fn ExtendedAttrs::new() -> ExtendedAttrs {
  {
    underline_style: UnderlineStyle::None,
    underline_color: 0,
    underline_variant_offset: 0,
    url_id: 0,
  }
}

///|
pub fn ExtendedAttrs::clone(self : ExtendedAttrs) -> ExtendedAttrs {
  {
    underline_style: self.underline_style,
    underline_color: self.underline_color,
    underline_variant_offset: self.underline_variant_offset,
    url_id: self.url_id,
  }
}

///|
pub fn ExtendedAttrs::underline_style(self : ExtendedAttrs) -> UnderlineStyle {
  if self.url_id != 0 {
    UnderlineStyle::Dashed
  } else {
    self.underline_style
  }
}

///|
pub fn ExtendedAttrs::set_underline_style(
  self : ExtendedAttrs,
  value : UnderlineStyle,
) -> Unit {
  self.underline_style = value
}

///|
pub fn ExtendedAttrs::underline_color(self : ExtendedAttrs) -> Int {
  self.underline_color
}

///|
pub fn ExtendedAttrs::set_underline_color(
  self : ExtendedAttrs,
  value : Int,
) -> Unit {
  self.underline_color = value & (CmMask | RgbMask)
}

///|
pub fn ExtendedAttrs::underline_variant_offset(self : ExtendedAttrs) -> Int {
  self.underline_variant_offset
}

///|
pub fn ExtendedAttrs::set_underline_variant_offset(
  self : ExtendedAttrs,
  value : Int,
) -> Unit {
  self.underline_variant_offset = value & 7
}

///|
pub fn ExtendedAttrs::url_id(self : ExtendedAttrs) -> Int {
  self.url_id
}

///|
pub fn ExtendedAttrs::set_url_id(self : ExtendedAttrs, value : Int) -> Unit {
  self.url_id = value
}

///|
pub fn ExtendedAttrs::is_empty(self : ExtendedAttrs) -> Bool {
  self.underline_style() == UnderlineStyle::None && self.url_id == 0
}

///|
struct AttributeData {
  mut fg : Int
  mut bg : Int
  extended : ExtendedAttrs
}

///|
pub fn AttributeData::new() -> AttributeData {
  { fg: 0, bg: 0, extended: ExtendedAttrs::new() }
}

///|
pub fn AttributeData::clone(self : AttributeData) -> AttributeData {
  { fg: self.fg, bg: self.bg, extended: self.extended.clone() }
}

///|
pub fn AttributeData::fg(self : AttributeData) -> Int {
  self.fg
}

///|
pub fn AttributeData::set_fg(self : AttributeData, value : Int) -> Unit {
  self.fg = value
}

///|
pub fn AttributeData::bg(self : AttributeData) -> Int {
  self.bg
}

///|
pub fn AttributeData::set_bg(self : AttributeData, value : Int) -> Unit {
  self.bg = value
}

///|
pub fn AttributeData::extended(self : AttributeData) -> ExtendedAttrs {
  self.extended
}

///|
pub fn AttributeData::to_color_rgb(value : Int) -> (Int, Int, Int) {
  ((value >> RedShift) & 255, (value >> GreenShift) & 255, value & 255)
}

///|
pub fn AttributeData::from_color_rgb(value : (Int, Int, Int)) -> Int {
  ((value.0 & 255) << RedShift) |
  ((value.1 & 255) << GreenShift) |
  (value.2 & 255)
}

///|
pub fn AttributeData::is_inverse(self : AttributeData) -> Bool {
  (self.fg & FgInverse) != 0
}

///|
pub fn AttributeData::is_bold(self : AttributeData) -> Bool {
  (self.fg & FgBold) != 0
}

///|
pub fn AttributeData::is_underline(self : AttributeData) -> Bool {
  if self.has_extended_attrs() &&
    self.extended.underline_style() != UnderlineStyle::None {
    true
  } else {
    (self.fg & FgUnderline) != 0
  }
}

///|
pub fn AttributeData::is_blink(self : AttributeData) -> Bool {
  (self.fg & FgBlink) != 0
}

///|
pub fn AttributeData::is_invisible(self : AttributeData) -> Bool {
  (self.fg & FgInvisible) != 0
}

///|
pub fn AttributeData::is_italic(self : AttributeData) -> Bool {
  (self.bg & BgItalic) != 0
}

///|
pub fn AttributeData::is_dim(self : AttributeData) -> Bool {
  (self.bg & BgDim) != 0
}

///|
pub fn AttributeData::is_protected(self : AttributeData) -> Bool {
  (self.bg & BgProtected) != 0
}

///|
pub fn AttributeData::is_overline(self : AttributeData) -> Bool {
  (self.bg & BgOverline) != 0
}

///|
pub fn AttributeData::get_fg_color_mode(self : AttributeData) -> Int {
  self.fg & CmMask
}

///|
pub fn AttributeData::get_bg_color_mode(self : AttributeData) -> Int {
  self.bg & CmMask
}

///|
pub fn AttributeData::is_fg_rgb(self : AttributeData) -> Bool {
  self.get_fg_color_mode() == CmRgb
}

///|
pub fn AttributeData::is_bg_rgb(self : AttributeData) -> Bool {
  self.get_bg_color_mode() == CmRgb
}

///|
pub fn AttributeData::is_fg_palette(self : AttributeData) -> Bool {
  let mode = self.get_fg_color_mode()
  mode == CmP16 || mode == CmP256
}

///|
pub fn AttributeData::is_bg_palette(self : AttributeData) -> Bool {
  let mode = self.get_bg_color_mode()
  mode == CmP16 || mode == CmP256
}

///|
pub fn AttributeData::is_fg_default(self : AttributeData) -> Bool {
  self.get_fg_color_mode() == CmDefault
}

///|
pub fn AttributeData::is_bg_default(self : AttributeData) -> Bool {
  self.get_bg_color_mode() == CmDefault
}

///|
pub fn AttributeData::is_attribute_default(self : AttributeData) -> Bool {
  self.fg == 0 && self.bg == 0
}

///|
pub fn AttributeData::get_fg_color(self : AttributeData) -> Int {
  match self.get_fg_color_mode() {
    CmP16 | CmP256 => self.fg & PcolorMask
    CmRgb => self.fg & RgbMask
    _ => -1
  }
}

///|
pub fn AttributeData::get_bg_color(self : AttributeData) -> Int {
  match self.get_bg_color_mode() {
    CmP16 | CmP256 => self.bg & PcolorMask
    CmRgb => self.bg & RgbMask
    _ => -1
  }
}

///|
pub fn AttributeData::has_extended_attrs(self : AttributeData) -> Bool {
  (self.bg & BgHasExtended) != 0
}

///|
pub fn AttributeData::update_extended(self : AttributeData) -> Unit {
  if self.extended.is_empty() {
    self.bg = self.bg & (-BgHasExtended - 1)
  } else {
    self.bg = self.bg | BgHasExtended
  }
}

///|
pub fn AttributeData::get_underline_color(self : AttributeData) -> Int {
  if self.has_extended_attrs() {
    match self.extended.underline_color() & CmMask {
      CmP16 | CmP256 => self.extended.underline_color() & PcolorMask
      CmRgb => self.extended.underline_color() & RgbMask
      _ => self.get_fg_color()
    }
  } else {
    self.get_fg_color()
  }
}

///|
pub fn AttributeData::get_underline_color_mode(self : AttributeData) -> Int {
  if self.has_extended_attrs() {
    self.extended.underline_color() & CmMask
  } else {
    self.get_fg_color_mode()
  }
}

///|
pub fn AttributeData::is_underline_color_rgb(self : AttributeData) -> Bool {
  if self.has_extended_attrs() {
    (self.extended.underline_color() & CmMask) == CmRgb
  } else {
    self.is_fg_rgb()
  }
}

///|
pub fn AttributeData::is_underline_color_palette(self : AttributeData) -> Bool {
  if self.has_extended_attrs() {
    let mode = self.extended.underline_color() & CmMask
    mode == CmP16 || mode == CmP256
  } else {
    self.is_fg_palette()
  }
}

///|
pub fn AttributeData::is_underline_color_default(self : AttributeData) -> Bool {
  if self.has_extended_attrs() {
    (self.extended.underline_color() & CmMask) == 0
  } else {
    self.is_fg_default()
  }
}

///|
pub fn AttributeData::get_underline_style(
  self : AttributeData,
) -> UnderlineStyle {
  if (self.fg & FgUnderline) != 0 {
    if self.has_extended_attrs() {
      self.extended.underline_style()
    } else {
      UnderlineStyle::Single
    }
  } else {
    UnderlineStyle::None
  }
}

///|
pub fn AttributeData::get_underline_variant_offset(self : AttributeData) -> Int {
  self.extended.underline_variant_offset()
}
