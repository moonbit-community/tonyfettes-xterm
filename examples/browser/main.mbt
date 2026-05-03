///|
fn main {
  let terminal = @xterm_browser.Terminal::new(
    options=@xterm_browser.TerminalOptions::new(cols=48, rows=8, scrollback=32),
  )
  terminal.write("MoonBit xterm browser POC\r\n")
  terminal.writeln("Rabbita DOM renderer")
  terminal.writeln("")
  terminal.write("headless buffer -> render model -> DOM rows")
  terminal.open("terminal")
  terminal.focus()
}
