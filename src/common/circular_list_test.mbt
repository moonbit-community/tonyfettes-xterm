///|
fn expect_strings(
  list : CircularList[String],
  expected : Array[String?],
  label : String,
) -> Unit raise {
  guard list.to_array() == expected else { fail(label) }
}

///|
fn expect_ints(
  list : CircularList[Int],
  expected : Array[Int?],
  label : String,
) -> Unit raise {
  guard list.to_array() == expected else { fail(label) }
}

///|
test "CircularList pushes values and wraps at max length" {
  let list = CircularList::new(2)
  list.push("1")
  list.push("2")
  expect_strings(list, [Some("1"), Some("2")], "initial push")

  list.push("3")
  expect_strings(list, [Some("2"), Some("3")], "first wrap")

  list.push("4")
  expect_strings(list, [Some("3"), Some("4")], "second wrap")
}

///|
test "CircularList reports length capped at max length" {
  let list = CircularList::new(2)
  guard list.length() == 0 else { fail("new list should be empty") }
  list.push("1")
  guard list.length() == 1 else { fail("one pushed item should set length 1") }
  list.push("2")
  list.push("3")
  guard list.length() == 2 && list.max_length() == 2 && list.is_full() else {
    fail("length should stay capped at max length")
  }
}

///|
test "CircularList can increase max length" {
  let list = CircularList::new(2)
  list.push("1")
  list.push("2")
  list.set_max_length(4)
  list.push("3")
  list.push("4")
  expect_strings(
    list,
    [Some("1"), Some("2"), Some("3"), Some("4")],
    "increased max length",
  )

  list.push("wrapped")
  expect_strings(
    list,
    [Some("2"), Some("3"), Some("4"), Some("wrapped")],
    "wrap after increasing max length",
  )
}

///|
test "CircularList splices deletes and inserts" {
  let list = CircularList::new(3)
  list.push("1")
  list.push("2")
  list.splice(0, 1, [])
  expect_strings(list, [Some("2")], "delete first")

  list.push("3")
  list.splice(1, 1, [])
  expect_strings(list, [Some("2")], "delete second")

  list.splice(0, 0, ["4"])
  expect_strings(list, [Some("4"), Some("2")], "insert front")

  list.splice(0, 1, ["5", "6"])
  expect_strings(list, [Some("5"), Some("6"), Some("2")], "delete and insert")
}

///|
test "CircularList splices wrap when inserting more than capacity" {
  let list = CircularList::new(3)
  list.push("1")
  list.push("2")
  list.splice(1, 0, ["3", "4"])
  expect_strings(
    list,
    [Some("3"), Some("4"), Some("2")],
    "splice should trim from front when over capacity",
  )
}

///|
test "CircularList trims from start" {
  let list = CircularList::new(5)
  list.push("1")
  list.push("2")
  list.push("3")
  list.push("4")
  list.push("5")
  list.trim_start(1)
  expect_strings(list, [Some("2"), Some("3"), Some("4"), Some("5")], "trim one")
  list.trim_start(2)
  expect_strings(list, [Some("4"), Some("5")], "trim two more")
  list.trim_start(10)
  guard list.length() == 0 else { fail("over-trim should empty list") }
}

///|
test "CircularList emits trim events" {
  let list = CircularList::new(2)
  let trims : Array[Int] = []
  list.on_trim(fn(amount) { trims.push(amount) }) |> ignore

  list.push("1")
  list.push("2")
  list.push("3")
  list.trim_start(1)

  inspect(trims, content="[1, 1]")
}

///|
test "CircularList shifts elements forward and backward" {
  let list = CircularList::new(5)
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.shift_elements(0, 2, 2)
  expect_ints(list, [Some(1), Some(2), Some(1), Some(2)], "shift forward")

  list.shift_elements(2, 2, -2)
  expect_ints(
    list,
    [Some(1), Some(2), Some(1), Some(2)],
    "shift backward mirrors xterm.js overwrite semantics",
  )
}

///|
test "CircularList shifts forward with wrapping" {
  let list = CircularList::new(5)
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(5)
  list.shift_elements(2, 2, 3)
  expect_ints(
    list,
    [Some(3), Some(4), Some(5), Some(3), Some(4)],
    "shift forward should trim wrapped rows from front",
  )
}
