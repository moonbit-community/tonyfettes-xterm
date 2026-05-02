///|
pub(all) enum BufferKind {
  Normal
  Alt
} derive(Eq, Debug)

///|
struct BufferSet {
  normal : Buffer
  alt : Buffer
  mut active_kind : BufferKind
}

///|
pub fn BufferSet::new(cols : Int, rows : Int, scrollback : Int) -> BufferSet {
  let normal = Buffer::new(true, cols, rows, scrollback)
  normal.fill_viewport_rows(None)
  {
    normal,
    alt: Buffer::new(false, cols, rows, scrollback),
    active_kind: BufferKind::Normal,
  }
}

///|
pub fn BufferSet::normal(self : BufferSet) -> Buffer {
  self.normal
}

///|
pub fn BufferSet::alt(self : BufferSet) -> Buffer {
  self.alt
}

///|
pub fn BufferSet::active_kind(self : BufferSet) -> BufferKind {
  self.active_kind
}

///|
pub fn BufferSet::active(self : BufferSet) -> Buffer {
  match self.active_kind {
    BufferKind::Normal => self.normal
    BufferKind::Alt => self.alt
  }
}

///|
pub fn BufferSet::activate_normal_buffer(self : BufferSet) -> Unit {
  if self.active_kind == BufferKind::Normal {
    return
  }
  self.normal.set_x(self.alt.x())
  self.normal.set_y(self.alt.y())
  self.alt.clear()
  self.active_kind = BufferKind::Normal
}

///|
pub fn BufferSet::activate_alt_buffer(
  self : BufferSet,
  fill_attr : AttributeData?,
) -> Unit {
  if self.active_kind == BufferKind::Alt {
    return
  }
  self.alt.fill_viewport_rows(fill_attr)
  self.alt.set_x(self.normal.x())
  self.alt.set_y(self.normal.y())
  self.active_kind = BufferKind::Alt
}

///|
pub fn BufferSet::resize(self : BufferSet, cols : Int, rows : Int) -> Unit {
  self.normal.resize(cols, rows)
  self.alt.resize(cols, rows)
}
