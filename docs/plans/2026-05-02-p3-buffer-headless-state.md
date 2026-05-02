# Phase 3 Buffer And Starter Headless State

Status: ready for a starter harness.

Implemented:

- `AttributeData`, `ExtendedAttrs`, and `CellData` behavior for attrs,
  underline metadata, UTF-16 cell content, combining strings, and
  `attributes_equals`.
- `BufferLine` behavior for get/set, insert/delete/replace/fill, resize,
  cloning/copying, trimmed length, string translation, and combining codepoints.
- `CircularList` behavior for bounded scrollback storage, wrapping, splice,
  trim, shift, and trim events.
- `Buffer` and `BufferSet` behavior for normal/alt buffers, viewport rows,
  basic resize, wrapped ranges, cursor carry-over, and viewport text export.
- `Terminal.write` starter behavior for printable ASCII, CR, LF, BS, wrapping,
  and bottom-row scroll.

Harness readiness:

- It is now reasonable to add a small harness scaffold for plain text, CRLF,
  backspace, wrap, and scroll snapshots.
- Do not add broad SGR, CSI, UTF-8 byte, CJK width, DOM, or addon fixtures yet;
  those still need parser/input work.

Next:

- Add the starter harness scaffold without building or mutating
  `reference/xterm.js`.
- Continue Phase 4 parser tests and implementation after the harness runner
  shape is in place.
