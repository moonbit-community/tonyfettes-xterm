///|
pub(all) struct InsertEvent {
  index : Int
  amount : Int
} derive(Eq, Debug)

///|
pub(all) struct DeleteEvent {
  index : Int
  amount : Int
} derive(Eq, Debug)

///|
struct CircularList[T] {
  mut array : Array[T?]
  mut start_index : Int
  mut length : Int
  mut max_length : Int
  on_delete_emitter : Emitter[DeleteEvent]
  on_insert_emitter : Emitter[InsertEvent]
  on_trim_emitter : Emitter[Int]
}

///|
pub fn[T] CircularList::new(max_length : Int) -> CircularList[T] {
  let array : Array[T?] = []
  for _i = 0; _i < max_length; _i = _i + 1 {
    array.push(None)
  }
  {
    array,
    start_index: 0,
    length: 0,
    max_length,
    on_delete_emitter: Emitter::new(),
    on_insert_emitter: Emitter::new(),
    on_trim_emitter: Emitter::new(),
  }
}

///|
pub fn[T] CircularList::max_length(self : CircularList[T]) -> Int {
  self.max_length
}

///|
pub fn[T] CircularList::set_max_length(
  self : CircularList[T],
  new_max_length : Int,
) -> Unit {
  if self.max_length == new_max_length {
    return
  }
  let new_array : Array[T?] = []
  let transfer_count = if new_max_length < self.length {
    new_max_length
  } else {
    self.length
  }
  for i = 0; i < transfer_count; i = i + 1 {
    new_array.push(self.get(i))
  }
  for _i = transfer_count; _i < new_max_length; _i = _i + 1 {
    new_array.push(None)
  }
  self.array = new_array
  self.max_length = new_max_length
  self.start_index = 0
  if self.length > new_max_length {
    self.length = new_max_length
  }
}

///|
pub fn[T] CircularList::length(self : CircularList[T]) -> Int {
  self.length
}

///|
pub fn[T] CircularList::set_length(
  self : CircularList[T],
  new_length : Int,
) -> Unit {
  if new_length > self.length {
    for i = self.length; i < new_length; i = i + 1 {
      self.set(i, None)
    }
  }
  self.length = new_length
}

///|
fn[T] CircularList::cyclic_index(self : CircularList[T], index : Int) -> Int {
  if self.max_length == 0 {
    0
  } else {
    (self.start_index + index) % self.max_length
  }
}

///|
pub fn[T] CircularList::get(self : CircularList[T], index : Int) -> T? {
  self.array[self.cyclic_index(index)]
}

///|
pub fn[T] CircularList::set(
  self : CircularList[T],
  index : Int,
  value : T?,
) -> Unit {
  self.array[self.cyclic_index(index)] = value
}

///|
pub fn[T] CircularList::push(self : CircularList[T], value : T) -> Unit {
  if self.max_length == 0 {
    return
  }
  self.array[self.cyclic_index(self.length)] = Some(value)
  if self.length == self.max_length {
    self.start_index = (self.start_index + 1) % self.max_length
    self.on_trim_emitter.fire(1)
  } else {
    self.length += 1
  }
}

///|
pub fn[T] CircularList::recycle(self : CircularList[T]) -> T? {
  if self.length != self.max_length || self.max_length == 0 {
    return None
  }
  self.start_index = (self.start_index + 1) % self.max_length
  self.on_trim_emitter.fire(1)
  self.array[self.cyclic_index(self.length - 1)]
}

///|
pub fn[T] CircularList::is_full(self : CircularList[T]) -> Bool {
  self.length == self.max_length
}

///|
pub fn[T] CircularList::pop(self : CircularList[T]) -> T? {
  if self.length == 0 {
    None
  } else {
    let index = self.cyclic_index(self.length - 1)
    self.length -= 1
    self.array[index]
  }
}

///|
pub fn[T] CircularList::splice(
  self : CircularList[T],
  start : Int,
  delete_count : Int,
  items : Array[T],
) -> Unit {
  if delete_count != 0 {
    for i = start; i < self.length - delete_count; i = i + 1 {
      self.set(i, self.get(i + delete_count))
    }
    self.length -= delete_count
    self.on_delete_emitter.fire({ index: start, amount: delete_count })
  }

  for i = self.length - 1; i >= start; i = i - 1 {
    self.set(i + items.length(), self.get(i))
  }
  for i = 0; i < items.length(); i = i + 1 {
    self.set(start + i, Some(items[i]))
  }
  if items.length() != 0 {
    self.on_insert_emitter.fire({ index: start, amount: items.length() })
  }

  if self.length + items.length() > self.max_length {
    let count_to_trim = self.length + items.length() - self.max_length
    self.start_index += count_to_trim
    self.length = self.max_length
    self.on_trim_emitter.fire(count_to_trim)
  } else {
    self.length += items.length()
  }
}

///|
pub fn[T] CircularList::trim_start(self : CircularList[T], count : Int) -> Unit {
  let count = if count > self.length { self.length } else { count }
  self.start_index += count
  self.length -= count
  self.on_trim_emitter.fire(count)
}

///|
pub fn[T] CircularList::shift_elements(
  self : CircularList[T],
  start : Int,
  count : Int,
  offset : Int,
) -> Unit {
  if count <= 0 {
    return
  }
  if start < 0 || start >= self.length || start + offset < 0 {
    return
  }

  if offset > 0 {
    for i = count - 1; i >= 0; i = i - 1 {
      self.set(start + i + offset, self.get(start + i))
    }
    let expand_list_by = start + count + offset - self.length
    if expand_list_by > 0 {
      self.length += expand_list_by
      while self.length > self.max_length {
        self.length -= 1
        self.start_index += 1
        self.on_trim_emitter.fire(1)
      }
    }
  } else {
    for i = 0; i < count; i = i + 1 {
      self.set(start + i + offset, self.get(start + i))
    }
  }
}

///|
pub fn[T] CircularList::on_delete(
  self : CircularList[T],
  listener : (DeleteEvent) -> Unit,
) -> Disposable {
  self.on_delete_emitter.event(listener)
}

///|
pub fn[T] CircularList::on_insert(
  self : CircularList[T],
  listener : (InsertEvent) -> Unit,
) -> Disposable {
  self.on_insert_emitter.event(listener)
}

///|
pub fn[T] CircularList::on_trim(
  self : CircularList[T],
  listener : (Int) -> Unit,
) -> Disposable {
  self.on_trim_emitter.event(listener)
}

///|
pub fn[T] CircularList::to_array(self : CircularList[T]) -> Array[T?] {
  let result : Array[T?] = []
  for i = 0; i < self.length; i = i + 1 {
    result.push(self.get(i))
  }
  result
}
