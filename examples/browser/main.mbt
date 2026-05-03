///|
fn main {
  let terminal = @xterm_browser.Terminal::new(
    options=@xterm_browser.TerminalOptions::new(
      cols=64,
      rows=14,
      scrollback=128,
    ),
  )
  terminal.on_data(fn(data) { echo_input(terminal, data) }) |> ignore
  terminal.write("\u{1b}[1;36mMoonBit xterm browser integration\u{1b}[0m\r\n")
  terminal.writeln("Rabbita DOM renderer + headless terminal core")
  terminal.writeln("")
  terminal.writeln(
    "\u{1b}[31mred\u{1b}[0m \u{1b}[32mgreen\u{1b}[0m \u{1b}[34mblue\u{1b}[0m \u{1b}[1mbold\u{1b}[0m \u{1b}[3mitalic\u{1b}[0m \u{1b}[4munderline\u{1b}[0m",
  )
  terminal.writeln("")
  terminal.writeln("Click the terminal, type, paste, or use the mouse wheel.")
  terminal.write("\r\nmoonbit$ ")
  terminal.open("terminal")
  terminal.focus()
}

///|
fn echo_input(terminal : @xterm_browser.Terminal, data : String) -> Unit {
  match data {
    "\r" => terminal.write("\r\nmoonbit$ ")
    "\u{7f}" => terminal.write("\u{8} \u{8}")
    _ => terminal.write(data)
  }
}
