///|
test "empty snapshot json has harness shape" {
  let snapshot = @json.parse(empty_snapshot_json())
  guard snapshot is Object(obj) else { fail("expected snapshot object") }
  guard obj["case"] == "moonbit-empty" && obj["cols"] == 80 && obj["rows"] == 24 else {
    fail("expected empty terminal dimensions")
  }
  guard obj["buffers"] is Object(buffers) else {
    fail("expected buffers object")
  }
  assert_eq(buffers["active"], "normal")
}
