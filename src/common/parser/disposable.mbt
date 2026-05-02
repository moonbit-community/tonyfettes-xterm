///|
struct Disposable(() -> Unit)

///|
pub fn Disposable::dispose(self : Disposable) -> Unit {
  (self.0)()
}
