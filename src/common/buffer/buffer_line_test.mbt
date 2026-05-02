///|
fn create_cell_data(attr : Int, chars : String, width : Int) -> CellData {
  let code = if chars.length() == 0 { 0 } else { chars[0].to_int() }
  CellData::from_char_data(CharData::new(attr, chars, width, code))
}

///|
fn null_cell_data() -> CellData {
  create_cell_data(DefaultAttr, NullCellChar, NullCellWidth)
}

///|
test "BufferLine constructor fills cells" {
  let empty = BufferLine::new(0, None, false)
  guard empty.length() == 0 else { fail("empty line should have length 0") }
  guard empty.is_wrapped() == false else {
    fail("empty line should not be wrapped")
  }

  let line = BufferLine::new(10, None, true)
  guard line.length() == 10 else { fail("line should have requested length") }
  guard line.is_wrapped() else { fail("line should preserve wrapped flag") }
  guard line.load_cell(0, CellData::new()).get_as_char_data() ==
    CharData::new(0, NullCellChar, NullCellWidth, NullCellCode) else {
    fail("default constructor cell should match xterm.js")
  }

  let filled = BufferLine::new(3, Some(create_cell_data(123, "a", 456)), true)
  guard filled.to_array() ==
    [
      CharData::new(123, "a", 456, 97),
      CharData::new(123, "a", 456, 97),
      CharData::new(123, "a", 456, 97),
    ] else {
    fail("constructor should clone fill cells")
  }
}

///|
test "BufferLine inserts cells" {
  let line = BufferLine::new(3, None, false)
  line.set_cell(0, create_cell_data(1, "a", 1))
  line.set_cell(1, create_cell_data(2, "b", 1))
  line.set_cell(2, create_cell_data(3, "c", 1))
  line.insert_cells(1, 3, create_cell_data(4, "d", 1))

  guard line.to_array() ==
    [
      CharData::new(1, "a", 1, 97),
      CharData::new(4, "d", 1, 100),
      CharData::new(4, "d", 1, 100),
    ] else {
    fail("insert_cells should shift and fill like xterm.js")
  }
}

///|
test "BufferLine deletes cells" {
  let line = BufferLine::new(5, None, false)
  line.set_cell(0, create_cell_data(1, "a", 1))
  line.set_cell(1, create_cell_data(2, "b", 1))
  line.set_cell(2, create_cell_data(3, "c", 1))
  line.set_cell(3, create_cell_data(4, "d", 1))
  line.set_cell(4, create_cell_data(5, "e", 1))
  line.delete_cells(1, 2, create_cell_data(6, "f", 1))

  guard line.to_array() ==
    [
      CharData::new(1, "a", 1, 97),
      CharData::new(4, "d", 1, 100),
      CharData::new(5, "e", 1, 101),
      CharData::new(6, "f", 1, 102),
      CharData::new(6, "f", 1, 102),
    ] else {
    fail("delete_cells should shift and fill like xterm.js")
  }
}

///|
test "BufferLine replaces and fills cells" {
  let line = BufferLine::new(5, None, false)
  line.set_cell(0, create_cell_data(1, "a", 1))
  line.set_cell(1, create_cell_data(2, "b", 1))
  line.set_cell(2, create_cell_data(3, "c", 1))
  line.set_cell(3, create_cell_data(4, "d", 1))
  line.set_cell(4, create_cell_data(5, "e", 1))
  line.replace_cells(2, 4, create_cell_data(6, "f", 1))

  guard line.to_array() ==
    [
      CharData::new(1, "a", 1, 97),
      CharData::new(2, "b", 1, 98),
      CharData::new(6, "f", 1, 102),
      CharData::new(6, "f", 1, 102),
      CharData::new(5, "e", 1, 101),
    ] else {
    fail("replace_cells should replace requested range")
  }

  line.fill(create_cell_data(123, "z", 1))
  guard line.to_array() ==
    [
      CharData::new(123, "z", 1, 122),
      CharData::new(123, "z", 1, 122),
      CharData::new(123, "z", 1, 122),
      CharData::new(123, "z", 1, 122),
      CharData::new(123, "z", 1, 122),
    ] else {
    fail("fill should overwrite every cell")
  }
}

///|
test "BufferLine clones and copies combining cells" {
  let line = BufferLine::new(
    2,
    Some(create_cell_data(1, "e\u{0301}", 1)),
    false,
  )
  guard line.to_array() ==
    [
      CharData::new(1, "e\u{0301}", 1, 0x0301),
      CharData::new(1, "e\u{0301}", 1, 0x0301),
    ] else {
    fail("line should preserve combining fill data")
  }

  let copied = BufferLine::new(5, Some(create_cell_data(1, "a", 1)), true)
  copied.copy_from(line)
  guard copied.to_array() == line.to_array() && copied.length() == line.length() else {
    fail("copy_from should copy cells and length")
  }

  let cloned = line.clone()
  guard cloned.to_array() == line.to_array() &&
    cloned.is_wrapped() == line.is_wrapped() else {
    fail("clone should preserve cells and wrapped flag")
  }
}

///|
test "BufferLine resizes and trims" {
  let line = BufferLine::new(5, Some(create_cell_data(1, "a", 1)), false)
  line.resize(10, create_cell_data(1, "a", 1)) |> ignore
  guard line.length() == 10 && line.get_trimmed_length() == 10 else {
    fail("resize should enlarge and fill cells")
  }

  line.resize(3, create_cell_data(1, "a", 1)) |> ignore
  guard line.to_array() ==
    [
      CharData::new(1, "a", 1, 97),
      CharData::new(1, "a", 1, 97),
      CharData::new(1, "a", 1, 97),
    ] else {
    fail("resize should shrink cells")
  }
}

///|
test "BufferLine trimmed length follows content width" {
  let line = BufferLine::new(10, Some(null_cell_data()), false)
  line.set_cell(0, create_cell_data(1, "a", 1))
  line.set_cell(2, create_cell_data(1, "\u{FF11}", 2))
  line.set_cell(3, create_cell_data(0, "", 0))

  guard line.get_trimmed_length() == 4 else {
    fail("trimmed length should count trailing wide-cell placeholder")
  }
}

///|
test "BufferLine translates cells to strings" {
  let line = BufferLine::new(10, Some(null_cell_data()), false)
  line.set_cell(0, create_cell_data(1, "a", 1))
  line.set_cell(2, create_cell_data(1, "a", 1))
  line.set_cell(4, create_cell_data(1, "a", 1))
  line.set_cell(5, create_cell_data(1, "a", 1))

  inspect(
    line.translate_to_string(false, 0, line.length()),
    content="a a aa    ",
  )
  inspect(line.translate_to_string(true, 0, line.length()), content="a a aa")
  inspect(line.translate_to_string(false, 0, 5), content="a a a")
}

///|
test "BufferLine adds codepoints to cells" {
  let line = BufferLine::new(3, Some(null_cell_data()), false)
  line.add_codepoint_to_cell(0, 0x0301, 0)
  guard line.load_cell(0, CellData::new()).get_as_char_data() ==
    CharData::new(DefaultAttr, "\u{0301}", 1, 0x0301) else {
    fail("combining codepoint on empty cell should become width-1 cell")
  }

  let cell = CellData::new()
  cell.set_from_char_data(CharData::new(123, "e\u{0301}", 1, 0x0301))
  line.set_cell(1, cell)
  line.add_codepoint_to_cell(1, 0x0301, 0)
  guard line.load_cell(1, CellData::new()).get_as_char_data() ==
    CharData::new(123, "e\u{0301}\u{0301}", 1, 0x0301) else {
    fail("combining codepoint should append to combined cell")
  }
}
