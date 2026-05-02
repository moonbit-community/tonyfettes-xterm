///|
struct Disposable(() -> Unit)

///|
pub fn Disposable::dispose(self : Disposable) -> Unit {
  (self.0)()
}

///|
priv struct Listener[T] {
  id : Int
  handler : (T) -> Unit
}

///|
struct Emitter[T] {
  mut disposed : Bool
  mut next_id : Int
  listeners : Array[Listener[T]]
}

///|
pub fn[T] Emitter::new() -> Emitter[T] {
  { disposed: false, next_id: 0, listeners: [] }
}

///|
pub fn[T] Emitter::event(
  self : Emitter[T],
  listener : (T) -> Unit,
) -> Disposable {
  if self.disposed {
    return Disposable(fn() { () })
  }

  let id = self.next_id
  self.next_id += 1
  self.listeners.push({ id, handler: listener })
  Disposable(fn() {
    match self.listeners.search_by(entry => entry.id == id) {
      Some(index) => self.listeners.remove(index) |> ignore
      None => ()
    }
  })
}

///|
pub fn[T] Emitter::fire(self : Emitter[T], event : T) -> Unit {
  if self.disposed {
    return
  }
  match self.listeners.length() {
    0 => ()
    1 => (self.listeners[0].handler)(event)
    _ => {
      let listeners = self.listeners.copy()
      for listener in listeners {
        (listener.handler)(event)
      }
    }
  }
}

///|
pub fn[T] Emitter::dispose(self : Emitter[T]) -> Unit {
  if self.disposed {
    return
  }
  self.disposed = true
  self.listeners.clear()
}
