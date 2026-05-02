///|
fn int_arg(args : Array[String], index : Int, fallback : Int) -> Int {
  if args.length() <= index {
    return fallback
  }
  @string.parse_int(args[index]) catch {
    _ => fallback
  }
}

///|
fn main {
  let args = @env.args()
  let cols = int_arg(args, 1, 80)
  let rows = int_arg(args, 2, 24)
  let scrollback = int_arg(args, 3, 1000)
  let terminal = @terminal.Terminal::new(cols, rows, scrollback)
  for i = 4; i < args.length(); i = i + 1 {
    terminal.write(args[i])
  }
  println(terminal.screen_text(true))
}
