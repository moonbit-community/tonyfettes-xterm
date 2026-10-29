///|
test "event/fire with zero listeners is inert" {
  let emitter : Emitter[Int32] = Emitter::new()
  emitter.fire(42)
}

///|
test "event/fire with one listener" {
  let emitter : Emitter[Int32] = Emitter::new()
  let received : Ref[Int32?] = Ref::{ val: None, }

  emitter.event(fn(value) { received.val = Some(value) }) |> ignore
  emitter.fire(42)

  guard received.val == Some(42) else {
    fail("expected listener to receive fired value")
  }
}

///|
test "event/fire with multiple listeners preserves registration order" {
  let emitter : Emitter[Int32] = Emitter::new()
  let results : Array[Int32] = []

  emitter.event(fn(value) { results.push(value) }) |> ignore
  emitter.event(fn(value) { results.push(value * 2) }) |> ignore
  emitter.event(fn(value) { results.push(value * 3) }) |> ignore

  emitter.fire(10)

  inspect(results, content="[10, 20, 30]")
}

///|
test "event/listener removal during fire uses listener snapshot" {
  let emitter : Emitter[Int32] = Emitter::new()
  let results : Array[String] = []
  let disposable_ref : Ref[Disposable?] = Ref::{ val: None, }

  emitter.event(fn(_) { results.push("first") }) |> ignore
  let disposable = emitter.event(fn(_) {
    results.push("second")
    match disposable_ref.val {
      Some(disposable) => disposable.dispose()
      None => ()
    }
  })
  disposable_ref.val = Some(disposable)
  emitter.event(fn(_) { results.push("third") }) |> ignore

  emitter.fire(1)

  debug_inspect(results, content="[\"first\", \"second\", \"third\"]")
}

///|
test "event/dispose emitter clears listeners" {
  let emitter : Emitter[Int32] = Emitter::new()
  let called : Ref[Bool] = Ref::{ val: false, }

  emitter.event(fn(_) { called.val = true }) |> ignore
  emitter.dispose()
  emitter.fire(42)

  inspect(called.val, content="false")
}

///|
test "event/dispose listener removes only that listener" {
  let emitter : Emitter[Int32] = Emitter::new()
  let count : Ref[Int32] = Ref::{ val: 0, }

  let disposable = emitter.event(fn(_) { count.val += 1 })
  emitter.fire(1)
  disposable.dispose()
  emitter.fire(2)

  inspect(count.val, content="1")
}
