///|
struct BufferLine {
  cells : Array[CellData]
  mut is_wrapped : Bool
}

///|
fn default_line_cell() -> CellData {
  CellData::from_char_data(
    CharData::new(0, NullCellChar, NullCellWidth, NullCellCode),
  )
}

///|
fn codepoint_to_string(codepoint : Int) -> String {
  String::from_array([codepoint.unsafe_to_char()])
}

///|
fn copy_extended_attrs(target : ExtendedAttrs, source : ExtendedAttrs) -> Unit {
  target.set_underline_style(source.underline_style)
  target.set_underline_color(source.underline_color())
  target.set_underline_variant_offset(source.underline_variant_offset())
  target.set_url_id(source.url_id())
}

///|
fn copy_cell_into(target : CellData, source : CellData) -> Unit {
  target.content = source.content
  target.fg = source.fg
  target.bg = source.bg
  target.combined_data = source.combined_data
  copy_extended_attrs(target.extended, source.extended)
}

///|
pub fn BufferLine::new(
  cols : Int,
  fill_cell_data : CellData?,
  is_wrapped : Bool,
) -> BufferLine {
  let fill = match fill_cell_data {
    Some(cell) => cell
    None => default_line_cell()
  }
  let cells : Array[CellData] = []
  for _i = 0; _i < cols; _i = _i + 1 {
    cells.push(fill.clone())
  }
  { cells, is_wrapped }
}

///|
pub fn BufferLine::length(self : BufferLine) -> Int {
  self.cells.length()
}

///|
pub fn BufferLine::is_wrapped(self : BufferLine) -> Bool {
  self.is_wrapped
}

///|
pub fn BufferLine::set_is_wrapped(self : BufferLine, value : Bool) -> Unit {
  self.is_wrapped = value
}

///|
pub fn BufferLine::get(self : BufferLine, index : Int) -> CharData {
  self.cells[index].get_as_char_data()
}

///|
pub fn BufferLine::set(
  self : BufferLine,
  index : Int,
  value : CharData,
) -> Unit {
  self.set_cell(index, CellData::from_char_data(value))
}

///|
pub fn BufferLine::get_width(self : BufferLine, index : Int) -> Int {
  self.cells[index].get_width()
}

///|
pub fn BufferLine::has_width(self : BufferLine, index : Int) -> Bool {
  (self.cells[index].content & ContentWidthMask) != 0
}

///|
pub fn BufferLine::get_fg(self : BufferLine, index : Int) -> Int {
  self.cells[index].fg
}

///|
pub fn BufferLine::get_bg(self : BufferLine, index : Int) -> Int {
  self.cells[index].bg
}

///|
pub fn BufferLine::has_content(self : BufferLine, index : Int) -> Bool {
  (self.cells[index].content & ContentHasContentMask) != 0
}

///|
pub fn BufferLine::get_codepoint(self : BufferLine, index : Int) -> Int {
  self.cells[index].get_code()
}

///|
pub fn BufferLine::is_combined(self : BufferLine, index : Int) -> Bool {
  self.cells[index].is_combined()
}

///|
pub fn BufferLine::get_string(self : BufferLine, index : Int) -> String {
  self.cells[index].get_chars()
}

///|
pub fn BufferLine::is_protected(self : BufferLine, index : Int) -> Bool {
  (self.cells[index].bg & BgProtected) != 0
}

///|
pub fn BufferLine::load_cell(
  self : BufferLine,
  index : Int,
  cell : CellData,
) -> CellData {
  copy_cell_into(cell, self.cells[index])
  cell
}

///|
pub fn BufferLine::set_cell(
  self : BufferLine,
  index : Int,
  cell : CellData,
) -> Unit {
  self.cells[index] = cell.clone()
}

///|
pub fn BufferLine::set_cell_from_codepoint(
  self : BufferLine,
  index : Int,
  codepoint : Int,
  width : Int,
  attrs : AttributeData,
) -> Unit {
  let cell = CellData::new()
  cell.content = codepoint | (width << ContentWidthShift)
  cell.fg = attrs.fg()
  cell.bg = attrs.bg()
  copy_extended_attrs(cell.extended, attrs.extended())
  self.set_cell(index, cell)
}

///|
pub fn BufferLine::add_codepoint_to_cell(
  self : BufferLine,
  index : Int,
  codepoint : Int,
  width : Int,
) -> Unit {
  let cell = self.cells[index].clone()
  let mut content = cell.content
  if (content & ContentIsCombinedMask) != 0 {
    cell.combined_data = cell.combined_data + codepoint_to_string(codepoint)
  } else if (content & ContentCodepointMask) != 0 {
    cell.combined_data = codepoint_to_string(content & ContentCodepointMask) +
      codepoint_to_string(codepoint)
    content = (content & (-ContentCodepointMask - 1)) | ContentIsCombinedMask
  } else {
    content = codepoint | (1 << ContentWidthShift)
  }
  if width != 0 {
    content = (content & (-ContentWidthMask - 1)) | (width << ContentWidthShift)
  }
  cell.content = content
  self.set_cell(index, cell)
}

///|
pub fn BufferLine::insert_cells(
  self : BufferLine,
  pos : Int,
  n : Int,
  fill_cell_data : CellData,
) -> Unit {
  let length = self.length()
  if length == 0 {
    return
  }
  let pos = pos % length
  if pos != 0 && self.get_width(pos - 1) == 2 {
    self.set_cell_from_codepoint(pos - 1, 0, 1, fill_cell_data.as_attrs())
  }

  if n < length - pos {
    for i = length - pos - n - 1; i >= 0; i = i - 1 {
      self.set_cell(pos + n + i, self.cells[pos + i])
    }
    for i = 0; i < n; i = i + 1 {
      self.set_cell(pos + i, fill_cell_data)
    }
  } else {
    for i = pos; i < length; i = i + 1 {
      self.set_cell(i, fill_cell_data)
    }
  }

  if self.get_width(length - 1) == 2 {
    self.set_cell_from_codepoint(length - 1, 0, 1, fill_cell_data.as_attrs())
  }
}

///|
pub fn BufferLine::delete_cells(
  self : BufferLine,
  pos : Int,
  n : Int,
  fill_cell_data : CellData,
) -> Unit {
  let length = self.length()
  if length == 0 {
    return
  }
  let pos = pos % length
  if n < length - pos {
    for i = 0; i < length - pos - n; i = i + 1 {
      self.set_cell(pos + i, self.cells[pos + n + i])
    }
    for i = length - n; i < length; i = i + 1 {
      self.set_cell(i, fill_cell_data)
    }
  } else {
    for i = pos; i < length; i = i + 1 {
      self.set_cell(i, fill_cell_data)
    }
  }

  if pos != 0 && self.get_width(pos - 1) == 2 {
    self.set_cell_from_codepoint(pos - 1, 0, 1, fill_cell_data.as_attrs())
  }
  if self.get_width(pos) == 0 && !self.has_content(pos) {
    self.set_cell_from_codepoint(pos, 0, 1, fill_cell_data.as_attrs())
  }
}

///|
pub fn BufferLine::replace_cells(
  self : BufferLine,
  start : Int,
  end : Int,
  fill_cell_data : CellData,
) -> Unit {
  let length = self.length()
  let mut start = start
  if start != 0 && self.get_width(start - 1) == 2 {
    self.set_cell_from_codepoint(start - 1, 0, 1, fill_cell_data.as_attrs())
  }
  if end < length && end > 0 && self.get_width(end - 1) == 2 {
    self.set_cell_from_codepoint(end, 0, 1, fill_cell_data.as_attrs())
  }
  while start < end && start < length {
    self.set_cell(start, fill_cell_data)
    start += 1
  }
}

///|
pub fn BufferLine::resize(
  self : BufferLine,
  cols : Int,
  fill_cell_data : CellData,
) -> Bool {
  let old_length = self.length()
  if cols > old_length {
    for _i = old_length; _i < cols; _i = _i + 1 {
      self.cells.push(fill_cell_data.clone())
    }
  } else {
    while self.cells.length() > cols {
      self.cells.remove(self.cells.length() - 1) |> ignore
    }
  }
  false
}

///|
pub fn BufferLine::fill(self : BufferLine, fill_cell_data : CellData) -> Unit {
  for i = 0; i < self.length(); i = i + 1 {
    self.set_cell(i, fill_cell_data)
  }
}

///|
pub fn BufferLine::copy_from(self : BufferLine, line : BufferLine) -> Unit {
  self.cells.clear()
  for i = 0; i < line.length(); i = i + 1 {
    self.cells.push(line.cells[i].clone())
  }
  self.is_wrapped = line.is_wrapped
}

///|
pub fn BufferLine::clone(self : BufferLine) -> BufferLine {
  let line = BufferLine::new(0, None, self.is_wrapped)
  line.copy_from(self)
  line
}

///|
pub fn BufferLine::get_trimmed_length(self : BufferLine) -> Int {
  for i = self.length() - 1; i >= 0; i = i - 1 {
    if (self.cells[i].content & ContentHasContentMask) != 0 {
      return i + self.cells[i].get_width()
    }
  }
  0
}

///|
pub fn BufferLine::to_array(self : BufferLine) -> Array[CharData] {
  let result : Array[CharData] = []
  for i = 0; i < self.length(); i = i + 1 {
    result.push(self.cells[i].get_as_char_data())
  }
  result
}

///|
pub fn BufferLine::translate_to_string(
  self : BufferLine,
  trim_right : Bool,
  start_col : Int,
  end_col : Int,
) -> String {
  let mut start_col = start_col
  let mut end_col = end_col
  if trim_right {
    let trimmed = self.get_trimmed_length()
    if trimmed < end_col {
      end_col = trimmed
    }
  }
  let mut result = ""
  while start_col < end_col {
    let content = self.cells[start_col].content
    let codepoint = content & ContentCodepointMask
    let chars = if (content & ContentIsCombinedMask) != 0 {
      self.cells[start_col].combined_data
    } else if codepoint != 0 {
      codepoint_to_string(codepoint)
    } else {
      WhitespaceCellChar
    }
    result = result + chars
    let width = content >> ContentWidthShift
    start_col += if width == 0 { 1 } else { width }
  }
  result
}
