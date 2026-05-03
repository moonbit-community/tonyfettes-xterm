function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Effect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Effect.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message.prototype.$tag = 2;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiWiEbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiWiEbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPB7JSArray3pop = (arr) => arr.pop();
const _M0MPB7JSArray6splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC13set3SetGRP319moonbit_2dcommunity7rabbita6common2IdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set5EntryGRP319moonbit_2dcommunity7rabbita6common2IdE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGuE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0) {
  this.val = param0;
}
function _M0TPC15queue5QueueGRP319moonbit_2dcommunity7rabbita6common2IdE(param0, param1, param2) {
  this.length = param0;
  this.first = param1;
  this.last = param2;
}
function _M0TPC15queue5QueueGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1, param2) {
  this.length = param0;
  this.first = param1;
  this.last = param2;
}
function _M0TPC15queue5QueueGuE(param0, param1, param2) {
  this.length = param0;
  this.first = param1;
  this.last = param2;
}
function _M0TPC15queue4ConsGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TPC15queue4ConsGRP319moonbit_2dcommunity7rabbita6common2IdE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TPC15queue4ConsGuE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TP411feihaoxiang5xterm3src6common7EmitterGsE(param0, param1, param2) {
  this.disposed = param0;
  this.next_id = param1;
  this.listeners = param2;
}
function _M0TP411feihaoxiang5xterm3src6common7EmitterGuE(param0, param1, param2) {
  this.disposed = param0;
  this.next_id = param1;
  this.listeners = param2;
}
function _M0TP411feihaoxiang5xterm3src6common7EmitterGiE(param0, param1, param2) {
  this.disposed = param0;
  this.next_id = param1;
  this.listeners = param2;
}
function _M0TP411feihaoxiang5xterm3src6common8ListenerGsE(param0, param1) {
  this.id = param0;
  this.handler = param1;
}
function _M0TP411feihaoxiang5xterm3src6common12CircularListGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(param0, param1, param2, param3, param4, param5, param6) {
  this.array = param0;
  this.start_index = param1;
  this.length = param2;
  this.max_length = param3;
  this.on_delete_emitter = param4;
  this.on_insert_emitter = param5;
  this.on_trim_emitter = param6;
}
function _M0TP411feihaoxiang5xterm3src6common11DeleteEvent(param0, param1) {
  this.index = param0;
  this.amount = param1;
}
function _M0TP411feihaoxiang5xterm3src6common11InsertEvent(param0, param1) {
  this.index = param0;
  this.amount = param1;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer8CharData(param0, param1, param2, param3) {
  this.attr = param0;
  this.chars = param1;
  this.width = param2;
  this.code = param3;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs(param0, param1, param2, param3) {
  this.underline_style = param0;
  this.underline_color = param1;
  this.underline_variant_offset = param2;
  this.url_id = param3;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer8CellData(param0, param1, param2, param3, param4) {
  this.content = param0;
  this.fg = param1;
  this.bg = param2;
  this.extended = param3;
  this.combined_data = param4;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer13AttributeData(param0, param1, param2) {
  this.fg = param0;
  this.bg = param1;
  this.extended = param2;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer10BufferLine(param0, param1) {
  this.cells = param0;
  this.is_wrapped = param1;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer6Buffer(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.lines = param0;
  this.ydisp = param1;
  this.ybase = param2;
  this.y = param3;
  this.x = param4;
  this.scroll_bottom = param5;
  this.scroll_top = param6;
  this.cols = param7;
  this.rows = param8;
  this.has_scrollback_flag = param9;
  this.scrollback = param10;
}
function _M0TP511feihaoxiang5xterm3src6common6buffer9BufferSet(param0, param1, param2) {
  this.normal = param0;
  this.alt = param1;
  this.active_kind = param2;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP511feihaoxiang5xterm3src6common6parser15TransitionTable(param0) {
  this.table = param0;
}
function _M0TP511feihaoxiang5xterm3src6common6parser10OscHandler(param0, param1, param2) {
  this.start_cb = param0;
  this.put_cb = param1;
  this.end_cb = param2;
}
function _M0TPC13ref3RefGsE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGbE(param0) {
  this.val = param0;
}
function _M0TP511feihaoxiang5xterm3src6common6parser9OscParser(param0, param1, param2, param3, param4, param5) {
  this.handlers = param0;
  this.active = param1;
  this.next_id = param2;
  this.state = param3;
  this.ident = param4;
  this.fallback = param5;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP511feihaoxiang5xterm3src6common6parser15OscHandlerEntry(param0, param1) {
  this.id = param0;
  this.handler = param1;
}
function _M0TP511feihaoxiang5xterm3src6common6parser6Params(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.max_length = param0;
  this.max_subparams_length = param1;
  this.params = param2;
  this.sub_params = param3;
  this.sub_param_starts = param4;
  this.sub_param_ends = param5;
  this.length = param6;
  this.sub_params_length = param7;
  this.reject_digits = param8;
  this.reject_sub_digits = param9;
  this.digit_is_sub = param10;
}
function _M0TP511feihaoxiang5xterm3src6common6parser9DcsParser(param0, param1, param2, param3, param4) {
  this.handlers = param0;
  this.active = param1;
  this.next_id = param2;
  this.ident = param3;
  this.fallback = param4;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload9DcsParams(param0) {
  this._0 = param0;
}
_M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload9DcsParams.prototype.$tag = 0;
function _M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload7DcsData(param0) {
  this._0 = param0;
}
_M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload7DcsData.prototype.$tag = 1;
function _M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload10DcsSuccess(param0) {
  this._0 = param0;
}
_M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload10DcsSuccess.prototype.$tag = 2;
function _M0TP511feihaoxiang5xterm3src6common6parser9ApcParser(param0, param1, param2, param3, param4) {
  this.handlers = param0;
  this.active = param1;
  this.next_id = param2;
  this.ident = param3;
  this.fallback = param4;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRPB5ArrayGiEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGiEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGiEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGiEE4Some.prototype.$tag = 1;
function _M0TP511feihaoxiang5xterm3src6common6parser15EscHandlerEntry(param0, param1) {
  this.id = param0;
  this.handler = param1;
}
function _M0TP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16) {
  this.initial_state = param0;
  this.current_state = param1;
  this.preceding_join_state = param2;
  this.params = param3;
  this.collect = param4;
  this.transitions = param5;
  this.next_id = param6;
  this.print_handler = param7;
  this.execute_handlers = param8;
  this.csi_handlers = param9;
  this.esc_handlers = param10;
  this.osc_parser = param11;
  this.dcs_parser = param12;
  this.apc_parser = param13;
  this.execute_fallback = param14;
  this.csi_fallback = param15;
  this.esc_fallback = param16;
}
function _M0DTP511feihaoxiang5xterm3src6common6parser10ParamEntry5Param(param0) {
  this._0 = param0;
}
_M0DTP511feihaoxiang5xterm3src6common6parser10ParamEntry5Param.prototype.$tag = 0;
function _M0DTP511feihaoxiang5xterm3src6common6parser10ParamEntry9SubParams(param0) {
  this._0 = param0;
}
_M0DTP511feihaoxiang5xterm3src6common6parser10ParamEntry9SubParams.prototype.$tag = 1;
function _M0TPB9ArrayViewGUiWiEbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP511feihaoxiang5xterm3src6common6parser18FunctionIdentifier(param0, param1, param2) {
  this.prefix = param0;
  this.intermediates = param1;
  this.final_byte = param2;
}
function _M0TP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntry(param0, param1) {
  this.id = param0;
  this.handler = param1;
}
function _M0TP411feihaoxiang5xterm3src8terminal8Terminal(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18) {
  this.buffers = param0;
  this.parser = param1;
  this.current_attr = param2;
  this.insert_mode = param3;
  this.application_cursor_keys_mode = param4;
  this.application_keypad_mode = param5;
  this.bracketed_paste_mode = param6;
  this.mouse_tracking_mode = param7;
  this.origin_mode = param8;
  this.reverse_wraparound_mode = param9;
  this.send_focus_mode = param10;
  this.show_cursor = param11;
  this.synchronized_output_mode = param12;
  this.win32_input_mode = param13;
  this.wraparound_mode = param14;
  this.on_bell_emitter = param15;
  this.on_line_feed_emitter = param16;
  this.on_scroll_emitter = param17;
  this.on_title_change_emitter = param18;
}
function _M0TP411feihaoxiang5xterm3src8headless15TerminalOptions(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.cols = param0;
  this.rows = param1;
  this.scrollback = param2;
  this.allow_proposed_api = param3;
  this.font_size = param4;
  this.font_family = param5;
  this.line_height = param6;
  this.cursor_width = param7;
}
function _M0TP411feihaoxiang5xterm3src8headless8Terminal(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.core = param0;
  this.options = param1;
  this.on_binary_emitter = param2;
  this.on_cursor_move_emitter = param3;
  this.on_data_emitter = param4;
  this.on_render_emitter = param5;
  this.on_resize_emitter = param6;
  this.on_write_parsed_emitter = param7;
}
function _M0TP411feihaoxiang5xterm3src8headless15BufferNamespace(param0) {
  this.core = param0;
}
function _M0TP411feihaoxiang5xterm3src8headless11RenderEvent(param0, param1) {
  this.start = param0;
  this.end = param1;
}
function _M0TP411feihaoxiang5xterm3src8headless14BufferCellView(param0, param1) {
  this.line = param0;
  this.index = param1;
}
function _M0TP411feihaoxiang5xterm3src8headless14BufferLineView(param0) {
  this.line = param0;
}
function _M0TP411feihaoxiang5xterm3src8headless10BufferView(param0, param1) {
  this.buffer = param0;
  this.buffer_type = param1;
}
function _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(param0, param1, param2) {
  this.screen = param0;
  this.offset = param1;
  this.client = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.key_value = param0;
  this.code_value = param1;
  this.alt_pressed = param2;
  this.ctrl_pressed = param3;
  this.shift_pressed = param4;
  this.meta_pressed = param5;
  this.composing = param6;
  this.repeated = param7;
  this.location_value = param8;
}
function _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(param0, param1, param2) {
  this.scroll_offset = param0;
  this.scroll_width = param1;
  this.scroll_height = param2;
}
const _M0MP319moonbit_2dcommunity7rabbita2js5Value4null = () => null;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null = (n) => Object.is(n, null);
const _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined = (n) => Object.is(n, undefined);
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some.prototype.$tag = 1;
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url = (self) => { return self.location.href; };
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame = (self,f) => self.requestAnimationFrame(f);
const _M0FP319moonbit_2dcommunity7rabbita3dom6window = () => window;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__to__ui__event = (x) => x instanceof UIEvent ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element = (x) => x instanceof SVGElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom10get__style = (self) => self.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value = (x,v) => x.nodeValue = v;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling = (x) => x.nextSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling = (x) => x.previousSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node = (x) => x.parentNode;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child = (p,c) => p.appendChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child = (p,c) => p.removeChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before = (p,value,before) => p.insertBefore(value,before);
const _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node = (x, other) => x === other;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event = (e) => e instanceof MouseEvent ? e : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x = (e) => e.clientX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y = (e) => e.clientY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x = (e) => e.offsetX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y = (e) => e.offsetY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x = (e) => e.screenX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y = (e) => e.screenY;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event = (e) => e instanceof KeyboardEvent ? e : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key = (e) => e.key;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code = (e) => e.code;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key = (e) => e.altKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key = (e) => e.ctrlKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key = (e) => e.shiftKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key = (e) => e.metaKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing = (e) => e.isComposing;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat = (e) => e.repeat;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location = (e) => e.location;
const _M0MP319moonbit_2dcommunity7rabbita3dom17HTMLSelectElement5value = (self) => self.value;
const _M0FP319moonbit_2dcommunity7rabbita3dom29ffi__to__html__input__element = (x) => x instanceof HTMLInputElement ? x : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom16HTMLInputElement5value = (self) => self.value;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element = (x) => x instanceof HTMLElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style = (s) => s.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom12console__log = (x) => console.log(x);
const _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener = (target, type, listener) => target.addEventListener(type, listener);
const _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element = (x) => x.nodeType===1 ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__to__html__select__element = (x) => x instanceof HTMLSelectElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target = (self) => self.target;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target = (self) => self.currentTarget;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default = (self) => self.preventDefault();
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property = (self,prop) => delete self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top = (self) => self.scrollTop;
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left = (self) => self.scrollLeft;
const _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width = (self) => self.scrollWidth;
const _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height = (self) => self.scrollHeight;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property = (self, property, value) => self.setProperty(property, value);
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property = (self, property) => self.removeProperty(property);
const _M0FP319moonbit_2dcommunity7rabbita3dom8document = () => document;
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element = (doc,tag) => doc.createElement(tag);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node = (doc,str) => doc.createTextNode(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment = (doc,str) => doc.createComment(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment = (doc) => doc.createDocumentFragment();
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id = (doc,id) => doc.getElementById(id);
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime8Instance(param0, param1, param2, param3, param4, param5) {
  this.cell = param0;
  this.inode = param1;
  this.link = param2;
  this.old_childs = param3;
  this.new_childs = param4;
  this.id = param5;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime4Link(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(param0) {
  this.val = param0;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Slot(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Slot.prototype.$tag = 3;
function _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Slot(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Slot.prototype.$tag = 3;
function _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(param0, param1, param2, param3, param4) {
  this.slots = param0;
  this.handlers = param1;
  this.attrs = param2;
  this.props = param3;
  this.styles = param4;
}
function _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE3Map.prototype.$tag = 1;
function _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita3cmd5Hooks(param0, param1) {
  this.url_request = param0;
  this.url_changed = param1;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.live_map = param0;
  this.msg_queue = param1;
  this.after_render_queue = param2;
  this.drain_scheduled = param3;
  this.dirty_set = param4;
  this.paint_scheduled = param5;
  this.root = param6;
  this.captured_link_listener = param7;
  this.mount = param8;
  this.hooks = param9;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Flags(param0, param1, param2, param3) {
  this.id = param0;
  this.is_root = param1;
  this.dirty = param2;
  this.attach_count = param3;
}
function _M0TP319moonbit_2dcommunity7rabbita6common3Pos(param0, param1) {
  this.x = param0;
  this.y = param1;
}
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String.prototype.$tag = 3;
function _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP219moonbit_2dcommunity7rabbita3App(param0, param1) {
  this.sandbox = param0;
  this.init_cmd = param1;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP219moonbit_2dcommunity7rabbita9TypedCellGuuE(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.has_init = param0;
  this.model = param1;
  this.dispatch = param2;
  this.inbox = param3;
  this.update = param4;
  this.view = param5;
  this.subscriptions = param6;
  this.sub_map = param7;
  this.flags = param8;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TP411feihaoxiang5xterm3src7browser8Terminal(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.headless = param0;
  this.element_id = param1;
  this.screen_element_id = param2;
  this.input_element_id = param3;
  this.app = param4;
  this.focused = param5;
  this.disposed = param6;
  this.refresh_scheduled = param7;
}
function _M0TP411feihaoxiang5xterm3src7browser10RenderCell(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14) {
  this.x = param0;
  this.chars = param1;
  this.width = param2;
  this.fg = param3;
  this.bg = param4;
  this.fg_css = param5;
  this.bg_css = param6;
  this.bold = param7;
  this.dim = param8;
  this.italic = param9;
  this.underline = param10;
  this.blink = param11;
  this.invisible = param12;
  this.inverse = param13;
  this.is_cursor = param14;
}
function _M0TP411feihaoxiang5xterm3src7browser9RenderRow(param0, param1, param2, param3, param4, param5) {
  this.y = param0;
  this.buffer_index = param1;
  this.text = param2;
  this.is_wrapped = param3;
  this.dirty = param4;
  this.cells = param5;
}
function _M0TP411feihaoxiang5xterm3src7browser11RenderModel(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.cols = param0;
  this.rows = param1;
  this.cursor_x = param2;
  this.cursor_y = param3;
  this.viewport_y = param4;
  this.base_y = param5;
  this.focused = param6;
  this.rows_data = param7;
}
const _M0FP411feihaoxiang5xterm3src7browser22focus__terminal__input = (inputId) => { const input = document.getElementById(inputId); if (input) input.focus({ preventScroll: true }); };
const _M0FP411feihaoxiang5xterm3src7browser22bind__terminal__events = (elementId, inputId, onText, onFocus, onScroll) => { const root = document.getElementById(elementId); const input = document.getElementById(inputId); if (!root || !input) return; if (root.__moonbitXtermDispose) root.__moonbitXtermDispose(); const disposers = []; const add = (target, event, handler, options) => { target.addEventListener(event, handler, options); disposers.push(() => target.removeEventListener(event, handler, options)); }; const focusInput = () => input.focus({ preventScroll: true }); const send = (data) => { if (data) onText(data); }; add(root, 'mousedown', () => focusInput()); add(root, 'click', () => focusInput()); add(root, 'wheel', (event) => { event.preventDefault(); const lines = event.deltaY > 0 ? 3 : -3; onScroll(lines); }, { passive: false }); add(input, 'focus', () => onFocus(true)); add(input, 'blur', () => onFocus(false)); add(input, 'input', () => { const value = input.value; input.value = ''; send(value); }); add(input, 'paste', (event) => { event.preventDefault(); const text = event.clipboardData ? event.clipboardData.getData('text/plain') : ''; input.value = ''; send(text); }); add(input, 'keydown', (event) => { let data = null; switch (event.key) { case 'Enter': data = '\\r'; break; case 'Backspace': data = '\\x7f'; break; case 'Tab': data = '\\t'; break; case 'Escape': data = '\\x1b'; break; case 'ArrowUp': data = '\\x1b[A'; break; case 'ArrowDown': data = '\\x1b[B'; break; case 'ArrowRight': data = '\\x1b[C'; break; case 'ArrowLeft': data = '\\x1b[D'; break; case 'Home': data = '\\x1b[H'; break; case 'End': data = '\\x1b[F'; break; case 'Delete': data = '\\x1b[3~'; break; default: data = null; } if (data !== null) { event.preventDefault(); send(data); } }); root.__moonbitXtermDispose = () => { for (const dispose of disposers) dispose(); delete root.__moonbitXtermDispose; }; };
const _M0FP411feihaoxiang5xterm3src7browser26request__terminal__refresh = (callback) => requestAnimationFrame(() => callback());
const _M0FP411feihaoxiang5xterm3src7browser27set__terminal__focus__class = (elementId, focused) => { const root = document.getElementById(elementId); const terminal = root ? root.querySelector('.mb-xterm') : null; if (terminal) terminal.classList.toggle('mb-xterm-focused', focused); };
const _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler11run__effect, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__message, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14drain__message, method_3: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler5hooks };
const _M0FP0131moonbit_2dcommunity_2frabbita_2fTypedCell_5bUnit_2c_20Unit_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell = { method_0: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4initGuuE, method_1: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGuuE, method_2: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGuuE, method_3: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGuuE };
const _M0FP419moonbit_2dcommunity7rabbita8internal3key3key = undefined;
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch([]);
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP319moonbit_2dcommunity7rabbita6common17global__id__count = _M0MPC13ref3Ref3RefGiE(0);
function _M0FPC15abort5abortGRP411feihaoxiang5xterm3src6common8ListenerGsEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGiE(msg) {
  return $panic();
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = Math.imul(_M0FPB4rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0MPB13StringBuilder11new_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 56319);
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPB6Hasher7combineGRP319moonbit_2dcommunity7rabbita6common2IdE(self, value) {
  _M0IP319moonbit_2dcommunity7rabbita6common2IdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP319moonbit_2dcommunity7rabbita6common6InstIdE(self, value) {
  _M0IP319moonbit_2dcommunity7rabbita6common6InstIdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGiE(self, value) {
  _M0IPC13int3IntPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGsE(self, value) {
  _M0IPC16string6StringPB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita6common2IdE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
}
function _M0MPB6Hasher9avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function _M0MPB6Hasher8finalize(self) {
  return _M0MPB6Hasher9avalanche(self);
}
function _M0MPB6Hasher11new_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher3new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher11new_2einner(seed);
}
function _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common2IdE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGRP319moonbit_2dcommunity7rabbita6common2IdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common6InstIdE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGRP319moonbit_2dcommunity7rabbita6common6InstIdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGiE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGiE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGsE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGsE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start$2, end$2);
  } else {
    return $panic();
  }
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self;
  return _func();
}
function _M0MPB4Iter4nextGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self) {
  const _func = self;
  return _func();
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGcE(f) {
  return f;
}
function _M0MPB4Iter3newGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(f) {
  return f;
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(self) {
  return self.end - self.start | 0;
}
function _M0MPC15array9ArrayView6lengthGcE(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder11new_2einner(Math.imul(_M0MPC15array9ArrayView6lengthGcE(chars), 4) | 0);
  const _bind = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String24char__length__eq_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC15array5Array11new_2einnerGRP319moonbit_2dcommunity7rabbita6common2IdE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita6common2IdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  });
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(() => {
    if (i.val < _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MPC15array5Array4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  return _M0MPC15array9ArrayView4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, 0, self.length));
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, default_) {
  if (self.$tag === 0) {
    return default_;
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(self, default_) {
  if (self.$tag === 0) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  }
}
function _M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self === undefined) {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  }
}
function _M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  }
}
function _M0MPC15array5Array4makeGiE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3setGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGRP511feihaoxiang5xterm3src6common6buffer8CellDataE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGiWiEbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiWiEbE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiWiEbE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiWiEbE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10push__awayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiWiEbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiWiEbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiWiEbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common6InstIdPB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiWiEbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiWiEbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiWiEbE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiWiEbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiWiEbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiWiEbE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiWiEbE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiWiEbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common6InstIdPB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiWiEbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiWiEbE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGssE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGssE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, key, value) {
  _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common6InstIdE(key));
}
function _M0MPB3Map3setGiWiEbE(self, key, value) {
  _M0MPB3Map15set__with__hashGiWiEbE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common2IdE(key));
}
function _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, value) {
  _M0MPB3Map15set__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common6InstIdE(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiWiEbE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiWiEbE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiWiEbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGssE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common2IdE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiWiEbE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, cur);
    _tmp$2[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, cur);
    _tmp$2[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common6InstIdPB2Eq5equal(_entry.key, key)) {
        _M0MPB3Map13remove__entryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, _entry);
        _M0MPB3Map11shift__backGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(_entry.key, key)) {
        _M0MPB3Map13remove__entryGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, _entry);
        _M0MPB3Map11shift__backGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key) {
  _M0MPB3Map18remove__with__hashGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common6InstIdE(key));
}
function _M0MPB3Map6removeGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key) {
  _M0MPB3Map18remove__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common2IdE(key));
}
function _M0MPB3Map9is__emptyGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return self.size === 0;
}
function _M0MPB3Map4eachGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  let _tmp = self.head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      f(_key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPC15array10FixedArray12fill_2einnerGORPC13set5EntryGRP319moonbit_2dcommunity7rabbita6common2IdEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map4iterGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(self.head);
  return _M0MPB4Iter3newGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MPB3Map4iterGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self.head);
  return _M0MPB4Iter3newGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MPB3Map4iterGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(self.head);
  return _M0MPB4Iter3newGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MPB3Map5iter2GRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return _M0MPB3Map4iterGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self);
}
function _M0MPB3Map5iter2GRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  return _M0MPB3Map4iterGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self);
}
function _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self) {
  return _M0MPB3Map4iterGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self);
}
function _M0MPB3Map6valuesGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(self.head);
  return _M0MPB4Iter3newGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return _value;
    }
  });
}
function _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      break;
    } else {
      const _Some = x;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function _M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const _bind = self.capacity;
  const _bind$2 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$3 = self.size;
  const _bind$4 = self.capacity_mask;
  const _bind$5 = self.grow_at;
  const _bind$6 = undefined;
  const _bind$7 = self.tail;
  const other = new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, _bind, _bind$4, _bind$5, _bind$6, _bind$7);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  $bound_check(_tmp, _tmp$2);
  const _bind$8 = _tmp[_tmp$2];
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const entry = _tmp$3;
      const idx = _tmp$4;
      const next = _tmp$5;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_value = f(_key, _value);
      const new_entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_prev, next, _psl, _hash, _key, new_value);
      const _tmp$6 = other.entries;
      $bound_check(_tmp$6, idx);
      _tmp$6[idx] = new_entry;
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        $bound_check(_tmp$7, _prev);
        _tmp$3 = _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp$7[_prev]);
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0MPC15array5Array3mapGRP411feihaoxiang5xterm3src7browser9RenderRowRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP411feihaoxiang5xterm3src7browser10RenderCellRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB5Iter24nextGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  return _M0MPB4Iter4nextGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
}
function _M0MPB5Iter24nextGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return _M0MPB4Iter4nextGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
}
function _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self) {
  return _M0MPB4Iter4nextGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
}
function _M0MPB6Hasher15combine__string(self, value) {
  const _bind = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      _M0MPB6Hasher13combine__uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IPC16string6StringPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher15combine__string(hasher, self);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = _M0MPC16string10StringView6length(hd);
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        _tmp$2 = (size_hint$2 + _M0MPC16string10StringView6length(_M0IPC16string6StringPB12ToStringView16to__string__view(s)) | 0) + _M0MPC16string10StringView6length(separator) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder11new_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if (_M0MPC16string6String24char__length__eq_2einner(separator.str, 0, separator.start, separator.end)) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array5Array11unsafe__popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
    return v;
  }
}
function _M0MPC15array5Array6removeGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    _M0MPB7JSArray6splice(self, index, 1);
    return value;
  } else {
    return _M0FPC15abort5abortGRP411feihaoxiang5xterm3src6common8ListenerGsEE(`index out of bounds: the len is from 0 to ${_M0IPC13int3IntPB4Show10to__string(self.length)} but the index is ${_M0IPC13int3IntPB4Show10to__string(index)}`);
  }
}
function _M0MPC15array5Array4copyGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MPC15array5Array2atGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MPC15array5Array4eachGRP319moonbit_2dcommunity7rabbita3cmd3CmdE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      f(v);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array4eachGRP319moonbit_2dcommunity7rabbita3sub3SubE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      f(v);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array4eachGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      f(v);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const len = self.length;
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = self[(len - i | 0) - 1 | 0];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array10search__byGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      if (f(v)) {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(iter);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC13set21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13set3Set11new_2einnerGRP319moonbit_2dcommunity7rabbita6common2IdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPC13set21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPC13set3SetGRP319moonbit_2dcommunity7rabbita6common2IdE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPC13set3Set20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common2IdE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPC13set3Set10push__awayGRP319moonbit_2dcommunity7rabbita6common2IdE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set15add__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP319moonbit_2dcommunity7rabbita6common2IdE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp = 0;
    let _tmp$2 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp;
      const idx$2 = _tmp$2;
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, idx$2);
      const _bind = _tmp$3[idx$2];
      if (_bind === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(_curr_entry.key, key)) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGRP319moonbit_2dcommunity7rabbita6common2IdE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp = psl$2 + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind = self.tail;
  const _bind$2 = undefined;
  const entry = new _M0TPC13set5EntryGRP319moonbit_2dcommunity7rabbita6common2IdE(_bind, _bind$2, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP319moonbit_2dcommunity7rabbita6common2IdE(self, idx, entry);
}
function _M0MPC13set3Set4growGRP319moonbit_2dcommunity7rabbita6common2IdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPC13set21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      _M0MPC13set3Set15add__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdE(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPC13set3Set3addGRP319moonbit_2dcommunity7rabbita6common2IdE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP319moonbit_2dcommunity7rabbita6common2IdE(self, key, _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common2IdE(key));
}
function _M0MPC13set3Set13remove__entryGRP319moonbit_2dcommunity7rabbita6common2IdE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPC13set3Set11shift__backGRP319moonbit_2dcommunity7rabbita6common2IdE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPC13set3Set10set__entryGRP319moonbit_2dcommunity7rabbita6common2IdE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, cur);
    _tmp$2[cur] = undefined;
    return;
  }
}
function _M0MPC13set3Set6removeGRP319moonbit_2dcommunity7rabbita6common2IdE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP319moonbit_2dcommunity7rabbita6common2IdE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(_entry.key, key)) {
        _M0MPC13set3Set13remove__entryGRP319moonbit_2dcommunity7rabbita6common2IdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP319moonbit_2dcommunity7rabbita6common2IdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set5clearGRP319moonbit_2dcommunity7rabbita6common2IdE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPC13set5EntryGRP319moonbit_2dcommunity7rabbita6common2IdEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPC13set3Set9to__arrayGRP319moonbit_2dcommunity7rabbita6common2IdE(self) {
  const arr = _M0MPC15array5Array11new_2einnerGRP319moonbit_2dcommunity7rabbita6common2IdE(self.size);
  let _tmp = self.head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      break;
    } else {
      const _Some = x;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita6common2IdE(arr, _key);
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function _M0MPC13ref3Ref3RefGiE(value) {
  return new _M0TPC13ref3RefGiE(value);
}
function _M0FPC13ref3newGuE(x) {
  return new _M0TPC13ref3RefGuE(x);
}
function _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x) {
  return new _M0TPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x);
}
function _M0MPC15queue5Queue3newGRP319moonbit_2dcommunity7rabbita6common2IdE() {
  return new _M0TPC15queue5QueueGRP319moonbit_2dcommunity7rabbita6common2IdE(0, undefined, undefined);
}
function _M0MPC15queue5Queue3newGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE() {
  return new _M0TPC15queue5QueueGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(0, undefined, undefined);
}
function _M0MPC15queue5Queue3newGuE() {
  return new _M0TPC15queue5QueueGuE(0, undefined, undefined);
}
function _M0MPC15queue5Queue5clearGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function _M0MPC15queue5Queue5clearGRP319moonbit_2dcommunity7rabbita6common2IdE(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function _M0MPC15queue5Queue5clearGuE(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, x) {
  const cell = new _M0TPC15queue4ConsGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x, undefined);
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function _M0MPC15queue5Queue4pushGRP319moonbit_2dcommunity7rabbita6common2IdE(self, x) {
  const cell = new _M0TPC15queue4ConsGRP319moonbit_2dcommunity7rabbita6common2IdE(x, undefined);
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function _M0MPC15queue5Queue4pushGuE(self, x) {
  const cell = new _M0TPC15queue4ConsGuE(x, undefined);
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function _M0MPC15queue5Queue3popGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      _M0MPC15queue5Queue5clearGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function _M0MPC15queue5Queue3popGRP319moonbit_2dcommunity7rabbita6common2IdE(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      _M0MPC15queue5Queue5clearGRP319moonbit_2dcommunity7rabbita6common2IdE(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function _M0MPC15queue5Queue3popGuE(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return -1;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      _M0MPC15queue5Queue5clearGuE(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE() {
  return new _M0TP411feihaoxiang5xterm3src6common7EmitterGsE(false, 0, []);
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter3newGuE() {
  return new _M0TP411feihaoxiang5xterm3src6common7EmitterGuE(false, 0, []);
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter3newGiE() {
  return new _M0TP411feihaoxiang5xterm3src6common7EmitterGiE(false, 0, []);
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter5eventGsE(self, listener) {
  if (self.disposed) {
    return () => {
    };
  }
  const id = self.next_id;
  self.next_id = self.next_id + 1 | 0;
  _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self.listeners, new _M0TP411feihaoxiang5xterm3src6common8ListenerGsE(id, listener));
  return () => {
    let index;
    _L: {
      const _bind = _M0MPC15array5Array10search__byGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self.listeners, (entry) => entry.id === id);
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _index = _Some;
        index = _index;
        break _L;
      }
    }
    _M0MPC15array5Array6removeGRP411feihaoxiang5xterm3src6common8ListenerGsEE(self.listeners, index);
  };
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGuE(self, event) {
  if (self.disposed) {
    return undefined;
  }
  const _bind = self.listeners.length;
  switch (_bind) {
    case 0: {
      return;
    }
    case 1: {
      const _func = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.listeners, 0).handler;
      _func(event);
      return;
    }
    default: {
      const listeners = _M0MPC15array5Array4copyGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.listeners);
      const _bind$2 = listeners.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const listener = listeners[_];
          const _func$2 = listener.handler;
          _func$2(event);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGRP411feihaoxiang5xterm3src8headless11RenderEventE(self, event) {
  if (self.disposed) {
    return undefined;
  }
  const _bind = self.listeners.length;
  switch (_bind) {
    case 0: {
      return;
    }
    case 1: {
      const _func = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.listeners, 0).handler;
      _func(event);
      return;
    }
    default: {
      const listeners = _M0MPC15array5Array4copyGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.listeners);
      const _bind$2 = listeners.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const listener = listeners[_];
          const _func$2 = listener.handler;
          _func$2(event);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGiE(self, event) {
  if (self.disposed) {
    return undefined;
  }
  const _bind = self.listeners.length;
  switch (_bind) {
    case 0: {
      return;
    }
    case 1: {
      const _func = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.listeners, 0).handler;
      _func(event);
      return;
    }
    default: {
      const listeners = _M0MPC15array5Array4copyGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.listeners);
      const _bind$2 = listeners.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const listener = listeners[_];
          const _func$2 = listener.handler;
          _func$2(event);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList3newGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(max_length) {
  const array = [];
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < max_length) {
      _M0MPC15array5Array4pushGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(array, undefined);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP411feihaoxiang5xterm3src6common12CircularListGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(array, 0, 0, max_length, _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGiE());
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList13cyclic__indexGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index) {
  if (self.max_length === 0) {
    return 0;
  } else {
    const _tmp = self.max_length;
    if (_tmp === 0) {
      $panic();
    }
    return (self.start_index + index | 0) % _tmp | 0;
  }
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList3getGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index) {
  return _M0MPC15array5Array2atGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.array, _M0MP411feihaoxiang5xterm3src6common12CircularList13cyclic__indexGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index));
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList6lengthGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self) {
  return self.length;
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList3setGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index, value) {
  _M0MPC15array5Array3setGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.array, _M0MP411feihaoxiang5xterm3src6common12CircularList13cyclic__indexGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, index), value);
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList11set__lengthGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, new_length) {
  if (new_length > self.length) {
    let _tmp = self.length;
    while (true) {
      const i = _tmp;
      if (i < new_length) {
        _M0MP411feihaoxiang5xterm3src6common12CircularList3setGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, i, undefined);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  self.length = new_length;
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList4pushGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, value) {
  if (self.max_length === 0) {
    return undefined;
  }
  _M0MPC15array5Array3setGORP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.array, _M0MP411feihaoxiang5xterm3src6common12CircularList13cyclic__indexGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, self.length), value);
  if (self.length === self.max_length) {
    const _tmp = self.max_length;
    if (_tmp === 0) {
      $panic();
    }
    self.start_index = (self.start_index + 1 | 0) % _tmp | 0;
    _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGiE(self.on_trim_emitter, 1);
    return;
  } else {
    self.length = self.length + 1 | 0;
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, start, delete_count, items) {
  if (delete_count !== 0) {
    let _tmp = start;
    while (true) {
      const i = _tmp;
      if (i < (self.length - delete_count | 0)) {
        _M0MP411feihaoxiang5xterm3src6common12CircularList3setGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, i, _M0MP411feihaoxiang5xterm3src6common12CircularList3getGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, i + delete_count | 0));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    self.length = self.length - delete_count | 0;
    _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGRP411feihaoxiang5xterm3src8headless11RenderEventE(self.on_delete_emitter, new _M0TP411feihaoxiang5xterm3src6common11DeleteEvent(start, delete_count));
  }
  let _tmp = self.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= start) {
      _M0MP411feihaoxiang5xterm3src6common12CircularList3setGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, i + items.length | 0, _M0MP411feihaoxiang5xterm3src6common12CircularList3getGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, i));
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < items.length) {
      _M0MP411feihaoxiang5xterm3src6common12CircularList3setGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, start + i | 0, _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(items, i));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (items.length !== 0) {
    _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGRP411feihaoxiang5xterm3src8headless11RenderEventE(self.on_insert_emitter, new _M0TP411feihaoxiang5xterm3src6common11InsertEvent(start, items.length));
  }
  if ((self.length + items.length | 0) > self.max_length) {
    const count_to_trim = (self.length + items.length | 0) - self.max_length | 0;
    self.start_index = self.start_index + count_to_trim | 0;
    self.length = self.max_length;
    _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGiE(self.on_trim_emitter, count_to_trim);
    return;
  } else {
    self.length = self.length + items.length | 0;
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src6common12CircularList11trim__startGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self, count) {
  const count$2 = count > self.length ? self.length : count;
  self.start_index = self.start_index + count$2 | 0;
  self.length = self.length - count$2 | 0;
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGiE(self.on_trim_emitter, count$2);
}
function _M0IP511feihaoxiang5xterm3src6common6buffer10BufferKindPB2Eq5equal(_x_309, _x_310) {
  if (_x_309 === 0) {
    if (_x_310 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_310 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0IP511feihaoxiang5xterm3src6common6buffer14UnderlineStylePB2Eq5equal(_x_297, _x_298) {
  switch (_x_297) {
    case 0: {
      if (_x_298 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_298 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_298 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_298 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_298 === 4) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_298 === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CharData3new(attr, chars, width, code) {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer8CharData(attr, chars, width, code);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs3new() {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs(0, 0, 0, 0);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData3new() {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer8CellData(0, 0, 0, _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs3new(), "");
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData21set__from__char__data(self, value) {
  self.fg = value.attr;
  self.bg = 0;
  self.combined_data = "";
  const combined = new _M0TPB8MutLocalGbE(false);
  if (value.chars.length > 2) {
    combined.val = true;
  } else {
    if (value.chars.length === 2) {
      const _tmp = value.chars;
      $bound_check(_tmp, 0);
      const code = _tmp.charCodeAt(0);
      if (55296 <= code && code <= 56319) {
        const _tmp$2 = value.chars;
        $bound_check(_tmp$2, 1);
        const second = _tmp$2.charCodeAt(1);
        if (56320 <= second && second <= 57343) {
          self.content = (((Math.imul(code - 55296 | 0, 1024) | 0) + second | 0) - 56320 | 0) + 65536 | 0 | value.width << 22;
        } else {
          combined.val = true;
        }
      } else {
        combined.val = true;
      }
    } else {
      if (value.chars.length === 1) {
        const _tmp = value.chars;
        $bound_check(_tmp, 0);
        self.content = _tmp.charCodeAt(0) | value.width << 22;
      } else {
        self.content = value.width << 22;
      }
    }
  }
  if (combined.val) {
    self.combined_data = value.chars;
    self.content = 2097152 | value.width << 22;
    return;
  } else {
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData16from__char__data(value) {
  const cell = _M0MP511feihaoxiang5xterm3src6common6buffer8CellData3new();
  _M0MP511feihaoxiang5xterm3src6common6buffer8CellData21set__from__char__data(cell, value);
  return cell;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs5clone(self) {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs(self.underline_style, self.underline_color, self.underline_variant_offset, self.url_id);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData5clone(self) {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer8CellData(self.content, self.fg, self.bg, _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs5clone(self.extended), self.combined_data);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData12is__combined(self) {
  return (self.content & 2097152) !== 0;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData10get__width(self) {
  return self.content >> 22;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData10get__chars(self) {
  if (_M0MP511feihaoxiang5xterm3src6common6buffer8CellData12is__combined(self)) {
    return self.combined_data;
  } else {
    if ((self.content & 2097151) !== 0) {
      const _bind = [self.content & 2097151];
      return _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(_bind, 0, 1));
    } else {
      return "";
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs16underline__style(self) {
  return self.url_id !== 0 ? 5 : self.underline_style;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs9is__empty(self) {
  return _M0IP511feihaoxiang5xterm3src6common6buffer14UnderlineStylePB2Eq5equal(_M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs16underline__style(self), 0) && self.url_id === 0;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self) {
  return self.extended;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData3new() {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer13AttributeData(0, 0, _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs3new());
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self, value) {
  self.bg = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self, value) {
  self.fg = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__color(self, value) {
  self.underline_color = value & 67108863;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__style(self, value) {
  self.underline_style = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs31set__underline__variant__offset(self, value) {
  self.underline_variant_offset = value & 7;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs12set__url__id(self, value) {
  self.url_id = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs16underline__color(self) {
  return self.underline_color;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs26underline__variant__offset(self) {
  return self.underline_variant_offset;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs7url__id(self) {
  return self.url_id;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(self) {
  const attrs = _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData3new();
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(attrs, self.fg);
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(attrs, self.bg);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__style(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(attrs), _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs16underline__style(self.extended));
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__color(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(attrs), _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs16underline__color(self.extended));
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs31set__underline__variant__offset(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(attrs), _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs26underline__variant__offset(self.extended));
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs12set__url__id(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(attrs), _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs7url__id(self.extended));
  return attrs;
}
function _M0FP511feihaoxiang5xterm3src6common6buffer19default__attr__data() {
  return _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData3new();
}
function _M0FP511feihaoxiang5xterm3src6common6buffer21copy__extended__attrs(target, source) {
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__style(target, source.underline_style);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__color(target, _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs16underline__color(source));
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs31set__underline__variant__offset(target, _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs26underline__variant__offset(source));
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs12set__url__id(target, _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs7url__id(source));
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self) {
  return self.bg;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self) {
  return self.fg;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer15get__null__cell(_self, attr) {
  const cell = _M0MP511feihaoxiang5xterm3src6common6buffer8CellData16from__char__data(_M0MP511feihaoxiang5xterm3src6common6buffer8CharData3new(0, "", 1, 0));
  let attr$2;
  _L: {
    _L$2: {
      if (attr === undefined) {
      } else {
        const _Some = attr;
        const _attr = _Some;
        attr$2 = _attr;
        break _L$2;
      }
      break _L;
    }
    cell.fg = _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(attr$2);
    cell.bg = _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(attr$2);
    _M0FP511feihaoxiang5xterm3src6common6buffer21copy__extended__attrs(cell.extended, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(attr$2));
  }
  return cell;
}
function _M0FP511feihaoxiang5xterm3src6common6buffer19default__line__cell() {
  return _M0MP511feihaoxiang5xterm3src6common6buffer8CellData16from__char__data(_M0MP511feihaoxiang5xterm3src6common6buffer8CharData3new(0, "", 1, 0));
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine3new(cols, fill_cell_data, is_wrapped) {
  let fill;
  if (fill_cell_data === undefined) {
    fill = _M0FP511feihaoxiang5xterm3src6common6buffer19default__line__cell();
  } else {
    const _Some = fill_cell_data;
    const _cell = _Some;
    fill = _cell;
  }
  const cells = [];
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < cols) {
      _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(cells, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData5clone(fill));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP511feihaoxiang5xterm3src6common6buffer10BufferLine(cells, is_wrapped);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16get__blank__line(self, attr, is_wrapped) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine3new(self.cols, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer15get__null__cell(self, attr), is_wrapped);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer20fill__viewport__rows(self, fill_attr) {
  if (_M0MP411feihaoxiang5xterm3src6common12CircularList6lengthGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.lines) !== 0) {
    return undefined;
  }
  let attr;
  if (fill_attr === undefined) {
    attr = _M0FP511feihaoxiang5xterm3src6common6buffer19default__attr__data();
  } else {
    const _Some = fill_attr;
    const _attr = _Some;
    attr = _attr;
  }
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < self.rows) {
      _M0MP411feihaoxiang5xterm3src6common12CircularList4pushGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.lines, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16get__blank__line(self, attr, false));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP511feihaoxiang5xterm3src6common6buffer23correct__buffer__length(has_scrollback, rows, scrollback) {
  return has_scrollback ? rows + scrollback | 0 : rows;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer3new(has_scrollback, cols, rows, scrollback) {
  return new _M0TP511feihaoxiang5xterm3src6common6buffer6Buffer(_M0MP411feihaoxiang5xterm3src6common12CircularList3newGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0FP511feihaoxiang5xterm3src6common6buffer23correct__buffer__length(has_scrollback, rows, scrollback)), 0, 0, 0, 0, rows - 1 | 0, 0, cols, rows, has_scrollback, scrollback);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet3new(cols, rows, scrollback) {
  const normal = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer3new(true, cols, rows, scrollback);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer20fill__viewport__rows(normal, undefined);
  return new _M0TP511feihaoxiang5xterm3src6common6buffer9BufferSet(normal, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer3new(false, cols, rows, scrollback), 0);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet6normal(self) {
  return self.normal;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet3alt(self) {
  return self.alt;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet12active__kind(self) {
  return self.active_kind;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet6active(self) {
  const _bind = self.active_kind;
  if (_bind === 0) {
    return self.normal;
  } else {
    return self.alt;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5clear(self) {
  self.ydisp = 0;
  self.ybase = 0;
  self.y = 0;
  self.x = 0;
  _M0MP411feihaoxiang5xterm3src6common12CircularList11set__lengthGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.lines, 0);
  self.scroll_top = 0;
  self.scroll_bottom = self.rows - 1 | 0;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(self, value) {
  self.x = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__y(self, value) {
  self.y = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(self) {
  return self.x;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(self) {
  return self.y;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet24activate__normal__buffer(self) {
  if (_M0IP511feihaoxiang5xterm3src6common6buffer10BufferKindPB2Eq5equal(self.active_kind, 0)) {
    return undefined;
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(self.normal, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(self.alt));
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__y(self.normal, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(self.alt));
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5clear(self.alt);
  self.active_kind = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet21activate__alt__buffer(self, fill_attr) {
  if (_M0IP511feihaoxiang5xterm3src6common6buffer10BufferKindPB2Eq5equal(self.active_kind, 1)) {
    return undefined;
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer20fill__viewport__rows(self.alt, fill_attr);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(self.alt, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(self.normal));
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__y(self.alt, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(self.normal));
  self.active_kind = 1;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self) {
  return self.cells.length;
}
function _M0FP511feihaoxiang5xterm3src6common6buffer21codepoint__to__string(codepoint) {
  const _bind = [codepoint];
  return _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(_bind, 0, 1));
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine11is__wrapped(self) {
  return self.is_wrapped;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine16set__is__wrapped(self, value) {
  self.is_wrapped = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, index, cell) {
  _M0MPC15array5Array3setGRP511feihaoxiang5xterm3src6common6buffer8CellDataE(self.cells, index, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData5clone(cell));
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, index) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer8CellData10get__width(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, index));
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine7get__fg(self, index) {
  return _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, index).fg;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine7get__bg(self, index) {
  return _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, index).bg;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine12has__content(self, index) {
  return (_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, index).content & 4194303) !== 0;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine11get__string(self, index) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer8CellData10get__chars(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, index));
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, index, codepoint, width, attrs) {
  const cell = _M0MP511feihaoxiang5xterm3src6common6buffer8CellData3new();
  cell.content = codepoint | width << 22;
  cell.fg = _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(attrs);
  cell.bg = _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(attrs);
  _M0FP511feihaoxiang5xterm3src6common6buffer21copy__extended__attrs(cell.extended, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(attrs));
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, index, cell);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine24add__codepoint__to__cell(self, index, codepoint, width) {
  const cell = _M0MP511feihaoxiang5xterm3src6common6buffer8CellData5clone(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, index));
  const content = new _M0TPB8MutLocalGiE(cell.content);
  if ((content.val & 2097152) !== 0) {
    cell.combined_data = `${cell.combined_data}${_M0FP511feihaoxiang5xterm3src6common6buffer21codepoint__to__string(codepoint)}`;
  } else {
    if ((content.val & 2097151) !== 0) {
      cell.combined_data = `${_M0FP511feihaoxiang5xterm3src6common6buffer21codepoint__to__string(content.val & 2097151)}${_M0FP511feihaoxiang5xterm3src6common6buffer21codepoint__to__string(codepoint)}`;
      content.val = content.val & -2097152 | 2097152;
    } else {
      content.val = codepoint | 4194304;
    }
  }
  if (width !== 0) {
    content.val = content.val & -12582913 | width << 22;
  }
  cell.content = content.val;
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, index, cell);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine13insert__cells(self, pos, n, fill_cell_data) {
  const length = _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self);
  if (length === 0) {
    return undefined;
  }
  if (length === 0) {
    $panic();
  }
  const pos$2 = pos % length | 0;
  if (pos$2 !== 0 && _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, pos$2 - 1 | 0) === 2) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, pos$2 - 1 | 0, 0, 1, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(fill_cell_data));
  }
  if (n < (length - pos$2 | 0)) {
    let _tmp = ((length - pos$2 | 0) - n | 0) - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, (pos$2 + n | 0) + i | 0, _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, pos$2 + i | 0));
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < n) {
        _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, pos$2 + i | 0, fill_cell_data);
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    let _tmp = pos$2;
    while (true) {
      const i = _tmp;
      if (i < length) {
        _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, i, fill_cell_data);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (_M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, length - 1 | 0) === 2) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, length - 1 | 0, 0, 1, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(fill_cell_data));
    return;
  } else {
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine13delete__cells(self, pos, n, fill_cell_data) {
  const length = _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self);
  if (length === 0) {
    return undefined;
  }
  if (length === 0) {
    $panic();
  }
  const pos$2 = pos % length | 0;
  if (n < (length - pos$2 | 0)) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < ((length - pos$2 | 0) - n | 0)) {
        _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, pos$2 + i | 0, _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, (pos$2 + n | 0) + i | 0));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _tmp$2 = length - n | 0;
    while (true) {
      const i = _tmp$2;
      if (i < length) {
        _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, i, fill_cell_data);
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    let _tmp = pos$2;
    while (true) {
      const i = _tmp;
      if (i < length) {
        _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, i, fill_cell_data);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (pos$2 !== 0 && _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, pos$2 - 1 | 0) === 2) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, pos$2 - 1 | 0, 0, 1, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(fill_cell_data));
  }
  if (_M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, pos$2) === 0 && !_M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine12has__content(self, pos$2)) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, pos$2, 0, 1, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(fill_cell_data));
    return;
  } else {
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine14replace__cells(self, start, end, fill_cell_data) {
  const length = _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self);
  const start$2 = new _M0TPB8MutLocalGiE(start);
  if (start$2.val !== 0 && _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, start$2.val - 1 | 0) === 2) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, start$2.val - 1 | 0, 0, 1, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(fill_cell_data));
  }
  if (end < length && (end > 0 && _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self, end - 1 | 0) === 2)) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(self, end, 0, 1, _M0MP511feihaoxiang5xterm3src6common6buffer8CellData9as__attrs(fill_cell_data));
  }
  while (true) {
    if (start$2.val < end && start$2.val < length) {
      _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine9set__cell(self, start$2.val, fill_cell_data);
      start$2.val = start$2.val + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine20get__trimmed__length(self) {
  let _tmp = _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self) - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      if ((_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, i).content & 4194303) !== 0) {
        return i + _M0MP511feihaoxiang5xterm3src6common6buffer8CellData10get__width(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, i)) | 0;
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return 0;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine21translate__to__string(self, trim_right, start_col, end_col) {
  const start_col$2 = new _M0TPB8MutLocalGiE(start_col);
  const end_col$2 = new _M0TPB8MutLocalGiE(end_col);
  if (trim_right) {
    const trimmed = _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine20get__trimmed__length(self);
    if (trimmed < end_col$2.val) {
      end_col$2.val = trimmed;
    }
  }
  const result = new _M0TPB8MutLocalGsE("");
  while (true) {
    if (start_col$2.val < end_col$2.val) {
      const content = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, start_col$2.val).content;
      const codepoint = content & 2097151;
      const chars = (content & 2097152) !== 0 ? _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.cells, start_col$2.val).combined_data : codepoint !== 0 ? _M0FP511feihaoxiang5xterm3src6common6buffer21codepoint__to__string(codepoint) : " ";
      result.val = `${result.val}${chars}`;
      const width = content >> 22;
      start_col$2.val = start_col$2.val + (width === 0 ? 1 : width) | 0;
      continue;
    } else {
      break;
    }
  }
  return result.val;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(self) {
  return self.lines;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(self) {
  return self.cols;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(self) {
  return self.rows;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(self) {
  return self.ydisp;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer10set__ydisp(self, value) {
  self.ydisp = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(self) {
  return self.ybase;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer10set__ybase(self, value) {
  self.ybase = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(self) {
  return self.scroll_bottom;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer19set__scroll__bottom(self, value) {
  self.scroll_bottom = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer11scroll__top(self) {
  return self.scroll_top;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16set__scroll__top(self, value) {
  self.scroll_top = value;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(self) {
  return _M0MP411feihaoxiang5xterm3src6common12CircularList3getGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.lines, self.ybase + self.y | 0);
}
function _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer15scroll__up__one(self, attr) {
  _M0MP411feihaoxiang5xterm3src6common12CircularList4pushGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.lines, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16get__blank__line(self, attr, false));
  if (self.has_scrollback_flag) {
    const base = _M0MP411feihaoxiang5xterm3src6common12CircularList6lengthGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(self.lines) - self.rows | 0;
    self.ybase = base < 0 ? 0 : base;
    self.ydisp = self.ybase;
    return;
  } else {
    self.ybase = 0;
    self.ydisp = 0;
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData16from__color__rgb(value) {
  return (value._0 & 255) << 16 | (value._1 & 255) << 8 | value._2 & 255;
}
function _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData16update__extended(self) {
  if (_M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs9is__empty(self.extended)) {
    self.bg = self.bg & -268435457;
    return;
  } else {
    self.bg = self.bg | 268435456;
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3new(length) {
  return new _M0TP511feihaoxiang5xterm3src6common6parser15TransitionTable(_M0MPC15array5Array4makeGiE(length, 0));
}
function _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable12set__default(self, action, next) {
  const value = action << 8 | next;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < self.table.length) {
      _M0MPC15array5Array3setGiE(self.table, i, value);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(self, code, state, action, next) {
  _M0MPC15array5Array3setGiE(self.table, state << 8 | code, action << 8 | next);
}
function _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(self, start, end, state, action, next) {
  let _tmp = start;
  while (true) {
    const code = _tmp;
    if (code < end) {
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(self, code, state, action, next);
      _tmp = code + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(self, codes, state, action, next) {
  const _bind = codes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const code = codes[_];
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(self, code, state, action, next);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10transition(self, state, code) {
  return _M0MPC15array5Array2atGiE(self.table, state << 8 | code);
}
function _M0FP511feihaoxiang5xterm3src6common6parser18transition__action(transition) {
  return transition >> 8;
}
function _M0FP511feihaoxiang5xterm3src6common6parser17transition__state(transition) {
  return transition & 255;
}
function _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, state, action, next) {
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 0, 24, state, action, next);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 25, state, action, next);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 28, 32, state, action, next);
}
function _M0FP511feihaoxiang5xterm3src6common6parser24vt500__transition__table() {
  const table = _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3new(4257);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable12set__default(table, 1, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 127, 0, 2, 0);
  let _tmp = 0;
  while (true) {
    const state = _tmp;
    if (state < 17) {
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [24, 26, 153, 154], state, 3, 0);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 128, 144, state, 3, 0);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 144, 152, state, 3, 0);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 156, state, 0, 0);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 27, state, 11, 1);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 157, state, 4, 8);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [152, 158], state, 0, 7);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 159, state, 11, 14);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 155, state, 11, 3);
      _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 144, state, 11, 9);
      _tmp = state + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 0, 3, 0);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 1, 3, 1);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 1, 0, 1);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 8, 0, 8);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 3, 3, 3);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 3, 0, 3);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 4, 3, 4);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 4, 0, 4);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 6, 3, 6);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 5, 3, 5);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 5, 0, 5);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 2, 3, 2);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 2, 0, 2);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 93, 1, 4, 8);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 127, 8, 5, 8);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 8, 5, 8);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [156, 27, 24, 26, 7], 8, 6, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 28, 32, 8, 0, 8);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [88, 94], 1, 0, 7);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 127, 7, 0, 7);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 7, 0, 7);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 156, 7, 0, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 7, 0, 7);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 95, 1, 11, 14);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 14, 0, 14);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 14, 0, 14);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 14, 9, 15);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 127, 14, 15, 16);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 127, 15, 15, 16);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 15, 0, 15);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 15, 9, 15);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 15, 0, 15);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 127, 16, 16, 16);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 16, 0, 16);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 8, 14, 16, 16, 16);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 16, 0, 16);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [27, 156, 24, 26], 16, 17, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 91, 1, 11, 3);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 3, 7, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 60, 3, 8, 4);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [60, 61, 62, 63], 3, 9, 4);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 60, 4, 8, 4);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 4, 7, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [60, 61, 62, 63], 4, 0, 6);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 64, 6, 0, 6);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 6, 0, 6);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 6, 0, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 3, 9, 5);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 5, 9, 5);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 64, 5, 0, 6);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 5, 7, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 4, 9, 5);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 1, 9, 2);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 2, 9, 2);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 127, 2, 10, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 80, 1, 10, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 81, 88, 1, 10, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [89, 90, 92], 1, 10, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 96, 127, 1, 10, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 80, 1, 11, 9);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 9, 0, 9);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 9, 0, 9);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 9, 9, 12);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 60, 9, 8, 10);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [60, 61, 62, 63], 9, 9, 10);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 11, 0, 11);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 128, 11, 0, 11);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 10, 0, 10);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 10, 0, 10);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 60, 10, 8, 10);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [60, 61, 62, 63], 10, 0, 11);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 10, 9, 12);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 12, 0, 12);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 12, 0, 12);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 48, 12, 9, 12);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 48, 64, 12, 0, 11);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 12, 12, 13);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 10, 12, 13);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 64, 127, 9, 12, 13);
  _M0FP511feihaoxiang5xterm3src6common6parser16add__executables(table, 13, 13, 13);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10add__range(table, 32, 127, 13, 13, 13);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 127, 13, 0, 13);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable9add__many(table, [27, 156, 24, 26], 13, 14, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 160, 0, 2, 0);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 160, 8, 5, 8);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 160, 6, 0, 6);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 160, 11, 0, 11);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 160, 13, 13, 13);
  _M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable3add(table, 160, 16, 16, 16);
  return table;
}
function _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler15from__callbacks(start, put, end) {
  return new _M0TP511feihaoxiang5xterm3src6common6parser10OscHandler(start, put, end);
}
function _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3new(handler) {
  const data = new _M0TPC13ref3RefGsE("");
  const hit_limit = new _M0TPC13ref3RefGbE(false);
  return _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler15from__callbacks(() => {
    data.val = "";
    hit_limit.val = false;
  }, (chunk) => {
    if (hit_limit.val) {
      return undefined;
    }
    data.val = `${data.val}${chunk}`;
    if (data.val.length > 10000000) {
      data.val = "";
      hit_limit.val = true;
      return;
    } else {
      return;
    }
  }, (success) => {
    const result = new _M0TPB8MutLocalGbE(false);
    if (hit_limit.val) {
      result.val = false;
    } else {
      if (success) {
        result.val = handler(data.val);
      }
    }
    data.val = "";
    hit_limit.val = false;
    return result.val;
  });
}
function _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler5start(self) {
  const _func = self.start_cb;
  _func();
}
function _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3put(self, data) {
  const _func = self.put_cb;
  _func(data);
}
function _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3end(self, success) {
  const _func = self.end_cb;
  return _func(success);
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser3new() {
  const _bind = [];
  return new _M0TP511feihaoxiang5xterm3src6common6parser9OscParser(_M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(new _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEEE(_bind, 0, 0)), [], 0, 0, -1, (_discard_, _discard_$2, _discard_$3) => {
  });
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser17register__handler(self, ident, handler) {
  const id = self.next_id;
  self.next_id = self.next_id + 1 | 0;
  let list;
  const _bind = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self.handlers, ident);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _list = _Some._0;
    list = _list;
  } else {
    const list$2 = [];
    _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self.handlers, ident, list$2);
    list = list$2;
  }
  _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list, new _M0TP511feihaoxiang5xterm3src6common6parser15OscHandlerEntry(id, handler));
  return () => {
    let list$2;
    _L: {
      const _bind$2 = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self.handlers, ident);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _list = _Some._0;
        list$2 = _list;
        break _L;
      } else {
        return;
      }
    }
    let index;
    _L$2: {
      const _bind$2 = _M0MPC15array5Array10search__byGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list$2, (entry) => entry.id === id);
      if (_bind$2 === undefined) {
        return;
      } else {
        const _Some = _bind$2;
        const _index = _Some;
        index = _index;
        break _L$2;
      }
    }
    _M0MPC15array5Array6removeGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list$2, index);
  };
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser5reset(self) {
  if (self.state === 2) {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3end(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, false);
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  self.active = [];
  self.ident = -1;
  self.state = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser13start__active(self) {
  self.active = _M0MPC16option6Option10unwrap__orGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(_M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15OscHandlerEntryEE(self.handlers, self.ident), []);
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "START", undefined);
    return;
  } else {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler5start(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler);
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser5start(self) {
  _M0MP511feihaoxiang5xterm3src6common6parser9OscParser5reset(self);
  self.state = 1;
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser3put(self, data) {
  if (self.state === 3) {
    return undefined;
  }
  const start = new _M0TPB8MutLocalGiE(0);
  if (self.state === 1) {
    while (true) {
      if (start.val < data.length) {
        const _tmp = start.val;
        $bound_check(data, _tmp);
        const code = data.charCodeAt(_tmp);
        start.val = start.val + 1 | 0;
        if (code === 59) {
          self.state = 2;
          _M0MP511feihaoxiang5xterm3src6common6parser9OscParser13start__active(self);
          break;
        }
        if (code < 48 || code > 57) {
          self.state = 3;
          return undefined;
        }
        if (self.ident === -1) {
          self.ident = 0;
        }
        self.ident = ((Math.imul(self.ident, 10) | 0) + code | 0) - 48 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (self.state === 2 && (data.length - start.val | 0) > 0) {
    const chunk = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(data, start.val, undefined));
    if (self.active.length === 0) {
      const _func = self.fallback;
      _func(self.ident, "PUT", chunk);
      return;
    } else {
      let _tmp = self.active.length - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i >= 0) {
          _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3put(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, chunk);
          _tmp = i - 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  } else {
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser9OscParser3end(self, success) {
  if (self.state === 0) {
    return undefined;
  }
  if (self.state !== 3) {
    if (self.state === 1) {
      _M0MP511feihaoxiang5xterm3src6common6parser9OscParser13start__active(self);
    }
    if (self.active.length === 0) {
      const _func = self.fallback;
      _func(self.ident, "END", _M0IPC14bool4BoolPB4Show10to__string(success));
    } else {
      const handled = new _M0TPB8MutLocalGbE(false);
      let _tmp = self.active.length - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i >= 0) {
          const call_success = success && !handled.val;
          const result = _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3end(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, call_success);
          if (call_success && result) {
            handled.val = true;
          }
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  self.active = [];
  self.ident = -1;
  self.state = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params11new_2einner(max_length, max_subparams_length) {
  return max_subparams_length <= 256 ? new _M0TP511feihaoxiang5xterm3src6common6parser6Params(max_length, max_subparams_length, _M0MPC15array5Array4makeGiE(max_length, 0), _M0MPC15array5Array4makeGiE(max_subparams_length, 0), _M0MPC15array5Array4makeGiE(max_length, 0), _M0MPC15array5Array4makeGiE(max_length, 0), 0, 0, false, false, false) : _M0FPC15abort5abortGRP411feihaoxiang5xterm3src6common8ListenerGsEE("maxSubParamsLength must not be greater than 256");
}
function _M0FP511feihaoxiang5xterm3src6common6parser12clamp__param(value) {
  return value > 2147483647 ? 2147483647 : value;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params21add__param__unchecked(self, value) {
  self.digit_is_sub = false;
  if (self.length >= self.max_length) {
    self.reject_digits = true;
    return undefined;
  }
  const start = self.sub_params_length;
  _M0MPC15array5Array3setGiE(self.sub_param_starts, self.length, start);
  _M0MPC15array5Array3setGiE(self.sub_param_ends, self.length, start);
  _M0MPC15array5Array3setGiE(self.params, self.length, _M0FP511feihaoxiang5xterm3src6common6parser12clamp__param(value));
  self.length = self.length + 1 | 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params26add__sub__param__unchecked(self, value) {
  self.digit_is_sub = true;
  if (self.length === 0) {
    return undefined;
  }
  if (self.reject_digits || self.sub_params_length >= self.max_subparams_length) {
    self.reject_sub_digits = true;
    return undefined;
  }
  _M0MPC15array5Array3setGiE(self.sub_params, self.sub_params_length, _M0FP511feihaoxiang5xterm3src6common6parser12clamp__param(value));
  self.sub_params_length = self.sub_params_length + 1 | 0;
  const _array_1 = self.sub_param_ends;
  const _index_2 = self.length - 1 | 0;
  _M0MPC15array5Array3setGiE(_array_1, _index_2, _M0MPC15array5Array2atGiE(_array_1, _index_2) + 1 | 0);
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params11from__array(values) {
  const params = _M0MP511feihaoxiang5xterm3src6common6parser6Params11new_2einner(32, 32);
  if (values.length === 0) {
    return params;
  }
  const start = new _M0TPB8MutLocalGiE(0);
  const _bind = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(values, 0);
  if (_bind.$tag === 1) {
    start.val = 1;
  }
  let _tmp = start.val;
  while (true) {
    const i = _tmp;
    if (i < values.length) {
      let subs;
      _L: {
        _L$2: {
          let value;
          _L$3: {
            const _bind$2 = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(values, i);
            if (_bind$2.$tag === 0) {
              const _Param = _bind$2;
              const _value = _Param._0;
              value = _value;
              break _L$3;
            } else {
              const _SubParams = _bind$2;
              const _subs = _SubParams._0;
              subs = _subs;
              break _L$2;
            }
          }
          _M0MP511feihaoxiang5xterm3src6common6parser6Params21add__param__unchecked(params, value);
          break _L;
        }
        const _bind$2 = subs.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$2) {
            const value = subs[_];
            _M0MP511feihaoxiang5xterm3src6common6parser6Params26add__sub__param__unchecked(params, value);
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return params;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(self) {
  return self.length;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(self, index) {
  return _M0MPC15array5Array2atGiE(self.params, index);
}
function _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler4hook(self, params) {
  const _func = self.hook_cb;
  _func(params);
}
function _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler3put(self, data) {
  const _func = self.put_cb;
  _func(data);
}
function _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler6unhook(self, success) {
  const _func = self.unhook_cb;
  return _func(success);
}
function _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser3new() {
  const _bind = [];
  return new _M0TP511feihaoxiang5xterm3src6common6parser9DcsParser(_M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(new _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEEE(_bind, 0, 0)), [], 0, 0, (_discard_, _discard_$2, _discard_$3) => {
  });
}
function _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser5reset(self) {
  if (self.active.length > 0) {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler6unhook(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, false);
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  self.active = [];
  self.ident = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser4hook(self, ident, params) {
  _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser5reset(self);
  self.ident = ident;
  self.active = _M0MPC16option6Option10unwrap__orGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(_M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(self.handlers, ident), []);
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "HOOK", new _M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload9DcsParams(params));
    return;
  } else {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler4hook(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, params);
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser3put(self, data) {
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "PUT", new _M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload7DcsData(data));
    return;
  } else {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler3put(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, data);
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser6unhook(self, success) {
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "UNHOOK", new _M0DTP511feihaoxiang5xterm3src6common6parser18DcsFallbackPayload10DcsSuccess(success));
  } else {
    const handled = new _M0TPB8MutLocalGbE(false);
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const call_success = success && !handled.val;
        const result = _M0MP511feihaoxiang5xterm3src6common6parser10DcsHandler6unhook(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, call_success);
        if (call_success && result) {
          handled.val = true;
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  self.active = [];
  self.ident = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler5start(self) {
  const _func = self.start_cb;
  _func();
}
function _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler3put(self, data) {
  const _func = self.put_cb;
  _func(data);
}
function _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler3end(self, success) {
  const _func = self.end_cb;
  return _func(success);
}
function _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser3new() {
  const _bind = [];
  return new _M0TP511feihaoxiang5xterm3src6common6parser9ApcParser(_M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(new _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEEE(_bind, 0, 0)), [], 0, 0, (_discard_, _discard_$2, _discard_$3) => {
  });
}
function _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser5reset(self) {
  if (self.active.length > 0) {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler3end(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, false);
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  self.active = [];
  self.ident = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser5start(self, ident) {
  _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser5reset(self);
  self.ident = ident;
  self.active = _M0MPC16option6Option10unwrap__orGRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15DcsHandlerEntryEE(_M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15ApcHandlerEntryEE(self.handlers, ident), []);
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "START", undefined);
    return;
  } else {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler5start(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler);
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser3put(self, data) {
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "PUT", data);
    return;
  } else {
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler3put(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, data);
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser3end(self, success) {
  if (self.active.length === 0) {
    const _func = self.fallback;
    _func(self.ident, "END", _M0IPC14bool4BoolPB4Show10to__string(success));
  } else {
    const handled = new _M0TPB8MutLocalGbE(false);
    let _tmp = self.active.length - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const call_success = success && !handled.val;
        const result = _M0MP511feihaoxiang5xterm3src6common6parser10ApcHandler3end(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(self.active, i).handler, call_success);
        if (call_success && result) {
          handled.val = true;
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  self.active = [];
  self.ident = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params10reset__zdm(self) {
  self.length = 1;
  self.sub_params_length = 0;
  self.reject_digits = false;
  self.reject_sub_digits = false;
  self.digit_is_sub = false;
  _M0MPC15array5Array3setGiE(self.sub_param_starts, 0, 0);
  _M0MPC15array5Array3setGiE(self.sub_param_ends, 0, 0);
  _M0MPC15array5Array3setGiE(self.params, 0, 0);
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params10add__param(self, value) {
  if (value >= -1) {
    _M0MP511feihaoxiang5xterm3src6common6parser6Params21add__param__unchecked(self, value);
    return;
  } else {
    _M0FPC15abort5abortGuE("values lesser than -1 are not allowed");
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params15add__sub__param(self, value) {
  if (value >= -1) {
    _M0MP511feihaoxiang5xterm3src6common6parser6Params26add__sub__param__unchecked(self, value);
    return;
  } else {
    _M0FPC15abort5abortGuE("values lesser than -1 are not allowed");
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params16has__sub__params(self, index) {
  return (_M0MPC15array5Array2atGiE(self.sub_param_ends, index) - _M0MPC15array5Array2atGiE(self.sub_param_starts, index) | 0) > 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params16get__sub__params(self, index) {
  if (!_M0MP511feihaoxiang5xterm3src6common6parser6Params16has__sub__params(self, index)) {
    return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
  }
  const result = [];
  let _tmp = _M0MPC15array5Array2atGiE(self.sub_param_starts, index);
  while (true) {
    const i = _tmp;
    if (i < _M0MPC15array5Array2atGiE(self.sub_param_ends, index)) {
      _M0MPC15array5Array4pushGiE(result, _M0MPC15array5Array2atGiE(self.sub_params, i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(result);
}
function _M0MP511feihaoxiang5xterm3src6common6parser6Params10add__digit(self, value) {
  const length = self.digit_is_sub ? self.sub_params_length : self.length;
  if (self.reject_digits || (length === 0 || self.digit_is_sub && self.reject_sub_digits)) {
    return undefined;
  }
  const store = self.digit_is_sub ? self.sub_params : self.params;
  const current = _M0MPC15array5Array2atGiE(store, length - 1 | 0);
  const _tmp = length - 1 | 0;
  let _tmp$2;
  if (current !== -1) {
    if (10 === 0) {
      $panic();
    }
    if (current > ((2147483647 - value | 0) / 10 | 0)) {
      _tmp$2 = 2147483647;
    } else {
      _tmp$2 = (Math.imul(current, 10) | 0) + value | 0;
    }
  } else {
    _tmp$2 = value;
  }
  _M0MPC15array5Array3setGiE(store, _tmp, _tmp$2);
}
function _M0FP511feihaoxiang5xterm3src6common6parser20register__esc__entry(handlers, ident, id, handler) {
  let list;
  const _bind = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(handlers, ident);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _list = _Some._0;
    list = _list;
  } else {
    const list$2 = [];
    _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(handlers, ident, list$2);
    list = list$2;
  }
  _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list, new _M0TP511feihaoxiang5xterm3src6common6parser15EscHandlerEntry(id, handler));
  return () => {
    let list$2;
    _L: {
      const _bind$2 = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(handlers, ident);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _list = _Some._0;
        list$2 = _list;
        break _L;
      } else {
        return;
      }
    }
    let index;
    _L$2: {
      const _bind$2 = _M0MPC15array5Array10search__byGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list$2, (entry) => entry.id === id);
      if (_bind$2 === undefined) {
        return;
      } else {
        const _Some = _bind$2;
        const _index = _Some;
        index = _index;
        break _L$2;
      }
    }
    _M0MPC15array5Array6removeGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list$2, index);
  };
}
function _M0FP511feihaoxiang5xterm3src6common6parser17first__code__unit(value) {
  if (value.length === 0) {
    return 0;
  }
  $bound_check(value, 0);
  return value.charCodeAt(0);
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18identifier_2einner(_self, id, final_start, final_end) {
  const result = new _M0TPB8MutLocalGiE(0);
  let prefix;
  _L: {
    _L$2: {
      const _bind = id.prefix;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _prefix = _Some;
        prefix = _prefix;
        break _L$2;
      }
      break _L;
    }
    if (prefix.length <= 1) {
      result.val = _M0FP511feihaoxiang5xterm3src6common6parser17first__code__unit(prefix);
      if (result.val === 0 || result.val >= 60 && result.val <= 63) {
      } else {
        _M0FPC15abort5abortGuE("prefix must be in range 0x3c .. 0x3f");
      }
    } else {
      _M0FPC15abort5abortGuE("only one byte as prefix supported");
    }
  }
  let intermediates;
  _L$2: {
    _L$3: {
      const _bind = id.intermediates;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _intermediates = _Some;
        intermediates = _intermediates;
        break _L$3;
      }
      break _L$2;
    }
    if (intermediates.length <= 2) {
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < intermediates.length) {
          $bound_check(intermediates, i);
          const intermediate = intermediates.charCodeAt(i);
          if (intermediate >= 32 && intermediate <= 47) {
            result.val = result.val << 8 | intermediate;
          } else {
            _M0FPC15abort5abortGuE("intermediate must be in range 0x20 .. 0x2f");
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      _M0FPC15abort5abortGuE("only two bytes as intermediates are supported");
    }
  }
  if (id.final_byte.length === 1) {
    const _tmp = id.final_byte;
    $bound_check(_tmp, 0);
    const final_code = _tmp.charCodeAt(0);
    return final_code >= final_start && final_code <= final_end ? result.val << 8 | final_code : _M0FPC15abort5abortGiE("final out of range");
  } else {
    return _M0FPC15abort5abortGiE("final must be a single byte");
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__esc__handler(self, id, handler) {
  const ident = _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18identifier_2einner(self, id, 48, 126);
  const registration_id = self.next_id;
  self.next_id = self.next_id + 1 | 0;
  return _M0FP511feihaoxiang5xterm3src6common6parser20register__esc__entry(self.esc_handlers, ident, registration_id, handler);
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser11new_2einner(transitions) {
  const _tmp = _M0MP511feihaoxiang5xterm3src6common6parser6Params11from__array([new _M0DTP511feihaoxiang5xterm3src6common6parser10ParamEntry5Param(0)]);
  const _bind = [];
  const _tmp$2 = _M0MPB3Map11from__arrayGiWiEbE(new _M0TPB9ArrayViewGUiWiEbEE(_bind, 0, 0));
  const _bind$2 = [];
  const _tmp$3 = _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(new _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEEE(_bind$2, 0, 0));
  const _bind$3 = [];
  const parser = new _M0TP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser(0, 0, 0, _tmp, 0, transitions, 0, (_discard_) => {
  }, _tmp$2, _tmp$3, _M0MPB3Map11from__arrayGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(new _M0TPB9ArrayViewGUiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEEE(_bind$3, 0, 0)), _M0MP511feihaoxiang5xterm3src6common6parser9OscParser3new(), _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser3new(), _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser3new(), (_discard_) => {
  }, (_discard_, _discard_$2) => {
  }, (_discard_) => {
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__esc__handler(parser, new _M0TP511feihaoxiang5xterm3src6common6parser18FunctionIdentifier(undefined, undefined, "\\"), () => true);
  return parser;
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser3new(transitions$46$opt) {
  let transitions;
  if (transitions$46$opt === undefined) {
    transitions = _M0FP511feihaoxiang5xterm3src6common6parser24vt500__transition__table();
  } else {
    const _Some = transitions$46$opt;
    transitions = _Some;
  }
  return _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser11new_2einner(transitions);
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser19set__print__handler(self, handler) {
  self.print_handler = handler;
}
function _M0FP511feihaoxiang5xterm3src6common6parser20register__csi__entry(handlers, ident, id, handler) {
  let list;
  const _bind = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(handlers, ident);
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _list = _Some._0;
    list = _list;
  } else {
    const list$2 = [];
    _M0MPB3Map3setGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(handlers, ident, list$2);
    list = list$2;
  }
  _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list, new _M0TP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntry(id, handler));
  return () => {
    let list$2;
    _L: {
      const _bind$2 = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(handlers, ident);
      if (_bind$2.$tag === 1) {
        const _Some = _bind$2;
        const _list = _Some._0;
        list$2 = _list;
        break _L;
      } else {
        return;
      }
    }
    let index;
    _L$2: {
      const _bind$2 = _M0MPC15array5Array10search__byGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list$2, (entry) => entry.id === id);
      if (_bind$2 === undefined) {
        return;
      } else {
        const _Some = _bind$2;
        const _index = _Some;
        index = _index;
        break _L$2;
      }
    }
    _M0MPC15array5Array6removeGRP411feihaoxiang5xterm3src6common8ListenerGsEE(list$2, index);
  };
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(self, id, handler) {
  const ident = _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18identifier_2einner(self, id, 64, 126);
  const registration_id = self.next_id;
  self.next_id = self.next_id + 1 | 0;
  return _M0FP511feihaoxiang5xterm3src6common6parser20register__csi__entry(self.csi_handlers, ident, registration_id, handler);
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(self, flag, handler) {
  _M0MPB3Map3setGiWiEbE(self.execute_handlers, _M0FP511feihaoxiang5xterm3src6common6parser17first__code__unit(flag), handler);
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__osc__handler(self, ident, handler) {
  return _M0MP511feihaoxiang5xterm3src6common6parser9OscParser17register__handler(self.osc_parser, ident, handler);
}
function _M0FP511feihaoxiang5xterm3src6common6parser13is__printable(code) {
  return code >= 32 && (code <= 126 || code >= 160);
}
function _M0FP511feihaoxiang5xterm3src6common6parser22is__osc__put__continue(code) {
  return code >= 32 && !(code > 127 && code < 160);
}
function _M0FP511feihaoxiang5xterm3src6common6parser18is__dcs__put__stop(code) {
  return code === 24 || (code === 26 || (code === 27 || code > 127 && code < 160));
}
function _M0FP511feihaoxiang5xterm3src6common6parser22is__apc__put__continue(code) {
  return code >= 32 && code < 127 || (code >= 8 && code < 14 || code >= 160);
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18run__csi__handlers(self, ident) {
  let handlers;
  _L: {
    const _bind = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15CsiHandlerEntryEE(self.csi_handlers, ident);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _handlers = _Some._0;
      handlers = _handlers;
      break _L;
    } else {
      const _func = self.csi_fallback;
      _func(ident, self.params);
      return;
    }
  }
  const handled = new _M0TPB8MutLocalGbE(false);
  let _tmp = handlers.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _func = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(handlers, i).handler;
      if (_func(self.params)) {
        handled.val = true;
        break;
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!handled.val) {
    const _func = self.csi_fallback;
    _func(ident, self.params);
    return;
  } else {
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18run__esc__handlers(self, ident) {
  let handlers;
  _L: {
    const _bind = _M0MPB3Map3getGiRPB5ArrayGRP511feihaoxiang5xterm3src6common6parser15EscHandlerEntryEE(self.esc_handlers, ident);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _handlers = _Some._0;
      handlers = _handlers;
      break _L;
    } else {
      const _func = self.esc_fallback;
      _func(ident);
      return;
    }
  }
  const handled = new _M0TPB8MutLocalGbE(false);
  let _tmp = handlers.length - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _func = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(handlers, i).handler;
      if (_func()) {
        handled.val = true;
        break;
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!handled.val) {
    const _func = self.esc_fallback;
    _func(ident);
    return;
  } else {
    return;
  }
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser7execute(self, code) {
  let handler;
  _L: {
    _L$2: {
      const _bind = _M0MPB3Map3getGiWiEbE(self.execute_handlers, code);
      if (_bind === undefined) {
        const _func = self.execute_fallback;
        _func(code);
      } else {
        const _Some = _bind;
        const _handler = _Some;
        handler = _handler;
        break _L$2;
      }
      break _L;
    }
    handler(code);
  }
  self.preceding_join_state = 0;
}
function _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser5parse(self, data) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < data.length) {
      const _tmp = i.val;
      $bound_check(data, _tmp);
      const code = new _M0TPB8MutLocalGiE(data.charCodeAt(_tmp));
      if (code.val < 24 && self.current_state <= 6) {
        _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser7execute(self, code.val);
        i.val = i.val + 1 | 0;
        continue;
      }
      const lookup_code = code.val < 160 ? code.val : 160;
      const transition = new _M0TPB8MutLocalGiE(_M0MP511feihaoxiang5xterm3src6common6parser15TransitionTable10transition(self.transitions, self.current_state, lookup_code));
      const _bind = _M0FP511feihaoxiang5xterm3src6common6parser18transition__action(transition.val);
      switch (_bind) {
        case 2: {
          const start = i.val;
          i.val = i.val + 1 | 0;
          while (true) {
            let _tmp$2;
            if (i.val < data.length) {
              const _tmp$3 = i.val;
              $bound_check(data, _tmp$3);
              _tmp$2 = _M0FP511feihaoxiang5xterm3src6common6parser13is__printable(data.charCodeAt(_tmp$3));
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _func = self.print_handler;
          _func(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(data, start, i.val)));
          i.val = i.val - 1 | 0;
          break;
        }
        case 3: {
          _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser7execute(self, code.val);
          break;
        }
        case 0: {
          break;
        }
        case 1: {
          break;
        }
        case 7: {
          _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18run__csi__handlers(self, self.collect << 8 | code.val);
          self.preceding_join_state = 0;
          break;
        }
        case 8: {
          while (true) {
            const _bind$2 = code.val;
            switch (_bind$2) {
              case 59: {
                _M0MP511feihaoxiang5xterm3src6common6parser6Params10add__param(self.params, 0);
                break;
              }
              case 58: {
                _M0MP511feihaoxiang5xterm3src6common6parser6Params15add__sub__param(self.params, -1);
                break;
              }
              default: {
                _M0MP511feihaoxiang5xterm3src6common6parser6Params10add__digit(self.params, code.val - 48 | 0);
              }
            }
            if ((i.val + 1 | 0) >= data.length) {
              break;
            }
            const _tmp$2 = i.val + 1 | 0;
            $bound_check(data, _tmp$2);
            const next = data.charCodeAt(_tmp$2);
            if (!(next > 47 && next < 60)) {
              break;
            }
            i.val = i.val + 1 | 0;
            code.val = next;
            continue;
          }
          break;
        }
        case 9: {
          self.collect = self.collect << 8 | code.val;
          break;
        }
        case 10: {
          _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser18run__esc__handlers(self, self.collect << 8 | code.val);
          self.preceding_join_state = 0;
          break;
        }
        case 11: {
          _M0MP511feihaoxiang5xterm3src6common6parser6Params10reset__zdm(self.params);
          self.collect = 0;
          break;
        }
        case 12: {
          _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser4hook(self.dcs_parser, self.collect << 8 | code.val, self.params);
          break;
        }
        case 13: {
          const start$2 = i.val;
          i.val = i.val + 1 | 0;
          while (true) {
            let _tmp$2;
            if (i.val < data.length) {
              const _tmp$3 = i.val;
              $bound_check(data, _tmp$3);
              _tmp$2 = !_M0FP511feihaoxiang5xterm3src6common6parser18is__dcs__put__stop(data.charCodeAt(_tmp$3));
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser3put(self.dcs_parser, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(data, start$2, i.val)));
          i.val = i.val - 1 | 0;
          break;
        }
        case 14: {
          _M0MP511feihaoxiang5xterm3src6common6parser9DcsParser6unhook(self.dcs_parser, code.val !== 24 && code.val !== 26);
          if (code.val === 27) {
            transition.val = _M0FP511feihaoxiang5xterm3src6common6parser18transition__action(transition.val) << 8 | 1;
          }
          _M0MP511feihaoxiang5xterm3src6common6parser6Params10reset__zdm(self.params);
          self.collect = 0;
          self.preceding_join_state = 0;
          break;
        }
        case 4: {
          _M0MP511feihaoxiang5xterm3src6common6parser9OscParser5start(self.osc_parser);
          break;
        }
        case 5: {
          const start$3 = i.val;
          i.val = i.val + 1 | 0;
          while (true) {
            let _tmp$2;
            if (i.val < data.length) {
              const _tmp$3 = i.val;
              $bound_check(data, _tmp$3);
              _tmp$2 = _M0FP511feihaoxiang5xterm3src6common6parser22is__osc__put__continue(data.charCodeAt(_tmp$3));
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MP511feihaoxiang5xterm3src6common6parser9OscParser3put(self.osc_parser, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(data, start$3, i.val)));
          i.val = i.val - 1 | 0;
          break;
        }
        case 6: {
          _M0MP511feihaoxiang5xterm3src6common6parser9OscParser3end(self.osc_parser, code.val !== 24 && code.val !== 26);
          if (code.val === 27) {
            transition.val = _M0FP511feihaoxiang5xterm3src6common6parser18transition__action(transition.val) << 8 | 1;
          }
          _M0MP511feihaoxiang5xterm3src6common6parser6Params10reset__zdm(self.params);
          self.collect = 0;
          self.preceding_join_state = 0;
          break;
        }
        case 15: {
          _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser5start(self.apc_parser, self.collect << 8 | code.val);
          break;
        }
        case 16: {
          const start$4 = i.val;
          i.val = i.val + 1 | 0;
          while (true) {
            let _tmp$2;
            if (i.val < data.length) {
              const _tmp$3 = i.val;
              $bound_check(data, _tmp$3);
              _tmp$2 = _M0FP511feihaoxiang5xterm3src6common6parser22is__apc__put__continue(data.charCodeAt(_tmp$3));
            } else {
              _tmp$2 = false;
            }
            if (_tmp$2) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser3put(self.apc_parser, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(data, start$4, i.val)));
          i.val = i.val - 1 | 0;
          break;
        }
        case 17: {
          _M0MP511feihaoxiang5xterm3src6common6parser9ApcParser3end(self.apc_parser, code.val !== 24 && code.val !== 26);
          if (code.val === 27) {
            transition.val = _M0FP511feihaoxiang5xterm3src6common6parser18transition__action(transition.val) << 8 | 1;
          }
          _M0MP511feihaoxiang5xterm3src6common6parser6Params10reset__zdm(self.params);
          self.collect = 0;
          self.preceding_join_state = 0;
          break;
        }
      }
      self.current_state = _M0FP511feihaoxiang5xterm3src6common6parser17transition__state(transition.val);
      i.val = i.val + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP411feihaoxiang5xterm3src8terminal7csi__id(final_byte) {
  return new _M0TP511feihaoxiang5xterm3src6common6parser18FunctionIdentifier(undefined, undefined, final_byte);
}
function _M0FP411feihaoxiang5xterm3src8terminal21csi__id__with__prefix(prefix, final_byte) {
  return new _M0TP511feihaoxiang5xterm3src6common6parser18FunctionIdentifier(prefix, undefined, final_byte);
}
function _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, index, fallback) {
  if (index >= _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
    return fallback;
  }
  const value = _M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, index);
  return value <= 0 ? fallback : value;
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet6active(self.buffers);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal9backspace(self) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) > 0) {
    _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) - 1 | 0);
    return;
  } else {
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal4bell(self) {
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGuE(self.on_bell_emitter, undefined);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal16carriage__return(self) {
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self), 0);
}
function _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(value, mask) {
  return value & ((-mask | 0) - 1 | 0);
}
function _M0FP411feihaoxiang5xterm3src8terminal16underline__style(value) {
  switch (value) {
    case 2: {
      return 2;
    }
    case 3: {
      return 3;
    }
    case 4: {
      return 4;
    }
    case 5: {
      return 5;
    }
    default: {
      return 1;
    }
  }
}
function _M0FP411feihaoxiang5xterm3src8terminal5clamp(value, low, high) {
  return value < low ? low : value > high ? high : value;
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__bg__color(self, value) {
  const color_mask = 67108863;
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr), color_mask) | value);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__fg__color(self, value) {
  const color_mask = 67108863;
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr), color_mask) | value);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal17apply__sgr__color(self, params, index, foreground) {
  if ((index + 1 | 0) >= _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
    return index + 1 | 0;
  }
  const mode = _M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, index + 1 | 0);
  if (mode === 5 && (index + 2 | 0) < _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
    const value = 33554432 | _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, index + 2 | 0), 0, 255);
    if (foreground) {
      _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__fg__color(self, value);
    } else {
      _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__bg__color(self, value);
    }
    return index + 3 | 0;
  }
  if (mode === 2 && (index + 4 | 0) < _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
    const rgb = _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData16from__color__rgb({ _0: _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, index + 2 | 0), 0, 255), _1: _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, index + 3 | 0), 0, 255), _2: _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, index + 4 | 0), 0, 255) });
    if (foreground) {
      _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__fg__color(self, 50331648 | rgb);
    } else {
      _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__bg__color(self, 50331648 | rgb);
    }
    return index + 5 | 0;
  }
  return index + 1 | 0;
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal16clear__underline(self) {
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr), 268435456));
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__style(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self.current_attr), 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData16update__extended(self.current_attr);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal12reset__attrs(self) {
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__style(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self.current_attr), 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__color(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self.current_attr), 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs31set__underline__variant__offset(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self.current_attr), 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs12set__url__id(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self.current_attr), 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData16update__extended(self.current_attr);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__underline(self, style) {
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr) | 268435456);
  _M0MP511feihaoxiang5xterm3src6common6buffer13ExtendedAttrs21set__underline__style(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData8extended(self.current_attr), style);
  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData16update__extended(self.current_attr);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal16char__attributes(self, params) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
      const code = _M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, i.val);
      _L: {
        _L$2: {
          if (code === 0) {
            _M0MP411feihaoxiang5xterm3src8terminal8Terminal12reset__attrs(self);
          } else {
            if (code === 1) {
              _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr) | 134217728);
            } else {
              if (code === 2) {
                _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr) | 134217728);
              } else {
                if (code === 3) {
                  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr) | 67108864);
                } else {
                  if (code === 4) {
                    let style;
                    _L$3: {
                      _L$4: {
                        let subs;
                        _L$5: {
                          const _bind = _M0MP511feihaoxiang5xterm3src6common6parser6Params16get__sub__params(params, i.val);
                          if (_bind.$tag === 1) {
                            const _Some = _bind;
                            const _subs = _Some._0;
                            if (_subs.length > 0) {
                              subs = _subs;
                              break _L$5;
                            } else {
                              break _L$4;
                            }
                          } else {
                            break _L$4;
                          }
                        }
                        style = _M0FP411feihaoxiang5xterm3src8terminal16underline__style(_M0MPC15array5Array2atGiE(subs, 0));
                        break _L$3;
                      }
                      style = 1;
                    }
                    _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__underline(self, style);
                  } else {
                    if (code === 5) {
                      break _L$2;
                    } else {
                      if (code === 6) {
                        break _L$2;
                      } else {
                        if (code === 7) {
                          _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr) | 67108864);
                        } else {
                          if (code === 8) {
                            _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr) | 1073741824);
                          } else {
                            if (code === 21) {
                              _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__underline(self, 2);
                            } else {
                              if (code === 22) {
                                _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr), 134217728));
                                _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr), 134217728));
                              } else {
                                if (code === 23) {
                                  _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr), 67108864));
                                } else {
                                  if (code === 24) {
                                    _M0MP411feihaoxiang5xterm3src8terminal8Terminal16clear__underline(self);
                                  } else {
                                    if (code === 25) {
                                      _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr), 536870912));
                                    } else {
                                      if (code === 27) {
                                        _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr), 67108864));
                                      } else {
                                        if (code === 28) {
                                          _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr), 1073741824));
                                        } else {
                                          if (code >= 30 && code <= 37) {
                                            _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__fg__color(self, 16777216 | (code - 30 | 0));
                                          } else {
                                            if (code === 38) {
                                              i.val = _M0MP411feihaoxiang5xterm3src8terminal8Terminal17apply__sgr__color(self, params, i.val, true);
                                              continue;
                                            } else {
                                              if (code === 39) {
                                                _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__fg__color(self, 0);
                                              } else {
                                                if (code >= 40 && code <= 47) {
                                                  _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__bg__color(self, 16777216 | (code - 40 | 0));
                                                } else {
                                                  if (code === 48) {
                                                    i.val = _M0MP411feihaoxiang5xterm3src8terminal8Terminal17apply__sgr__color(self, params, i.val, false);
                                                    continue;
                                                  } else {
                                                    if (code === 49) {
                                                      _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__bg__color(self, 0);
                                                    } else {
                                                      if (code === 53) {
                                                        _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr) | 1073741824);
                                                      } else {
                                                        if (code === 55) {
                                                          _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__bg(self.current_attr, _M0FP411feihaoxiang5xterm3src8terminal11clear__bits(_M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2bg(self.current_attr), 1073741824));
                                                        } else {
                                                          if (code >= 90 && code <= 97) {
                                                            _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__fg__color(self, 16777216 | ((code - 90 | 0) + 8 | 0));
                                                          } else {
                                                            if (code >= 100 && code <= 107) {
                                                              _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__bg__color(self, 16777216 | ((code - 100 | 0) + 8 | 0));
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          break _L;
        }
        _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData7set__fg(self.current_attr, _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData2fg(self.current_attr) | 536870912);
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer15get__null__cell(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self), self.current_attr);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal13delete__chars(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) >= _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer)) {
    return undefined;
  }
  let line;
  _L: {
    const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _line = _Some;
      line = _line;
      break _L;
    }
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine13delete__cells(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), count, _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__line(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16get__blank__line(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self), self.current_attr, false);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal13delete__lines(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) < _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer11scroll__top(buffer) || _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) > _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer)) {
    return undefined;
  }
  const count$2 = count > ((_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) - _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) | 0) + 1 | 0) ? (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) - _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) | 0) + 1 | 0 : count;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < count$2) {
      const base = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer);
      _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) | 0, 1, []);
      _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) | 0, 0, [_M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__line(self)]);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, 0);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal12erase__chars(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  let line;
  _L: {
    const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _line = _Some;
      line = _line;
      break _L;
    }
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine14replace__cells(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + count | 0, _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal19line__at__active__y(self, y) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  return _M0MP411feihaoxiang5xterm3src6common12CircularList3getGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer) + y | 0);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__line__range(self, y, start, end) {
  let line;
  _L: {
    const _bind = _M0MP411feihaoxiang5xterm3src8terminal8Terminal19line__at__active__y(self, y);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _line = _Some;
      line = _line;
      break _L;
    }
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine14replace__cells(line, start, end, _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__in__display(self, mode) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  switch (mode) {
    case 1: {
      let _tmp = 0;
      while (true) {
        const y = _tmp;
        if (y < _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer)) {
          _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__line__range(self, y, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer));
          _tmp = y + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__line__range(self, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer), 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + 1 | 0);
      return;
    }
    case 2: {
      let _tmp$2 = 0;
      while (true) {
        const y = _tmp$2;
        if (y < _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer)) {
          _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__line__range(self, y, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer));
          _tmp$2 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case 3: {
      if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer) > 0) {
        _M0MP411feihaoxiang5xterm3src6common12CircularList11trim__startGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer));
        _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer10set__ybase(buffer, 0);
        _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer10set__ydisp(buffer, 0);
        return;
      } else {
        return;
      }
    }
    default: {
      _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__line__range(self, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer), _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer));
      let _tmp$3 = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) + 1 | 0;
      while (true) {
        const y = _tmp$3;
        if (y < _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer)) {
          _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__line__range(self, y, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer));
          _tmp$3 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal15erase__in__line(self, mode) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  let line;
  _L: {
    const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _line = _Some;
      line = _line;
      break _L;
    }
  }
  switch (mode) {
    case 1: {
      _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine14replace__cells(line, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + 1 | 0, _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
      return;
    }
    case 2: {
      _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine14replace__cells(line, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer), _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
      return;
    }
    default: {
      _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine14replace__cells(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer), _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
      return;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal13insert__chars(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) >= _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer)) {
    return undefined;
  }
  let line;
  _L: {
    const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _line = _Some;
      line = _line;
      break _L;
    }
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine13insert__cells(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), count, _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal13insert__lines(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) < _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer11scroll__top(buffer) || _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) > _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer)) {
    return undefined;
  }
  const count$2 = count > ((_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) - _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) | 0) + 1 | 0) ? (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) - _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) | 0) + 1 | 0 : count;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < count$2) {
      const base = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer);
      _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) | 0, 1, []);
      _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) | 0, 0, [_M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__line(self)]);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, 0);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal24is__full__scroll__region(self) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer11scroll__top(buffer) === 0 && _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) === (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer) - 1 | 0);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal10scroll__up(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < count) {
      const old_ydisp = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(buffer);
      if (_M0MP411feihaoxiang5xterm3src8terminal8Terminal24is__full__scroll__region(self)) {
        _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer15scroll__up__one(buffer, self.current_attr);
      } else {
        const base = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer);
        _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer11scroll__top(buffer) | 0, 1, []);
        _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) | 0, 0, [_M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__line(self)]);
      }
      if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(buffer) !== old_ydisp) {
        _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGiE(self.on_scroll_emitter, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(buffer));
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal19line__feed__wrapped(self, is_wrapped) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) === _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer)) {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10scroll__up(self, 1);
  } else {
    if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) < (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer) - 1 | 0)) {
      _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__y(buffer, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) + 1 | 0);
    }
  }
  let line;
  _L: {
    _L$2: {
      const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _line = _Some;
        line = _line;
        break _L$2;
      }
      break _L;
    }
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine16set__is__wrapped(line, is_wrapped);
  }
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGuE(self.on_line_feed_emitter, undefined);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal10line__feed(self) {
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal19line__feed__wrapped(self, false);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__x(self, x) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, _M0FP411feihaoxiang5xterm3src8terminal5clamp(x, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer) - 1 | 0));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__y(self, y) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__y(buffer, _M0FP411feihaoxiang5xterm3src8terminal5clamp(y, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer) - 1 | 0));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal11set__cursor(self, x, y) {
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__x(self, x);
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__y(self, y);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, dx, dy) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal11set__cursor(self, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + dx | 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(buffer) + dy | 0);
}
function _M0FP411feihaoxiang5xterm3src8terminal13is__combining(codepoint) {
  return codepoint >= 768 && codepoint <= 879 || (codepoint >= 6832 && codepoint <= 6911 || (codepoint >= 7616 && codepoint <= 7679 || (codepoint >= 8400 && codepoint <= 8447 || codepoint >= 65056 && codepoint <= 65071)));
}
function _M0FP411feihaoxiang5xterm3src8terminal8is__wide(codepoint) {
  return codepoint >= 4352 && codepoint <= 4447 || (codepoint >= 9001 && codepoint <= 9002 || (codepoint >= 11904 && codepoint <= 42191 || (codepoint >= 44032 && codepoint <= 55203 || (codepoint >= 63744 && codepoint <= 64255 || (codepoint >= 65040 && codepoint <= 65049 || (codepoint >= 65072 && codepoint <= 65135 || (codepoint >= 65280 && codepoint <= 65376 || codepoint >= 65504 && codepoint <= 65510)))))));
}
function _M0FP411feihaoxiang5xterm3src8terminal11char__width(codepoint) {
  return _M0FP411feihaoxiang5xterm3src8terminal13is__combining(codepoint) ? 0 : _M0FP411feihaoxiang5xterm3src8terminal8is__wide(codepoint) ? 2 : 1;
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal16print__codepoint(self, codepoint) {
  const width = _M0FP411feihaoxiang5xterm3src8terminal11char__width(codepoint);
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (width === 0) {
    let line;
    _L: {
      _L$2: {
        const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
        if (_bind === undefined) {
        } else {
          const _Some = _bind;
          const _line = _Some;
          if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) > 0) {
            line = _line;
            break _L$2;
          }
        }
        break _L;
      }
      _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine24add__codepoint__to__cell(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) - 1 | 0, codepoint, 0);
    }
    return undefined;
  }
  if (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) >= _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer) || (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + width | 0) > _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer)) {
    _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, 0);
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal19line__feed__wrapped(self, true);
  }
  let line;
  _L: {
    const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16line__at__cursor(buffer);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _line = _Some;
      line = _line;
      break _L;
    }
  }
  if (self.insert_mode) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine13insert__cells(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), width, _M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__cell(self));
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer), codepoint, width, self.current_attr);
  if (width === 2 && (_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + 1 | 0) < _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer)) {
    _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine26set__cell__from__codepoint(line, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + 1 | 0, 0, 0, self.current_attr);
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) + width | 0);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal5print(self, data) {
  const _it = _M0MPC16string6String4iter(data);
  while (true) {
    let char;
    _L: {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        return;
      } else {
        const _Some = _bind;
        const _char = _Some;
        char = _char;
        break _L;
      }
    }
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal16print__codepoint(self, char);
    continue;
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal12scroll__down(self, count) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < count) {
      const base = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer);
      _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer14scroll__bottom(buffer) | 0, 1, []);
      _M0MP411feihaoxiang5xterm3src6common12CircularList6spliceGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(buffer), base + _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer11scroll__top(buffer) | 0, 0, [_M0MP411feihaoxiang5xterm3src8terminal8Terminal11blank__line(self)]);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal9set__mode(self, params, enabled) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
      if (_M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, i) === 4) {
        self.insert_mode = enabled;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal18set__private__mode(self, params, enabled) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _M0MP511feihaoxiang5xterm3src6common6parser6Params6length(params)) {
      _L: {
        _L$2: {
          const _bind = _M0MP511feihaoxiang5xterm3src6common6parser6Params9param__at(params, i);
          switch (_bind) {
            case 1: {
              self.application_cursor_keys_mode = enabled;
              break;
            }
            case 6: {
              self.origin_mode = enabled;
              break;
            }
            case 7: {
              self.wraparound_mode = enabled;
              break;
            }
            case 9: {
              self.mouse_tracking_mode = enabled ? "x10" : "none";
              break;
            }
            case 25: {
              self.show_cursor = enabled;
              break;
            }
            case 45: {
              self.reverse_wraparound_mode = enabled;
              break;
            }
            case 47: {
              break _L$2;
            }
            case 1047: {
              break _L$2;
            }
            case 1049: {
              break _L$2;
            }
            case 66: {
              self.application_keypad_mode = enabled;
              break;
            }
            case 1000: {
              self.mouse_tracking_mode = enabled ? "vt200" : "none";
              break;
            }
            case 1002: {
              self.mouse_tracking_mode = enabled ? "drag" : "none";
              break;
            }
            case 1003: {
              self.mouse_tracking_mode = enabled ? "any" : "none";
              break;
            }
            case 1004: {
              self.send_focus_mode = enabled;
              break;
            }
            case 2004: {
              self.bracketed_paste_mode = enabled;
              break;
            }
            case 2026: {
              self.synchronized_output_mode = enabled;
              break;
            }
            case 9001: {
              self.win32_input_mode = enabled;
              break;
            }
          }
          break _L;
        }
        if (enabled) {
          _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet21activate__alt__buffer(self.buffers, self.current_attr);
        } else {
          _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet24activate__normal__buffer(self.buffers);
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal19set__scroll__region(self, params) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  const top = _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) - 1 | 0, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer) - 1 | 0);
  const bottom = _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 1, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer)) - 1 | 0, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(buffer) - 1 | 0);
  if (bottom <= top) {
    return undefined;
  }
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer16set__scroll__top(buffer, top);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer19set__scroll__bottom(buffer, bottom);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, 0);
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__y(buffer, 0);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal10set__title(self, title) {
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGRP411feihaoxiang5xterm3src8headless11RenderEventE(self.on_title_change_emitter, title);
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal3tab(self) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  if (8 === 0) {
    $panic();
  }
  const next = Math.imul((_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(buffer) / 8 | 0) + 1 | 0, 8) | 0;
  _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer6set__x(buffer, _M0FP411feihaoxiang5xterm3src8terminal5clamp(next, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(buffer) - 1 | 0));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal24install__input__handlers(self) {
  const parser = self.parser;
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser19set__print__handler(parser, (data) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal5print(self, data);
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\u0007", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal4bell(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\b", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal9backspace(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\t", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal3tab(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\n", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10line__feed(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\u000b", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10line__feed(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\f", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10line__feed(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\r", (_discard_) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal16carriage__return(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\u000e", (_discard_) => true);
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser21set__execute__handler(parser, "\u000f", (_discard_) => true);
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("@"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal13insert__chars(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("A"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, 0, -_M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) | 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("B"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, 0, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("C"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1), 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("D"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, -_M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) | 0, 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("E"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, 0, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal16carriage__return(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("F"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, 0, -_M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) | 0);
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal16carriage__return(self);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("G"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__x(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) - 1 | 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("H"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal11set__cursor(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 1, 1) - 1 | 0, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) - 1 | 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("J"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal18erase__in__display(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 0));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("K"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal15erase__in__line(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 0));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("L"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal13insert__lines(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("M"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal13delete__lines(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("P"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal13delete__chars(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("S"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10scroll__up(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("T"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12scroll__down(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("X"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12erase__chars(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("`"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__x(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) - 1 | 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("a"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1), 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("d"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal14set__cursor__y(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) - 1 | 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("e"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12move__cursor(self, 0, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("f"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal11set__cursor(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 1, 1) - 1 | 0, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1) - 1 | 0);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("h"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal9set__mode(self, params, true);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("l"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal9set__mode(self, params, false);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("m"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal16char__attributes(self, params);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("r"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal19set__scroll__region(self, params);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal7csi__id("^"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal12scroll__down(self, _M0FP411feihaoxiang5xterm3src8terminal9param__or(params, 0, 1));
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal21csi__id__with__prefix("?", "h"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal18set__private__mode(self, params, true);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__csi__handler(parser, _M0FP411feihaoxiang5xterm3src8terminal21csi__id__with__prefix("?", "l"), (params) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal18set__private__mode(self, params, false);
    return true;
  });
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__osc__handler(parser, 0, _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3new((data) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10set__title(self, data);
    return true;
  }));
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__osc__handler(parser, 1, _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3new((data) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10set__title(self, data);
    return true;
  }));
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser22register__osc__handler(parser, 2, _M0MP511feihaoxiang5xterm3src6common6parser10OscHandler3new((data) => {
    _M0MP411feihaoxiang5xterm3src8terminal8Terminal10set__title(self, data);
    return true;
  }));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal3new(cols, rows, scrollback) {
  const terminal = new _M0TP411feihaoxiang5xterm3src8terminal8Terminal(_M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet3new(cols, rows, scrollback), _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser3new(undefined), _M0MP511feihaoxiang5xterm3src6common6buffer13AttributeData3new(), false, false, false, false, "none", false, false, false, true, false, false, true, _M0MP411feihaoxiang5xterm3src6common7Emitter3newGuE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGuE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGiE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE());
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal24install__input__handlers(terminal);
  return terminal;
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal7buffers(self) {
  return self.buffers;
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__x(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__y(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal4cols(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4cols(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal4rows(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer4rows(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self));
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal13scroll__lines(self, amount) {
  const buffer = _M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self);
  const next = _M0FP411feihaoxiang5xterm3src8terminal5clamp(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(buffer) + amount | 0, 0, _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(buffer));
  if (next !== _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(buffer)) {
    _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer10set__ydisp(buffer, next);
    _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGiE(self.on_scroll_emitter, next);
    return;
  } else {
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src8terminal8Terminal5write(self, data) {
  _M0MP511feihaoxiang5xterm3src6common6parser20EscapeSequenceParser5parse(self.parser, data);
}
function _M0MP411feihaoxiang5xterm3src8headless15TerminalOptions11new_2einner(cols, rows, scrollback, allow_proposed_api, font_size, font_family, line_height, cursor_width) {
  return new _M0TP411feihaoxiang5xterm3src8headless15TerminalOptions(cols < 1 ? 1 : cols, rows < 1 ? 1 : rows, scrollback < 0 ? 0 : scrollback, allow_proposed_api, font_size, font_family, line_height, cursor_width);
}
function _M0MP411feihaoxiang5xterm3src8headless15TerminalOptions3new(cols$46$opt, rows$46$opt, scrollback$46$opt, allow_proposed_api$46$opt, font_size$46$opt, font_family$46$opt, line_height$46$opt, cursor_width$46$opt) {
  let cols;
  if (cols$46$opt === undefined) {
    cols = 80;
  } else {
    const _Some = cols$46$opt;
    cols = _Some;
  }
  let rows;
  if (rows$46$opt === undefined) {
    rows = 24;
  } else {
    const _Some = rows$46$opt;
    rows = _Some;
  }
  let scrollback;
  if (scrollback$46$opt === undefined) {
    scrollback = 1000;
  } else {
    const _Some = scrollback$46$opt;
    scrollback = _Some;
  }
  const allow_proposed_api = allow_proposed_api$46$opt === -1 ? false : allow_proposed_api$46$opt;
  let font_size;
  if (font_size$46$opt === undefined) {
    font_size = 15;
  } else {
    const _Some = font_size$46$opt;
    font_size = _Some;
  }
  let font_family;
  if (font_family$46$opt === undefined) {
    font_family = "monospace";
  } else {
    const _Some = font_family$46$opt;
    font_family = _Some;
  }
  let line_height;
  if (line_height$46$opt === undefined) {
    line_height = 1;
  } else {
    const _Some = line_height$46$opt;
    line_height = _Some;
  }
  let cursor_width;
  if (cursor_width$46$opt === undefined) {
    cursor_width = 1;
  } else {
    const _Some = cursor_width$46$opt;
    cursor_width = _Some;
  }
  return _M0MP411feihaoxiang5xterm3src8headless15TerminalOptions11new_2einner(cols, rows, scrollback, allow_proposed_api, font_size, font_family, line_height, cursor_width);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal11new_2einner(options) {
  const core = _M0MP411feihaoxiang5xterm3src8terminal8Terminal3new(options.cols, options.rows, options.scrollback);
  return new _M0TP411feihaoxiang5xterm3src8headless8Terminal(core, options, _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGuE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGsE(), _M0MP411feihaoxiang5xterm3src6common7Emitter3newGuE());
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal4cols(self) {
  return _M0MP411feihaoxiang5xterm3src8terminal8Terminal4cols(self.core);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal4rows(self) {
  return _M0MP411feihaoxiang5xterm3src8terminal8Terminal4rows(self.core);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal6buffer(self) {
  return new _M0TP411feihaoxiang5xterm3src8headless15BufferNamespace(self.core);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal8on__data(self, listener) {
  return _M0MP411feihaoxiang5xterm3src6common7Emitter5eventGsE(self.on_data_emitter, listener);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal12after__write(self, before_x, before_y, before_ydisp, callback) {
  if (_M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__x(self.core) !== before_x || _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__y(self.core) !== before_y) {
    _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGuE(self.on_cursor_move_emitter, undefined);
  }
  const after_y = _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__y(self.core);
  const start = before_y < after_y ? before_y : after_y;
  const end = before_ydisp !== _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self.core)) ? _M0MP411feihaoxiang5xterm3src8headless8Terminal4rows(self) - 1 | 0 : before_y > after_y ? before_y : after_y;
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGRP411feihaoxiang5xterm3src8headless11RenderEventE(self.on_render_emitter, new _M0TP411feihaoxiang5xterm3src8headless11RenderEvent(start, end));
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGuE(self.on_write_parsed_emitter, undefined);
  callback();
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal13write_2einner(self, data, callback) {
  const before_x = _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__x(self.core);
  const before_y = _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__y(self.core);
  const before_ydisp = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self.core));
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal5write(self.core, data);
  _M0MP411feihaoxiang5xterm3src8headless8Terminal12after__write(self, before_x, before_y, before_ydisp, callback);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal15writeln_2einner(self, data, callback) {
  const before_x = _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__x(self.core);
  const before_y = _M0MP411feihaoxiang5xterm3src8terminal8Terminal9cursor__y(self.core);
  const before_ydisp = _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(_M0MP411feihaoxiang5xterm3src8terminal8Terminal6buffer(self.core));
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal5write(self.core, data);
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal5write(self.core, "\r\n");
  _M0MP411feihaoxiang5xterm3src8headless8Terminal12after__write(self, before_x, before_y, before_ydisp, callback);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal13input_2einner(self, data, was_user_input) {
  _M0MP411feihaoxiang5xterm3src6common7Emitter4fireGRP411feihaoxiang5xterm3src8headless11RenderEventE(self.on_data_emitter, data);
}
function _M0MP411feihaoxiang5xterm3src8headless8Terminal13scroll__lines(self, amount) {
  _M0MP411feihaoxiang5xterm3src8terminal8Terminal13scroll__lines(self.core, amount);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferCellView10get__chars(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine11get__string(self.line, self.index);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferCellView10get__width(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine10get__width(self.line, self.index);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferCellView7get__fg(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine7get__fg(self.line, self.index);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferCellView7get__bg(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine7get__bg(self.line, self.index);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferLineView11is__wrapped(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine11is__wrapped(self.line);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferLineView29translate__to__string_2einner(self, trim_right, start_col, end_col) {
  const end_col$2 = end_col < 0 ? _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self.line) : end_col;
  return _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine21translate__to__string(self.line, trim_right, start_col, end_col$2);
}
function _M0MP411feihaoxiang5xterm3src8headless14BufferLineView9get__cell(self, index) {
  return index < 0 || index >= _M0MP511feihaoxiang5xterm3src6common6buffer10BufferLine6length(self.line) ? undefined : new _M0TP411feihaoxiang5xterm3src8headless14BufferCellView(self.line, index);
}
function _M0MP411feihaoxiang5xterm3src8headless10BufferView9cursor__x(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1x(self.buffer);
}
function _M0MP411feihaoxiang5xterm3src8headless10BufferView9cursor__y(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer1y(self.buffer);
}
function _M0MP411feihaoxiang5xterm3src8headless10BufferView11viewport__y(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ydisp(self.buffer);
}
function _M0MP411feihaoxiang5xterm3src8headless10BufferView7base__y(self) {
  return _M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5ybase(self.buffer);
}
function _M0MP411feihaoxiang5xterm3src8headless10BufferView9get__line(self, index) {
  if (index < 0 || index >= _M0MP411feihaoxiang5xterm3src6common12CircularList6lengthGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(self.buffer))) {
    return undefined;
  } else {
    let line;
    _L: {
      const _bind = _M0MP411feihaoxiang5xterm3src6common12CircularList3getGRP511feihaoxiang5xterm3src6common6buffer10BufferLineE(_M0MP511feihaoxiang5xterm3src6common6buffer6Buffer5lines(self.buffer), index);
      if (_bind === undefined) {
        return undefined;
      } else {
        const _Some = _bind;
        const _line = _Some;
        line = _line;
        break _L;
      }
    }
    return new _M0TP411feihaoxiang5xterm3src8headless14BufferLineView(line);
  }
}
function _M0MP411feihaoxiang5xterm3src8headless15BufferNamespace6active(self) {
  const _bind = _M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet12active__kind(_M0MP411feihaoxiang5xterm3src8terminal8Terminal7buffers(self.core));
  if (_bind === 0) {
    return new _M0TP411feihaoxiang5xterm3src8headless10BufferView(_M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet6normal(_M0MP411feihaoxiang5xterm3src8terminal8Terminal7buffers(self.core)), 0);
  } else {
    return new _M0TP411feihaoxiang5xterm3src8headless10BufferView(_M0MP511feihaoxiang5xterm3src6common6buffer9BufferSet3alt(_M0MP411feihaoxiang5xterm3src8terminal8Terminal7buffers(self.core)), 1);
  }
}
function _M0IP319moonbit_2dcommunity7rabbita6common6InstIdPB2Eq5equal(_x_54, _x_55) {
  return _x_54 === _x_55;
}
function _M0IP319moonbit_2dcommunity7rabbita6common6InstIdPB4Hash13hash__combine(_x_50, _x_51) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_50, _x_51);
}
function _M0IP319moonbit_2dcommunity7rabbita6common2IdPB2Eq5equal(_x_46, _x_47) {
  return _x_46 === _x_47;
}
function _M0IP319moonbit_2dcommunity7rabbita6common2IdPB4Hash13hash__combine(_x_42, _x_43) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_42, _x_43);
}
function _M0FP319moonbit_2dcommunity7rabbita6common8next__id() {
  const id = _M0FP319moonbit_2dcommunity7rabbita6common17global__id__count.val;
  _M0FP319moonbit_2dcommunity7rabbita6common17global__id__count.val = _M0FP319moonbit_2dcommunity7rabbita6common17global__id__count.val + 1 | 0;
  return id;
}
function _M0MP319moonbit_2dcommunity7rabbita6common2Id3new(_discard_) {
  return _M0FP319moonbit_2dcommunity7rabbita6common8next__id();
}
function _M0MP319moonbit_2dcommunity7rabbita6common6InstId3new(_discard_) {
  return _M0FP319moonbit_2dcommunity7rabbita6common8next__id();
}
function _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(screen, offset, client) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(screen, offset, client);
}
function _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location);
}
function _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(offset, width, height) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(offset, width, height);
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self)) {
    _M0FPC15abort5abortGuE("Cannot unwrap an undefined value");
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional10to__optionGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self) ? undefined : _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) {
    _M0FPC15abort5abortGuE("Cannot unwrap a null value");
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return !_M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self) ? new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) : _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self, cmd) {
  const go = (cmd$2) => {
    let id;
    let send_message;
    _L: {
      let k;
      let f;
      _L$2: {
        let xs;
        _L$3: {
          switch (cmd$2.$tag) {
            case 0: {
              const _Batch = cmd$2;
              const _xs = _Batch._0;
              xs = _xs;
              break _L$3;
            }
            case 1: {
              const _Effect = cmd$2;
              const _k = _Effect._0;
              const _f = _Effect._1;
              k = _k;
              f = _f;
              break _L$2;
            }
            default: {
              const _Message = cmd$2;
              const _id = _Message._0;
              const _send_message = _Message._1;
              id = _id;
              send_message = _send_message;
              break _L;
            }
          }
        }
        _M0MPC15array5Array4eachGRP319moonbit_2dcommunity7rabbita3cmd3CmdE(xs, (x) => {
          go(x);
        });
        return;
      }
      _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler11run__effect(self, k, f);
      return;
    }
    _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__message(self, id, send_message);
  };
  go(cmd);
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14drain__message(self);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16make__dispatcherGuE(_discard_, id, inbox) {
  return (msg) => new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message(id, () => {
    _M0MPC15queue5Queue4pushGuE(inbox, msg);
  });
}
function _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(a) {
  return a;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom10get__style(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, v) {
  _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), v);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, other) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), other);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s));
}
function _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE(exception) {
  _M0FP319moonbit_2dcommunity7rabbita3dom12console__log(exception);
  return $panic();
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, type_, callback) {
  _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), type_, callback);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget24to__html__input__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom29ffi__to__html__input__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget25to__html__select__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__to__html__select__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent13to__ui__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__to__ui__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), attr, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr) {
  _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), attr);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), prop, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16remove__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, html) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), html);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function _M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(_x_35, _x_36) {
  let _x0_43;
  let _y0_44;
  _L: {
    let _x0_41;
    let _y0_42;
    _L$2: {
      let _x0_39;
      let _y0_40;
      _L$3: {
        let _x0_37;
        let _y0_38;
        _L$4: {
          switch (_x_35.$tag) {
            case 0: {
              const _Boolean = _x_35;
              const _$42$x0_37 = _Boolean._0;
              if (_x_36.$tag === 0) {
                const _Boolean$2 = _x_36;
                const _$42$y0_38 = _Boolean$2._0;
                _x0_37 = _$42$x0_37;
                _y0_38 = _$42$y0_38;
                break _L$4;
              } else {
                return false;
              }
            }
            case 1: {
              const _Integer = _x_35;
              const _$42$x0_39 = _Integer._0;
              if (_x_36.$tag === 1) {
                const _Integer$2 = _x_36;
                const _$42$y0_40 = _Integer$2._0;
                _x0_39 = _$42$x0_39;
                _y0_40 = _$42$y0_40;
                break _L$3;
              } else {
                return false;
              }
            }
            case 2: {
              const _Floating = _x_35;
              const _$42$x0_41 = _Floating._0;
              if (_x_36.$tag === 2) {
                const _Floating$2 = _x_36;
                const _$42$y0_42 = _Floating$2._0;
                _x0_41 = _$42$x0_41;
                _y0_42 = _$42$y0_42;
                break _L$2;
              } else {
                return false;
              }
            }
            default: {
              const _String = _x_35;
              const _$42$x0_43 = _String._0;
              if (_x_36.$tag === 3) {
                const _String$2 = _x_36;
                const _$42$y0_44 = _String$2._0;
                _x0_43 = _$42$x0_43;
                _y0_44 = _$42$y0_44;
                break _L;
              } else {
                return false;
              }
            }
          }
        }
        return _x0_37 === _y0_38;
      }
      return _x0_39 === _y0_40;
    }
    return _x0_41 === _y0_42;
  }
  return _x0_43 === _y0_44;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Instance3new(cell) {
  const _tmp = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime4Link(undefined);
  const _bind = [];
  const _tmp$2 = _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(_bind, 0, 0));
  const _bind$2 = [];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime8Instance(cell, undefined, _tmp, _tmp$2, _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(_bind$2, 0, 0)), _M0MP319moonbit_2dcommunity7rabbita6common6InstId3new(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode20scan__direct__childs(s) {
  const tmp = [s];
  const result = [];
  while (true) {
    let inode;
    _L: {
      const _bind = _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _inode = _Some;
        inode = _inode;
        break _L;
      }
    }
    let inst;
    _L$2: {
      _L$3: {
        let xs;
        _L$4: {
          _L$5: {
            let cs;
            _L$6: {
              _L$7: {
                switch (inode.$tag) {
                  case 1: {
                    break;
                  }
                  case 0: {
                    const _Elem = inode;
                    const _cs = _Elem._2;
                    cs = _cs;
                    break _L$7;
                  }
                  case 2: {
                    const _Frag = inode;
                    const _xs = _Frag._0;
                    xs = _xs;
                    break _L$5;
                  }
                  default: {
                    const _Slot = inode;
                    const _inst = _Slot._0;
                    inst = _inst;
                    break _L$3;
                  }
                }
                break _L$6;
              }
              let arr;
              _L$8: {
                _L$9: {
                  let mp;
                  _L$10: {
                    if (cs.$tag === 1) {
                      const _Map = cs;
                      const _mp = _Map._0;
                      mp = _mp;
                      break _L$10;
                    } else {
                      const _Array = cs;
                      const _arr = _Array._0;
                      arr = _arr;
                      break _L$9;
                    }
                  }
                  _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPB3Map6valuesGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(mp));
                  break _L$8;
                }
                _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPC15array5Array4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr));
              }
            }
            break _L$4;
          }
          _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPC15array5Array4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs));
        }
        break _L$2;
      }
      _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(result, inst.link);
    }
    continue;
  }
  return result;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(s) {
  let s$2;
  _L: {
    let e;
    _L$2: {
      switch (s.$tag) {
        case 0: {
          const _Elem = s;
          const _e = _Elem._4;
          e = _e;
          break _L$2;
        }
        case 1: {
          const _Text = s;
          const _e$2 = _Text._1;
          e = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = s;
          const _s = _Frag._1;
          s$2 = _s;
          break _L;
        }
        default: {
          const _Slot = s;
          const _s$2 = _Slot._1;
          s$2 = _s$2;
          break _L;
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e);
  }
  return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s$2);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode3end(s) {
  let e;
  _L: {
    let e$2;
    _L$2: {
      switch (s.$tag) {
        case 0: {
          const _Elem = s;
          const _e = _Elem._4;
          e$2 = _e;
          break _L$2;
        }
        case 1: {
          const _Text = s;
          const _e$2 = _Text._1;
          e$2 = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = s;
          const _e$3 = _Frag._2;
          e = _e$3;
          break _L;
        }
        default: {
          const _Slot = s;
          const _e$4 = _Slot._2;
          e = _e$4;
          break _L;
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2);
  }
  return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime4Link6detach(s) {
  s.val = undefined;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox19drop__live__subtree(self, root) {
  const stack = [root];
  while (true) {
    let inst;
    _L: {
      const _bind = _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(stack);
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _inst = _Some;
        inst = _inst;
        break _L;
      }
    }
    const _tmp = inst.cell;
    const flags = _tmp.method_table.method_3(_tmp.self);
    flags.attach_count = flags.attach_count - 1 | 0;
    let insts;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, flags.id);
        if (_bind === undefined) {
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _insts = _x._1;
          insts = _insts;
          break _L$3;
        }
        break _L$2;
      }
      _M0MPB3Map6removeGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(insts, inst.id);
      if (_M0MPB3Map9is__emptyGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(insts)) {
        _M0MPB3Map6removeGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, flags.id);
        _M0MPC13set3Set6removeGRP319moonbit_2dcommunity7rabbita6common2IdE(self.dirty_set, flags.id);
      }
    }
    const _it = _M0MPB3Map5iter2GRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.old_childs);
    while (true) {
      let link;
      _L$3: {
        const _bind = _M0MPB5Iter24nextGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_it);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _link = _x._1;
          link = _link;
          break _L$3;
        }
      }
      let c;
      _L$4: {
        _L$5: {
          const _bind = link.val;
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _c = _Some;
            c = _c;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(stack, c);
      }
      continue;
    }
    const _it$2 = _M0MPB3Map5iter2GRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.new_childs);
    while (true) {
      let link;
      _L$3: {
        const _bind = _M0MPB5Iter24nextGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_it$2);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _link = _x._1;
          link = _link;
          break _L$3;
        }
      }
      let c;
      _L$4: {
        _L$5: {
          const _bind = link.val;
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _c = _Some;
            c = _c;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(stack, c);
      }
      continue;
    }
    continue;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(self, sandbox, parent) {
  const _bind = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode20scan__direct__childs(self);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const link = _bind[_];
      let inst;
      _L: {
        _L$2: {
          const _bind$3 = link.val;
          if (_bind$3 === undefined) {
          } else {
            const _Some = _bind$3;
            const _inst = _Some;
            inst = _inst;
            break _L$2;
          }
          break _L;
        }
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox19drop__live__subtree(sandbox, inst);
      }
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime4Link6detach(link);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let e;
  let s;
  _L: {
    let e$2;
    _L$2: {
      switch (self.$tag) {
        case 0: {
          const _Elem = self;
          const _e = _Elem._4;
          e$2 = _e;
          break _L$2;
        }
        case 1: {
          const _Text = self;
          const _e$2 = _Text._1;
          e$2 = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = self;
          const _s = _Frag._1;
          const _e$3 = _Frag._2;
          e = _e$3;
          s = _s;
          break _L;
        }
        default: {
          const _Slot = self;
          const _s$2 = _Slot._1;
          const _e$4 = _Slot._2;
          e = _e$4;
          s = _s$2;
          break _L;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2));
    return;
  }
  const s$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s);
  const e$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e);
  while (true) {
    let n;
    _L$2: {
      const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s$2));
      if (_bind$3.$tag === 1) {
        const _Some = _bind$3;
        const _n = _Some._0;
        n = _n;
        break _L$2;
      } else {
        break;
      }
    }
    if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(n, e$2)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n);
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, s$2);
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, e$2);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(x) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(x));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode8relocate(self, parent, before) {
  let e;
  let s;
  _L: {
    let e$2;
    _L$2: {
      switch (self.$tag) {
        case 0: {
          const _Elem = self;
          const _e = _Elem._4;
          e$2 = _e;
          break _L$2;
        }
        case 1: {
          const _Text = self;
          const _e$2 = _Text._1;
          e$2 = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = self;
          const _s = _Frag._1;
          const _e$3 = _Frag._2;
          e = _e$3;
          s = _s;
          break _L;
        }
        default: {
          const _Slot = self;
          const _s$2 = _Slot._1;
          const _e$4 = _Slot._2;
          e = _e$4;
          s = _s$2;
          break _L;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2), before);
    return;
  }
  let a;
  _L$2: {
    _L$3: {
      const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s));
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _a = _Some._0;
        a = _a;
        break _L$3;
      } else {
        $panic();
      }
      break _L$2;
    }
    let b;
    _L$4: {
      _L$5: {
        const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e));
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _b = _Some._0;
          b = _b;
          break _L$5;
        } else {
          $panic();
        }
        break _L$4;
      }
      if (_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(a, b)) {
      } else {
        $panic();
      }
    }
  }
  const s$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s);
  const e$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e);
  const anchor = new _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(before);
  while (true) {
    let n;
    _L$3: {
      const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(e$2));
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _n = _Some._0;
        n = _n;
        break _L$3;
      } else {
        break;
      }
    }
    if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(n, s$2)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n, anchor.val);
      anchor.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(n);
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, e$2, before);
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, s$2, anchor.val);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(value) {
  let value$2;
  _L: {
    let value$3;
    _L$2: {
      let value$4;
      _L$3: {
        let value$5;
        _L$4: {
          switch (value.$tag) {
            case 3: {
              const _String = value;
              const _value = _String._0;
              value$5 = _value;
              break _L$4;
            }
            case 2: {
              const _Floating = value;
              const _value$2 = _Floating._0;
              value$4 = _value$2;
              break _L$3;
            }
            case 1: {
              const _Integer = value;
              const _value$3 = _Integer._0;
              value$3 = _value$3;
              break _L$2;
            }
            default: {
              const _Boolean = value;
              const _value$4 = _Boolean._0;
              value$2 = _value$4;
              break _L;
            }
          }
        }
        return value$5;
      }
      return value$4;
    }
    return value$3;
  }
  return value$2;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(self, sandbox, parent_inst, parent, before) {
  let childs;
  let tag;
  let properties;
  let namespace_uri;
  _L: {
    let childs$2;
    _L$2: {
      let cell;
      _L$3: {
        let s;
        _L$4: {
          switch (self.$tag) {
            case 1: {
              const _Text = self;
              const _s = _Text._0;
              s = _s;
              break _L$4;
            }
            case 3: {
              const _Slot = self;
              const _cell = _Slot._0;
              cell = _cell;
              break _L$3;
            }
            case 2: {
              const _Frag = self;
              const _childs = _Frag._0;
              childs$2 = _childs;
              break _L$2;
            }
            default: {
              const _Elem = self;
              const _tag = _Elem._0;
              const _properties = _Elem._1;
              const _childs$2 = _Elem._2;
              const _namespace_uri = _Elem._3;
              childs = _childs$2;
              tag = _tag;
              properties = _properties;
              namespace_uri = _namespace_uri;
              break _L;
            }
          }
        }
        const e = _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), s);
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e), before);
        return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(s, e);
      }
      const flags = cell.method_table.method_3(cell.self);
      if (flags.attach_count === 0) {
        cell.method_table.method_0(cell.self, { self: sandbox, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
      }
      flags.attach_count = flags.attach_count + 1 | 0;
      const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), "");
      const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), "");
      const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(_M0FP319moonbit_2dcommunity7rabbita3dom8document());
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      const inst = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Instance3new(cell);
      const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(cell.method_table.method_2(cell.self), sandbox, inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      inst.inode = inode;
      let map;
      _L$4: {
        _L$5: {
          const _bind = _M0MPB3Map3getGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(sandbox.live_map, flags.id);
          if (_bind === undefined) {
            const _tmp = sandbox.live_map;
            const _tmp$2 = flags.id;
            const _tmp$3 = inst.cell;
            const _bind$2 = [{ _0: inst.id, _1: inst }];
            _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_tmp, _tmp$2, { _0: _tmp$3, _1: _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(_bind$2, 0, 1)) });
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _map = _x._1;
            map = _map;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(map, inst.id, inst);
      }
      inst.link.val = inst;
      _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(parent_inst.new_childs, inst.id, inst.link);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Slot(inst, start, end);
    }
    const doc = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
    const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(doc);
    const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(doc, "start");
    const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(doc, "end");
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start));
    const childs$3 = _M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(childs$2, (x) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(x, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end));
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(childs$3, start, end);
  }
  const s = tag === "RABBITA_CAPTURED_LINK" ? "a" : tag;
  const doc = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
  let element;
  let ns;
  _L$2: {
    _L$3: {
      if (namespace_uri === undefined) {
        element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element(doc, s);
      } else {
        const _Some = namespace_uri;
        const _ns = _Some;
        ns = _ns;
        break _L$3;
      }
      break _L$2;
    }
    element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(doc, ns, s, undefined, undefined);
  }
  let props;
  let handlers;
  let slots;
  let attrs;
  let styles;
  _L$3: {
    const _slots = properties.slots;
    const _handlers = properties.handlers;
    const _attrs = properties.attrs;
    const _props = properties.props;
    const _styles = properties.styles;
    props = _props;
    handlers = _handlers;
    slots = _slots;
    attrs = _attrs;
    styles = _styles;
    break _L$3;
  }
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(handlers);
  while (true) {
    let e;
    let h;
    _L$4: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _e = _x._0;
        const _h = _x._1;
        e = _e;
        h = _h;
        break _L$4;
      }
    }
    const slot = _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(h);
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, e, (x) => {
      const _func = slot.val;
      _func(x, { self: sandbox, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
    });
    _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, e, slot);
    continue;
  }
  if (tag === "RABBITA_CAPTURED_LINK") {
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "click", sandbox.captured_link_listener);
  }
  const _it$2 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(attrs);
  while (true) {
    let n;
    let val;
    _L$4: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$2);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _n = _x._0;
        const _val = _x._1;
        n = _n;
        val = _val;
        break _L$4;
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, n, val);
    continue;
  }
  const _it$3 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(props);
  while (true) {
    let n;
    let val;
    _L$4: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$3);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _n = _x._0;
        const _val = _x._1;
        n = _n;
        val = _val;
        break _L$4;
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(val));
    continue;
  }
  let sheet;
  let html;
  _L$4: {
    _L$5: {
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _html = _Some._0;
        html = _html;
        break _L$5;
      } else {
        let svg;
        _L$6: {
          _L$7: {
            const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _svg = _Some._0;
              svg = _svg;
              break _L$7;
            } else {
              sheet = $panic();
            }
            break _L$6;
          }
          sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(svg);
        }
      }
      break _L$4;
    }
    sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(html);
  }
  const _it$4 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(styles);
  while (true) {
    let n;
    let val;
    _L$5: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$4);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _n = _x._0;
        const _val = _x._1;
        n = _n;
        val = _val;
        break _L$5;
      }
    }
    _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(sheet, n, val);
    continue;
  }
  const n = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  let childs$2;
  let mp;
  _L$5: {
    _L$6: {
      let xs;
      _L$7: {
        if (childs.$tag === 0) {
          const _Array = childs;
          const _xs = _Array._0;
          xs = _xs;
          break _L$7;
        } else {
          const _Map = childs;
          const _mp = _Map._0;
          mp = _mp;
          break _L$6;
        }
      }
      childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs, (x) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(x, sandbox, parent_inst, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE())));
      break _L$5;
    }
    const _bind = [];
    const imp = _M0MPB3Map11from__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(_bind, 0, 0));
    const _it$5 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(mp);
    while (true) {
      let k;
      let v;
      _L$7: {
        const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$5);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _k = _x._0;
          const _v = _x._1;
          k = _k;
          v = _v;
          break _L$7;
        }
      }
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(imp, k, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(v, sandbox, parent_inst, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
      continue;
    }
    childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(imp);
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n, before);
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(tag, properties, childs$2, namespace_uri, element);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, props, children, namespace_uri) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(tag, props, children, namespace_uri);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4text(s) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text(s);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(attrs, props, styles, handlers) {
  const _bind = [];
  const _bind$2 = _M0MPB3Map11from__arrayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(_bind, 0, 0));
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(_bind$2, handlers, attrs, props, styles);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGssE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props4copy(self) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self.slots), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(self.attrs), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(self.styles));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Children3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(c, f) {
  let mp;
  _L: {
    let arr;
    _L$2: {
      if (c.$tag === 0) {
        const _Array = c;
        const _arr = _Array._0;
        arr = _arr;
        break _L$2;
      } else {
        const _Map = c;
        const _mp = _Map._0;
        mp = _mp;
        break _L;
      }
    }
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr, f));
  }
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(_M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(mp, (_discard_, v) => f(v)));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime11diff__props(old, new_, sandbox, parent) {
  const slots = old.slots;
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(slots);
  while (true) {
    let event;
    let slot;
    _L: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _event = _x._0;
        const _slot = _x._1;
        event = _event;
        slot = _slot;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers, event)) {
      slot.val = (_discard_, _discard_$2) => {
      };
    }
    continue;
  }
  const _it$2 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_.handlers);
  while (true) {
    let event;
    let handler;
    _L: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$2);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _event = _x._0;
        const _handler = _x._1;
        event = _event;
        handler = _handler;
        break _L;
      }
    }
    let slot;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, event);
        if (_bind === undefined) {
          const slot$2 = _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(handler);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, event, (e) => {
            const _func = slot$2.val;
            _func(e, { self: sandbox, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
          });
          _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, event, slot$2);
        } else {
          const _Some = _bind;
          const _slot = _Some;
          slot = _slot;
          break _L$3;
        }
        break _L$2;
      }
      slot.val = handler;
    }
    continue;
  }
  new_.slots = slots;
  const _it$3 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(old.attrs);
  while (true) {
    let k;
    _L: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$3);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGssE(new_.attrs, k)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k);
    }
    continue;
  }
  const _it$4 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_.attrs);
  while (true) {
    let k;
    let v2;
    _L: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$4);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v2 = _x._1;
        k = _k;
        v2 = _v2;
        break _L;
      }
    }
    let v1;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGssE(old.attrs, k);
        if (_bind === undefined) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, v2);
        } else {
          const _Some = _bind;
          const _v1 = _Some;
          v1 = _v1;
          break _L$3;
        }
        break _L$2;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(v1, v2)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, v2);
      }
    }
    continue;
  }
  const _it$5 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(old.props);
  while (true) {
    let k;
    _L: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$5);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new_.props, k)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16remove__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k);
    }
    continue;
  }
  const _it$6 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_.props);
  while (true) {
    let k;
    let v2;
    _L: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$6);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v2 = _x._1;
        k = _k;
        v2 = _v2;
        break _L;
      }
    }
    let v1;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(old.props, k);
        if (_bind === undefined) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(v2));
        } else {
          const _Some = _bind;
          const _v1 = _Some;
          v1 = _v1;
          break _L$3;
        }
        break _L$2;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(v1, v2)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(v2));
      }
    }
    continue;
  }
  let stylesheet;
  let html;
  _L: {
    _L$2: {
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _html = _Some._0;
        html = _html;
        break _L$2;
      } else {
        let svg;
        _L$3: {
          _L$4: {
            const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _svg = _Some._0;
              svg = _svg;
              break _L$4;
            } else {
              stylesheet = $panic();
            }
            break _L$3;
          }
          stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(svg);
        }
      }
      break _L;
    }
    stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(html);
  }
  const _it$7 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(old.styles);
  while (true) {
    let k;
    _L$2: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$7);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L$2;
      }
    }
    if (!_M0MPB3Map8containsGssE(new_.styles, k)) {
      _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property(stylesheet, k);
    }
    continue;
  }
  const _it$8 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_.styles);
  while (true) {
    let k;
    let v2;
    _L$2: {
      const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$8);
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v2 = _x._1;
        k = _k;
        v2 = _v2;
        break _L$2;
      }
    }
    let v1;
    _L$3: {
      _L$4: {
        const _bind = _M0MPB3Map3getGssE(old.styles, k);
        if (_bind === undefined) {
          _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, k, v2);
        } else {
          const _Some = _bind;
          const _v1 = _Some;
          v1 = _v1;
          break _L$4;
        }
        break _L$3;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(v1, v2)) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, k, v2);
      }
    }
    continue;
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(old, new_, sandbox, parent, anchor, parent_inst) {
  _L: {
    let _e;
    let inst;
    let _s;
    let c2;
    _L$2: {
      let e;
      let childs1;
      let s;
      let childs2;
      _L$3: {
        let e$2;
        let s1;
        let s2;
        _L$4: {
          let e$3;
          let childs1$2;
          let tag1;
          let props1;
          let ns1;
          let childs2$2;
          let tag2;
          let props2;
          let ns2;
          _L$5: {
            switch (old.$tag) {
              case 0: {
                const _Elem = old;
                const _tag1 = _Elem._0;
                const _props1 = _Elem._1;
                const _childs1 = _Elem._2;
                const _ns1 = _Elem._3;
                const _e$2 = _Elem._4;
                if (new_.$tag === 0) {
                  const _Elem$2 = new_;
                  const _tag2 = _Elem$2._0;
                  const _props2 = _Elem$2._1;
                  const _childs2 = _Elem$2._2;
                  const _ns2 = _Elem$2._3;
                  e$3 = _e$2;
                  childs1$2 = _childs1;
                  tag1 = _tag1;
                  props1 = _props1;
                  ns1 = _ns1;
                  childs2$2 = _childs2;
                  tag2 = _tag2;
                  props2 = _props2;
                  ns2 = _ns2;
                  break _L$5;
                } else {
                  break _L;
                }
              }
              case 1: {
                const _Text = old;
                const _s1 = _Text._0;
                const _e$3 = _Text._1;
                if (new_.$tag === 1) {
                  const _Text$2 = new_;
                  const _s2 = _Text$2._0;
                  e$2 = _e$3;
                  s1 = _s1;
                  s2 = _s2;
                  break _L$4;
                } else {
                  break _L;
                }
              }
              case 2: {
                const _Frag = old;
                const _childs1$2 = _Frag._0;
                const _s$2 = _Frag._1;
                const _e$4 = _Frag._2;
                if (new_.$tag === 2) {
                  const _Frag$2 = new_;
                  const _childs2 = _Frag$2._0;
                  e = _e$4;
                  childs1 = _childs1$2;
                  s = _s$2;
                  childs2 = _childs2;
                  break _L$3;
                } else {
                  break _L;
                }
              }
              default: {
                const _Slot = old;
                const _inst = _Slot._0;
                const __s = _Slot._1;
                const __e = _Slot._2;
                if (new_.$tag === 3) {
                  const _Slot$2 = new_;
                  const _c2 = _Slot$2._0;
                  _e = __e;
                  inst = _inst;
                  _s = __s;
                  c2 = _c2;
                  break _L$2;
                } else {
                  break _L;
                }
              }
            }
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGsE(tag1, tag2) || _M0IP016_24default__implPB2Eq10not__equalGOsE(ns1, ns2)) {
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
            return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
          } else {
            _M0FP419moonbit_2dcommunity7rabbita8internal7runtime11diff__props(props1, props2, sandbox, e$3);
            const childs = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(childs1$2, childs2$2, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$3), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE(), parent_inst);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(tag2, props2, childs, ns2, e$3);
          }
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(s1, s2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2, _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(s2));
        }
        return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(s2, e$2);
      }
      const childs = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(childs1), new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(childs2), sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e)), parent_inst);
      let childs$2;
      _L$4: {
        if (childs.$tag === 0) {
          const _Array = childs;
          const _childs = _Array._0;
          childs$2 = _childs;
          break _L$4;
        } else {
          return $panic();
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(childs$2, s, e);
    }
    const _tmp = inst.cell;
    if (_M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita6common2IdE(_tmp.method_table.method_3(_tmp.self).id, c2.method_table.method_3(c2.self).id)) {
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
      return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
    } else {
      return old;
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(old, new_, sandbox, parent, anchor, parent_inst) {
  _L: {
    let old$2;
    let new$2;
    _L$2: {
      let old$3;
      let new$3;
      _L$3: {
        if (old.$tag === 0) {
          const _Array = old;
          const _old = _Array._0;
          if (new_.$tag === 0) {
            const _Array$2 = new_;
            const _new = _Array$2._0;
            old$3 = _old;
            new$3 = _new;
            break _L$3;
          } else {
            break _L;
          }
        } else {
          const _Map = old;
          const _old = _Map._0;
          if (new_.$tag === 1) {
            const _Map$2 = new_;
            const _new = _Map$2._0;
            old$2 = _old;
            new$2 = _new;
            break _L$2;
          } else {
            break _L;
          }
        }
      }
      const len1 = old$3.length;
      const len2 = new$3.length;
      const before = new _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(anchor);
      const acc = [];
      let len;
      if (len1 > len2) {
        let _tmp = len1 - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= len2) {
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(old$3, i), sandbox, parent);
            _tmp = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        len = len2;
      } else {
        let _tmp = len2 - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= len1) {
            const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(new$3, i), sandbox, parent_inst, parent, before.val);
            _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(acc, inode);
            before.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
            _tmp = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        len = len1;
      }
      const _bind = 0;
      let _tmp = len - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i >= _bind) {
          const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(old$3, i), _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(new$3, i), sandbox, parent, before.val, parent_inst);
          _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(acc, inode);
          before.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(acc));
    }
    const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(old$2);
    while (true) {
      let k;
      let v1;
      _L$3: {
        const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _k = _x._0;
          const _v1 = _x._1;
          k = _k;
          v1 = _v1;
          break _L$3;
        }
      }
      if (!_M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(new$2, k)) {
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(v1, sandbox, parent);
      }
      continue;
    }
    const order = _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(new$2);
    const before = new _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
    const reversed = [];
    const _bind = order.length;
    const _bind$2 = 0;
    let _tmp = _bind - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= _bind$2) {
        let k;
        let v2;
        _L$3: {
          const _bind$3 = _M0MPC15array5Array2atGRP411feihaoxiang5xterm3src6common8ListenerGuEE(order, i);
          const _k = _bind$3._0;
          const _v2 = _bind$3._1;
          k = _k;
          v2 = _v2;
          break _L$3;
        }
        let inode;
        let v1;
        _L$4: {
          _L$5: {
            const _bind$3 = _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(old$2, k);
            if (_bind$3 === undefined) {
              inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(v2, sandbox, parent_inst, parent, before.val);
            } else {
              const _Some = _bind$3;
              const _v1 = _Some;
              v1 = _v1;
              break _L$5;
            }
            break _L$4;
          }
          const inode$2 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(v1, v2, sandbox, parent, before.val, parent_inst);
          _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode8relocate(inode$2, parent, before.val);
          inode = inode$2;
        }
        _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(reversed, { _0: k, _1: inode });
        before.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(_M0MPB3Map11from__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(reversed, 0, reversed.length)));
  }
  let xs;
  _L$2: {
    _L$3: {
      let xs$2;
      _L$4: {
        if (old.$tag === 1) {
          const _Map = old;
          const _xs = _Map._0;
          xs$2 = _xs;
          break _L$4;
        } else {
          const _Array = old;
          const _xs = _Array._0;
          xs = _xs;
          break _L$3;
        }
      }
      _M0MPB3Map4eachGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs$2, (_discard_, x) => {
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(x, sandbox, parent);
      });
      break _L$2;
    }
    _M0MPC15array5Array4eachGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs, (x) => {
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(x, sandbox, parent);
    });
  }
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Children3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new_, (y) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(y, sandbox, parent_inst, parent, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3new(root) {
  const root$2 = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Instance3new(root);
  const sandbox = new _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(undefined);
  const captured_link_listener = (event) => {
    let mouse_event;
    _L: {
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _mouse_event = _Some._0;
        mouse_event = _mouse_event;
        break _L;
      } else {
        return;
      }
    }
    let sandbox$2;
    _L$2: {
      const _bind = sandbox.val;
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _sandbox = _Some;
        sandbox$2 = _sandbox;
        break _L$2;
      }
    }
    let hook;
    _L$3: {
      const _bind = sandbox$2.hooks.url_request;
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _hook = _Some;
        hook = _hook;
        break _L$3;
      }
    }
    if (!(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(mouse_event) || _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(mouse_event))) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
      const href = _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event)))), "href"));
      hook({ self: sandbox$2, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, href);
      return;
    } else {
      return;
    }
  };
  const _tmp = root$2.cell;
  const _tmp$2 = _tmp.method_table.method_3(_tmp.self).id;
  const _tmp$3 = root$2.cell;
  const _bind = [{ _0: root$2.id, _1: root$2 }];
  const _bind$2 = [{ _0: _tmp$2, _1: { _0: _tmp$3, _1: _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(_bind, 0, 1)) } }];
  const live_map = _M0MPB3Map11from__arrayGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(_bind$2, 0, 1));
  const _bind$3 = _M0MPC15queue5Queue3newGRP319moonbit_2dcommunity7rabbita6common2IdE();
  const _bind$4 = _M0MPC13set3Set11new_2einnerGRP319moonbit_2dcommunity7rabbita6common2IdE(8);
  const _bind$5 = new _M0TP319moonbit_2dcommunity7rabbita3cmd5Hooks(undefined, undefined);
  const _bind$6 = false;
  const _bind$7 = false;
  const _bind$8 = "";
  const _bind$9 = _M0MPC15queue5Queue3newGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE();
  sandbox.val = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox(live_map, _bind$3, _bind$9, _bind$7, _bind$4, _bind$6, root$2, captured_link_listener, _bind$8, _bind$5);
  return _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(sandbox.val);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler5hooks(self) {
  return self.hooks;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox10initialize(self) {
  const root = self.root;
  const element = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), self.mount));
  const _tmp = self.dirty_set;
  const _tmp$2 = root.cell;
  _M0MPC13set3Set3addGRP319moonbit_2dcommunity7rabbita6common2IdE(_tmp, _tmp$2.method_table.method_3(_tmp$2.self).id);
  const _tmp$3 = root.cell;
  _tmp$3.method_table.method_0(_tmp$3.self, { self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
  let hook;
  _L: {
    _L$2: {
      const _bind = _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler5hooks(self).url_changed;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _hook = _Some;
        hook = _hook;
        break _L$2;
      }
      break _L;
    }
    hook({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url(_M0FP319moonbit_2dcommunity7rabbita3dom6window()));
  }
  const _tmp$4 = root.cell;
  const vnode = _tmp$4.method_table.method_2(_tmp$4.self);
  const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(vnode, self, root, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
  self.root.inode = inode;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self) {
  if (!self.paint_scheduled) {
    self.paint_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), (_discard_) => {
      const dirty = _M0MPC13set3Set9to__arrayGRP319moonbit_2dcommunity7rabbita6common2IdE(self.dirty_set);
      const _bind = dirty.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const id = dirty[_];
          _L: {
            let cell;
            let insts;
            _L$2: {
              const _bind$2 = _M0MPB3Map3getGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, id);
              if (_bind$2 === undefined) {
                break _L;
              } else {
                const _Some = _bind$2;
                const _x = _Some;
                const _cell = _x._0;
                const _insts = _x._1;
                cell = _cell;
                insts = _insts;
                break _L$2;
              }
            }
            if (cell.method_table.method_3(cell.self).dirty) {
              const flags = cell.method_table.method_3(cell.self);
              const _it = _M0MPB3Map5iter2GRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(insts);
              while (true) {
                let inst;
                _L$3: {
                  const _bind$2 = _M0MPB5Iter24nextGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_it);
                  if (_bind$2 === undefined) {
                    break;
                  } else {
                    const _Some = _bind$2;
                    const _x = _Some;
                    const _inst = _x._1;
                    inst = _inst;
                    break _L$3;
                  }
                }
                const _tmp$2 = inst.cell;
                const vnode = _tmp$2.method_table.method_2(_tmp$2.self);
                let inode;
                _L$4: {
                  _L$5: {
                    const _bind$2 = inst.inode;
                    if (_bind$2 === undefined) {
                      $panic();
                    } else {
                      const _Some = _bind$2;
                      const _inode = _Some;
                      inode = _inode;
                      break _L$5;
                    }
                    break _L$4;
                  }
                  const end = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode3end(inode);
                  const parent = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end));
                  const next_sibling = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end);
                  const inode$2 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(inode, vnode, self, parent, next_sibling, inst);
                  inst.inode = inode$2;
                  const _it$2 = _M0MPB3Map5iter2GRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.old_childs);
                  while (true) {
                    let id$2;
                    let link;
                    _L$6: {
                      const _bind$2 = _M0MPB5Iter24nextGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_it$2);
                      if (_bind$2 === undefined) {
                        break;
                      } else {
                        const _Some = _bind$2;
                        const _x = _Some;
                        const _id = _x._0;
                        const _link = _x._1;
                        id$2 = _id;
                        link = _link;
                        break _L$6;
                      }
                    }
                    const _bind$2 = link.val;
                    if (_bind$2 === undefined) {
                    } else {
                      _M0MPB3Map3setGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.new_childs, id$2, link);
                    }
                    continue;
                  }
                  inst.old_childs = inst.new_childs;
                  inst.new_childs = _M0MPB3Map11new_2einnerGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(8);
                }
                continue;
              }
              flags.dirty = false;
            } else {
              break _L;
            }
            break _L;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC13set3Set5clearGRP319moonbit_2dcommunity7rabbita6common2IdE(self.dirty_set);
      self.paint_scheduled = false;
      while (true) {
        let effect;
        _L: {
          const _bind$2 = _M0MPC15queue5Queue3popGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.after_render_queue);
          if (_bind$2 === undefined) {
            return;
          } else {
            const _Some = _bind$2;
            const _effect = _Some;
            effect = _effect;
            break _L;
          }
        }
        effect({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
        continue;
      }
    });
    return;
  } else {
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler11run__effect(self, kind, f) {
  if (kind === 0) {
    f({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
    return;
  } else {
    _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.after_render_queue, f);
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__message(self, id, send_message) {
  send_message();
  _M0MPC15queue5Queue4pushGRP319moonbit_2dcommunity7rabbita6common2IdE(self.msg_queue, id);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14drain__message(self) {
  if (!self.drain_scheduled) {
    self.drain_scheduled = true;
    while (true) {
      let id;
      _L: {
        const _bind = _M0MPC15queue5Queue3popGRP319moonbit_2dcommunity7rabbita6common2IdE(self.msg_queue);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _id = _Some;
          id = _id;
          break _L;
        }
      }
      let cell;
      _L$2: {
        _L$3: {
          const _bind = _M0MPB3Map3getGRP319moonbit_2dcommunity7rabbita6common2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP319moonbit_2dcommunity7rabbita6common6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, id);
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _cell = _x._0;
            cell = _cell;
            break _L$3;
          }
          break _L$2;
        }
        cell.method_table.method_1(cell.self, { self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
        _M0MPC13set3Set3addGRP319moonbit_2dcommunity7rabbita6common2IdE(self.dirty_set, id);
      }
      continue;
    }
    self.drain_scheduled = false;
    _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self);
    return;
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new() {
  const _bind = _M0MP319moonbit_2dcommunity7rabbita6common2Id3new(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key);
  const _bind$2 = false;
  const _bind$3 = 0;
  const _bind$4 = false;
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Flags(_bind, _bind$4, _bind$2, _bind$3);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags11mark__dirty(s) {
  s.dirty = true;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, key, value) {
  _M0MPB3Map3setGssE(self.attrs, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs) {
  if (style.length > 0) {
    const _bind = ";";
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "style", _M0MPC15array5Array4joinGsE(style, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
    return;
  } else {
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html8push__id(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "id", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__class(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "class", v);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, key, value) {
  _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, value);
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_3(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "click", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__click(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(attrs, (_discard_) => v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)));
}
function _M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(_M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location(event));
}
function _M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element) {
  return _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)), _M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element))), _M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)), _M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mousedown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(attrs, (event) => {
    const _func = v;
    return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(attrs, (event) => {
    const _func = v;
    return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, "scroll", (event, scheduler) => {
    scheduler.method_table.method_3(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent13to__ui__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event))));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(attrs, (event) => {
    const element = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(event)));
    const _func = v;
    return _func(_M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_3(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keydown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(attrs, (event) => {
    const _func = v;
    return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keyup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(attrs, (event) => {
    const _func = v;
    return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(self, key, value) {
  _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "value", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__title(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "title", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__name(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "name", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "disabled", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__rows(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "rows", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__cols(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "cols", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "placeholder", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "readonly", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "maxlength", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "minlength", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event) {
  let target;
  const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _target = _Some._0;
    target = _target;
  } else {
    target = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
  }
  let input;
  _L: {
    const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget24to__html__input__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _input = _Some._0;
      input = _input;
      break _L;
    } else {
      let select;
      _L$2: {
        const _bind$3 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget25to__html__select__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
        if (_bind$3.$tag === 1) {
          const _Some = _bind$3;
          const _select = _Some._0;
          select = _select;
          break _L$2;
        } else {
          let element;
          _L$3: {
            const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
            if (_bind$4.$tag === 1) {
              const _Some = _bind$4;
              const _element = _Some._0;
              element = _element;
              break _L$3;
            } else {
              return $panic();
            }
          }
          const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Optional10to__optionGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "value"));
          if (_bind$4 === undefined) {
            return $panic();
          } else {
            const _Some = _bind$4;
            const _value = _Some;
            return _value;
          }
        }
      }
      return _M0MP319moonbit_2dcommunity7rabbita3dom17HTMLSelectElement5value(select);
    }
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom16HTMLInputElement5value(input);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__change(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "change", (event, scheduler) => {
    const _func = v;
    scheduler.method_table.method_3(scheduler.self, _func(_M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__input(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "input", (event, scheduler) => {
    const _func = v;
    scheduler.method_table.method_3(scheduler.self, _func(_M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "hidden", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__required(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "required", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "autofocus", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__wrap(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "wrap", v);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9to__props(self) {
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(tag, attrs, children) {
  const props = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9to__props(attrs);
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, props, _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children), undefined);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE(tag, attrs, children) {
  const props = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9to__props(attrs);
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, props, _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children), undefined);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build() {
  const _bind = [];
  const _tmp = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0));
  const _bind$2 = [];
  const _tmp$2 = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$2, 0, 0));
  const _bind$3 = [];
  const _tmp$3 = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0));
  const _bind$4 = [];
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(_tmp, _tmp$2, _tmp$3, _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$4, 0, 0)));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(self) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props4copy(self);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs) {
  let a;
  _L: {
    if (attrs === undefined) {
      return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
    } else {
      const _Some = attrs;
      const _a = _Some;
      a = _a;
      break _L;
    }
  }
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(a);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("div", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("span", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4text(str) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4text(str);
}
function _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(style, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__rows(rows, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__cols(cols, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(placeholder, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(read_only, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(maxlength, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(minlength, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__required(required, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__wrap(wrap, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__change(on_change, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__input(on_input, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("textarea", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html8textareaGsE(style$46$opt, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(style, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children);
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, (x) => x));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs14autocapitalize(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "autocapitalize", value);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs12autocomplete(self, value) {
  let s;
  if (value === 0) {
    s = "on";
  } else {
    s = "off";
  }
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "autocomplete", s);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(self, name, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, `data-${name}`, value);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4role(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "role", value);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10spellcheck(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(self, "spellcheck", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(value));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8tabindex(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "tabindex", _M0MPC13int3Int18to__string_2einner(value, 10));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs12aria__hidden(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "aria-hidden", value);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11aria__label(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "aria-label", value);
}
function _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(self, _discard_, filter_global) {
  const _bind = [];
  const map = _M0MPB3Map11from__arrayGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(_bind, 0, 0));
  const go = (s) => {
    let xs;
    _L: {
      let h;
      let k;
      let v;
      _L$2: {
        if (s.$tag === 0) {
          const _Custom = s;
          const _x = _Custom._0;
          const _x$2 = _Custom._1;
          if (_x$2 === 1) {
            const _x$3 = _Custom._2;
            const _x$4 = _Custom._3;
            if (filter_global) {
              return;
            } else {
              h = _x$3;
              k = _x;
              v = _x$4;
              break _L$2;
            }
          } else {
            const _h = _Custom._2;
            const _v = _Custom._3;
            h = _h;
            k = _x;
            v = _v;
            break _L$2;
          }
        } else {
          const _Batch = s;
          const _xs = _Batch._0;
          xs = _xs;
          break _L;
        }
      }
      _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(map, k, { _0: h, _1: v });
      return;
    }
    _M0MPC15array5Array4eachGRP319moonbit_2dcommunity7rabbita3sub3SubE(xs, go);
  };
  go(self);
  return map;
}
function _M0FP219moonbit_2dcommunity7rabbita3new(root) {
  const sandbox = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3new(root);
  root.method_table.method_3(root.self).is_root = true;
  return new _M0TP219moonbit_2dcommunity7rabbita3App(sandbox, undefined);
}
function _M0MP219moonbit_2dcommunity7rabbita3App5mount(self, element_id) {
  self.sandbox.mount = element_id;
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), element_id)), "<div></div>");
  let cmd;
  _L: {
    _L$2: {
      const _bind = self.init_cmd;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _cmd = _Some;
        cmd = _cmd;
        break _L$2;
      }
      break _L;
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self.sandbox, cmd);
    self.init_cmd = undefined;
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox10initialize(self.sandbox);
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self.sandbox);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGuuE(self) {
  return self.flags;
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4initGuuE(self, scheduler) {
  if (!self.has_init) {
    self.has_init = true;
    let subscriptions;
    _L: {
      const _bind = self.subscriptions;
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _subscriptions = _Some;
        subscriptions = _subscriptions;
        break _L;
      }
    }
    const subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(subscriptions(self.dispatch, self.model.val), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, !_M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGuuE(self).is_root);
    const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(subs);
    while (true) {
      let key;
      let sub;
      _L$2: {
        const _bind = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
        if (_bind === undefined) {
          return;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x._0;
          const _sub = _x._1;
          key = _key;
          sub = _sub;
          break _L$2;
        }
      }
      let payload;
      let loader;
      _L$3: {
        const _payload = sub._0;
        const _loader = sub._1;
        payload = _payload;
        loader = _loader;
        break _L$3;
      }
      let running;
      _L$4: {
        _L$5: {
          const _func = loader;
          const _bind = _func(payload, scheduler);
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _running = _Some;
            running = _running;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self.sub_map, key, running);
      }
      continue;
    }
  } else {
    return;
  }
}
function _M0FP219moonbit_2dcommunity7rabbita10diff__subs(old_subs, new_subs, scheduler) {
  const _bind = [];
  const sub_map = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(old_subs);
  while (true) {
    let key;
    let sub;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _key = _x._0;
        const _sub = _x._1;
        key = _key;
        sub = _sub;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_subs, key)) {
      const _func = sub.unload;
      _func(scheduler);
    } else {
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, key, sub);
    }
    continue;
  }
  const _it$2 = _M0MPB3Map5iter2GsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_subs);
  while (true) {
    let key;
    let sub;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_it$2);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _key = _x._0;
        const _sub = _x._1;
        key = _key;
        sub = _sub;
        break _L;
      }
    }
    let payload;
    let loader;
    _L$2: {
      const _payload = sub._0;
      const _loader = sub._1;
      payload = _payload;
      loader = _loader;
      break _L$2;
    }
    if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(old_subs, key)) {
      let running;
      _L$3: {
        _L$4: {
          const _func = loader;
          const _bind$2 = _func(payload, scheduler);
          if (_bind$2 === undefined) {
          } else {
            const _Some = _bind$2;
            const _running = _Some;
            running = _running;
            break _L$4;
          }
          break _L$3;
        }
        _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, key, running);
      }
    }
    continue;
  }
  return sub_map;
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGuuE(self, scheduler) {
  let msg;
  _L: {
    const _bind = _M0MPC15queue5Queue3popGuE(self.inbox);
    if (_bind === -1) {
      return;
    } else {
      const _Some = _bind;
      const _msg = _Some;
      msg = _msg;
      break _L;
    }
  }
  let cmd;
  let model;
  _L$2: {
    const _func = self.update;
    const _bind = _func(self.dispatch, msg, self.model.val);
    const _cmd = _bind._0;
    const _model = _bind._1;
    cmd = _cmd;
    model = _model;
    break _L$2;
  }
  let subscriptions;
  _L$3: {
    _L$4: {
      const _bind = self.subscriptions;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _subscriptions = _Some;
        subscriptions = _subscriptions;
        break _L$4;
      }
      break _L$3;
    }
    const new_subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(subscriptions(self.dispatch, model), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, !_M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGuuE(self).is_root);
    const old_subs = self.sub_map;
    self.sub_map = _M0FP219moonbit_2dcommunity7rabbita10diff__subs(old_subs, new_subs, scheduler);
  }
  self.model.val = model;
  scheduler.method_table.method_3(scheduler.self, cmd);
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags11mark__dirty(self.flags);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGuuE(self) {
  const _func = self.view;
  return _func(self.dispatch, self.model.val);
}
function _M0FP219moonbit_2dcommunity7rabbita4cellGuuE(model, update, view, subscriptions) {
  const flags = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new();
  const inbox = _M0MPC15queue5Queue3newGuE();
  const dispatch = _M0FP319moonbit_2dcommunity7rabbita3cmd16make__dispatcherGuE(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key, flags.id, inbox);
  const model$2 = _M0FPC13ref3newGuE(model);
  const _bind = false;
  const _bind$2 = [];
  const _bind$3 = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind$2, 0, 0));
  return { self: new _M0TP219moonbit_2dcommunity7rabbita9TypedCellGuuE(_bind, model$2, dispatch, inbox, update, view, subscriptions, _bind$3, flags), method_table: _M0FP0131moonbit_2dcommunity_2frabbita_2fTypedCell_5bUnit_2c_20Unit_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell };
}
function _M0FP219moonbit_2dcommunity7rabbita12static__cell(html) {
  return _M0FP219moonbit_2dcommunity7rabbita4cellGuuE(undefined, (_discard_, _discard_$2, _discard_$3) => ({ _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: undefined }), (_discard_, _discard_$2) => html, undefined);
}
function _M0FP411feihaoxiang5xterm3src7browser9css__bool(value) {
  return value ? "true" : "false";
}
function _M0MP411feihaoxiang5xterm3src7browser10RenderCell11class__name(self) {
  const class_name = new _M0TPB8MutLocalGsE("mb-xterm-cell");
  if (self.is_cursor) {
    class_name.val = `${class_name.val} mb-xterm-cell-cursor`;
  }
  if (self.width === 0) {
    class_name.val = `${class_name.val} mb-xterm-cell-zero-width`;
  } else {
    if (self.width > 1) {
      class_name.val = `${class_name.val} mb-xterm-cell-wide`;
    }
  }
  if (self.bold) {
    class_name.val = `${class_name.val} mb-xterm-cell-bold`;
  }
  if (self.italic) {
    class_name.val = `${class_name.val} mb-xterm-cell-italic`;
  }
  if (self.underline) {
    class_name.val = `${class_name.val} mb-xterm-cell-underline`;
  }
  if (self.inverse) {
    class_name.val = `${class_name.val} mb-xterm-cell-inverse`;
  }
  return class_name.val;
}
function _M0MP411feihaoxiang5xterm3src7browser10RenderCell19style__declarations(self) {
  const styles = [];
  let color;
  _L: {
    _L$2: {
      const _bind = self.fg_css;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _color = _Some;
        color = _color;
        break _L$2;
      }
      break _L;
    }
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, `color: ${_M0IPC16string6StringPB4Show10to__string(color)}`);
  }
  let color$2;
  _L$2: {
    _L$3: {
      const _bind = self.bg_css;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _color = _Some;
        color$2 = _color;
        break _L$3;
      }
      break _L$2;
    }
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, `background-color: ${_M0IPC16string6StringPB4Show10to__string(color$2)}`);
  }
  if (self.bold) {
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, "font-weight: 700");
  }
  if (self.dim) {
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, "opacity: 0.62");
  }
  if (self.italic) {
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, "font-style: italic");
  }
  if (self.underline) {
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, "text-decoration: underline");
  }
  if (self.blink) {
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, "animation: mb-xterm-blink 1s steps(2, start) infinite");
  }
  if (self.invisible) {
    _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(styles, "visibility: hidden");
  }
  return styles;
}
function _M0MP411feihaoxiang5xterm3src7browser10RenderCell4text(self) {
  return self.chars === "" ? " " : self.chars;
}
function _M0FP411feihaoxiang5xterm3src7browser12render__cell(cell) {
  return _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(_M0MP411feihaoxiang5xterm3src7browser10RenderCell19style__declarations(cell), undefined, _M0MP411feihaoxiang5xterm3src7browser10RenderCell11class__name(cell), undefined, -1, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "x", _M0IPC13int3IntPB4Show10to__string(cell.x)), "width", _M0IPC13int3IntPB4Show10to__string(cell.width)), "fg", _M0IPC13int3IntPB4Show10to__string(cell.fg)), "bg", _M0IPC13int3IntPB4Show10to__string(cell.bg)), "cursor", _M0FP411feihaoxiang5xterm3src7browser9css__bool(cell.is_cursor)), _M0MP411feihaoxiang5xterm3src7browser10RenderCell4text(cell));
}
function _M0FP411feihaoxiang5xterm3src7browser10row__class(row) {
  return row.is_wrapped ? "mb-xterm-row mb-xterm-row-wrapped" : "mb-xterm-row";
}
function _M0FP411feihaoxiang5xterm3src7browser11render__row(row) {
  return _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP411feihaoxiang5xterm3src7browser10row__class(row), undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "row", _M0IPC13int3IntPB4Show10to__string(row.y)), "buffer-index", _M0IPC13int3IntPB4Show10to__string(row.buffer_index)), "dirty", _M0FP411feihaoxiang5xterm3src7browser9css__bool(row.dirty)), _M0MPC15array5Array3mapGRP411feihaoxiang5xterm3src7browser10RenderCellRP319moonbit_2dcommunity7rabbita4html4HtmlE(row.cells, (cell) => _M0FP411feihaoxiang5xterm3src7browser12render__cell(cell)));
}
function _M0FP411feihaoxiang5xterm3src7browser22render__terminal__view(model, screen_id, input_id) {
  const focus_class = model.focused ? " mb-xterm-focused" : "";
  return _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, `mb-xterm${focus_class}`, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs11aria__label(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs8tabindex(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs4role(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "terminal"), 0), "Terminal output"), "cols", _M0IPC13int3IntPB4Show10to__string(model.cols)), "rows", _M0IPC13int3IntPB4Show10to__string(model.rows)), "cursor-x", _M0IPC13int3IntPB4Show10to__string(model.cursor_x)), "cursor-y", _M0IPC13int3IntPB4Show10to__string(model.cursor_y)), "viewport-y", _M0IPC13int3IntPB4Show10to__string(model.viewport_y)), "base-y", _M0IPC13int3IntPB4Show10to__string(model.base_y)), [_M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, screen_id, "mb-xterm-screen", undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "testid", "terminal-screen"), _M0MPC15array5Array3mapGRP411feihaoxiang5xterm3src7browser9RenderRowRP319moonbit_2dcommunity7rabbita4html4HtmlE(model.rows_data, (row) => _M0FP411feihaoxiang5xterm3src7browser11render__row(row))), _M0FP319moonbit_2dcommunity7rabbita4html8textareaGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, input_id, "mb-xterm-input", undefined, -1, undefined, undefined, undefined, undefined, undefined, -1, -1, undefined, undefined, -1, -1, undefined, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs10spellcheck(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs14autocapitalize(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs12autocomplete(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs12aria__hidden(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "true"), 1), "off"), false), "testid", "terminal-input"), "")]);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal11new_2einner(options) {
  return new _M0TP411feihaoxiang5xterm3src7browser8Terminal(_M0MP411feihaoxiang5xterm3src8headless8Terminal11new_2einner(options), undefined, undefined, undefined, undefined, false, false, false);
}
function _M0FP411feihaoxiang5xterm3src7browser15ansi__component(value) {
  return value === 0 ? 0 : 55 + (Math.imul(value, 40) | 0) | 0;
}
function _M0FP411feihaoxiang5xterm3src7browser8rgb__css(r, g, b) {
  return `rgb(${_M0IPC13int3IntPB4Show10to__string(r)}, ${_M0IPC13int3IntPB4Show10to__string(g)}, ${_M0IPC13int3IntPB4Show10to__string(b)})`;
}
function _M0FP411feihaoxiang5xterm3src7browser14palette__color(index) {
  switch (index) {
    case 0: {
      return "#000000";
    }
    case 1: {
      return "#cd3131";
    }
    case 2: {
      return "#0dbc79";
    }
    case 3: {
      return "#e5e510";
    }
    case 4: {
      return "#2472c8";
    }
    case 5: {
      return "#bc3fbc";
    }
    case 6: {
      return "#11a8cd";
    }
    case 7: {
      return "#e5e5e5";
    }
    case 8: {
      return "#666666";
    }
    case 9: {
      return "#f14c4c";
    }
    case 10: {
      return "#23d18b";
    }
    case 11: {
      return "#f5f543";
    }
    case 12: {
      return "#3b8eea";
    }
    case 13: {
      return "#d670d6";
    }
    case 14: {
      return "#29b8db";
    }
    case 15: {
      return "#e5e5e5";
    }
    default: {
      if (index >= 16 && index <= 231) {
        const value = index - 16 | 0;
        if (36 === 0) {
          $panic();
        }
        const r = _M0FP411feihaoxiang5xterm3src7browser15ansi__component(value / 36 | 0);
        if (6 === 0) {
          $panic();
        }
        if (6 === 0) {
          $panic();
        }
        const g = _M0FP411feihaoxiang5xterm3src7browser15ansi__component((value / 6 | 0) % 6 | 0);
        if (6 === 0) {
          $panic();
        }
        const b = _M0FP411feihaoxiang5xterm3src7browser15ansi__component(value % 6 | 0);
        return _M0FP411feihaoxiang5xterm3src7browser8rgb__css(r, g, b);
      } else {
        if (index >= 232 && index <= 255) {
          const gray = 8 + (Math.imul(index - 232 | 0, 10) | 0) | 0;
          return _M0FP411feihaoxiang5xterm3src7browser8rgb__css(gray, gray, gray);
        } else {
          return undefined;
        }
      }
    }
  }
}
function _M0FP411feihaoxiang5xterm3src7browser10color__css(attr) {
  _L: {
    const _bind = attr & 50331648;
    switch (_bind) {
      case 16777216: {
        break _L;
      }
      case 33554432: {
        break _L;
      }
      case 50331648: {
        const value = attr & 16777215;
        return _M0FP411feihaoxiang5xterm3src7browser8rgb__css(value >> 16 & 255, value >> 8 & 255, value & 255);
      }
      default: {
        return undefined;
      }
    }
  }
  return _M0FP411feihaoxiang5xterm3src7browser14palette__color(attr & 255);
}
function _M0FP411feihaoxiang5xterm3src7browser12is__bg__flag(value, flag) {
  return (value & flag) !== 0;
}
function _M0FP411feihaoxiang5xterm3src7browser12is__fg__flag(value, flag) {
  return (value & flag) !== 0;
}
function _M0FP411feihaoxiang5xterm3src7browser18make__render__cell(x, chars, width, fg, bg, cursor_x, cursor_y, y) {
  const inverse = _M0FP411feihaoxiang5xterm3src7browser12is__fg__flag(fg, 67108864);
  const raw_fg_css = _M0FP411feihaoxiang5xterm3src7browser10color__css(fg);
  const raw_bg_css = _M0FP411feihaoxiang5xterm3src7browser10color__css(bg);
  return new _M0TP411feihaoxiang5xterm3src7browser10RenderCell(x, chars, width, fg, bg, inverse ? raw_bg_css : raw_fg_css, inverse ? raw_fg_css : raw_bg_css, _M0FP411feihaoxiang5xterm3src7browser12is__fg__flag(fg, 134217728), _M0FP411feihaoxiang5xterm3src7browser12is__bg__flag(bg, 134217728), _M0FP411feihaoxiang5xterm3src7browser12is__bg__flag(bg, 67108864), _M0FP411feihaoxiang5xterm3src7browser12is__fg__flag(fg, 268435456), _M0FP411feihaoxiang5xterm3src7browser12is__fg__flag(fg, 536870912), _M0FP411feihaoxiang5xterm3src7browser12is__fg__flag(fg, 1073741824), inverse, x === cursor_x && y === cursor_y);
}
function _M0FP411feihaoxiang5xterm3src7browser11blank__cell(x, cursor_x, cursor_y, y) {
  return _M0FP411feihaoxiang5xterm3src7browser18make__render__cell(x, "", 1, 0, 0, cursor_x, cursor_y, y);
}
function _M0FP411feihaoxiang5xterm3src7browser11blank__text(cols) {
  const result = new _M0TPB8MutLocalGsE("");
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const _ = _tmp;
    if (_ < cols) {
      result.val = `${result.val} `;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result.val;
}
function _M0FP411feihaoxiang5xterm3src7browser10blank__row(y, buffer_index, cols, cursor_x, cursor_y) {
  const cells = [];
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const x = _tmp;
    if (x < cols) {
      _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(cells, _M0FP411feihaoxiang5xterm3src7browser11blank__cell(x, cursor_x, cursor_y, y));
      _tmp = x + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP411feihaoxiang5xterm3src7browser9RenderRow(y, buffer_index, _M0FP411feihaoxiang5xterm3src7browser11blank__text(cols), false, true, cells);
}
function _M0FP411feihaoxiang5xterm3src7browser24render__cell__from__view(cell, x, cursor_x, cursor_y, y) {
  return _M0FP411feihaoxiang5xterm3src7browser18make__render__cell(x, _M0MP411feihaoxiang5xterm3src8headless14BufferCellView10get__chars(cell), _M0MP411feihaoxiang5xterm3src8headless14BufferCellView10get__width(cell), _M0MP411feihaoxiang5xterm3src8headless14BufferCellView7get__fg(cell), _M0MP411feihaoxiang5xterm3src8headless14BufferCellView7get__bg(cell), cursor_x, cursor_y, y);
}
function _M0FP411feihaoxiang5xterm3src7browser15row__from__line(line, y, buffer_index, cols, cursor_x, cursor_y) {
  const cells = [];
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const x = _tmp;
    if (x < cols) {
      let cell;
      let cell$2;
      _L: {
        _L$2: {
          const _bind$2 = _M0MP411feihaoxiang5xterm3src8headless14BufferLineView9get__cell(line, x);
          if (_bind$2 === undefined) {
            cell = _M0FP411feihaoxiang5xterm3src7browser11blank__cell(x, cursor_x, cursor_y, y);
          } else {
            const _Some = _bind$2;
            const _cell = _Some;
            cell$2 = _cell;
            break _L$2;
          }
          break _L;
        }
        cell = _M0FP411feihaoxiang5xterm3src7browser24render__cell__from__view(cell$2, x, cursor_x, cursor_y, y);
      }
      _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(cells, cell);
      _tmp = x + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP411feihaoxiang5xterm3src7browser9RenderRow(y, buffer_index, _M0MP411feihaoxiang5xterm3src8headless14BufferLineView29translate__to__string_2einner(line, false, 0, cols), _M0MP411feihaoxiang5xterm3src8headless14BufferLineView11is__wrapped(line), true, cells);
}
function _M0MP411feihaoxiang5xterm3src7browser11RenderModel22from__terminal_2einner(terminal, focused) {
  const active = _M0MP411feihaoxiang5xterm3src8headless15BufferNamespace6active(_M0MP411feihaoxiang5xterm3src8headless8Terminal6buffer(terminal));
  const cursor_x = _M0MP411feihaoxiang5xterm3src8headless10BufferView9cursor__x(active);
  const cursor_y = _M0MP411feihaoxiang5xterm3src8headless10BufferView9cursor__y(active);
  const rows_data = [];
  const _bind = 0;
  const _bind$2 = _M0MP411feihaoxiang5xterm3src8headless8Terminal4rows(terminal);
  let _tmp = _bind;
  while (true) {
    const y = _tmp;
    if (y < _bind$2) {
      const buffer_index = _M0MP411feihaoxiang5xterm3src8headless10BufferView11viewport__y(active) + y | 0;
      let row;
      let line;
      _L: {
        _L$2: {
          const _bind$3 = _M0MP411feihaoxiang5xterm3src8headless10BufferView9get__line(active, buffer_index);
          if (_bind$3 === undefined) {
            row = _M0FP411feihaoxiang5xterm3src7browser10blank__row(y, buffer_index, _M0MP411feihaoxiang5xterm3src8headless8Terminal4cols(terminal), cursor_x, cursor_y);
          } else {
            const _Some = _bind$3;
            const _line = _Some;
            line = _line;
            break _L$2;
          }
          break _L;
        }
        row = _M0FP411feihaoxiang5xterm3src7browser15row__from__line(line, y, buffer_index, _M0MP411feihaoxiang5xterm3src8headless8Terminal4cols(terminal), cursor_x, cursor_y);
      }
      _M0MPC15array5Array4pushGRP411feihaoxiang5xterm3src6common8ListenerGsEE(rows_data, row);
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP411feihaoxiang5xterm3src7browser11RenderModel(_M0MP411feihaoxiang5xterm3src8headless8Terminal4cols(terminal), _M0MP411feihaoxiang5xterm3src8headless8Terminal4rows(terminal), cursor_x, cursor_y, _M0MP411feihaoxiang5xterm3src8headless10BufferView11viewport__y(active), _M0MP411feihaoxiang5xterm3src8headless10BufferView7base__y(active), focused, rows_data);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal8snapshot(self) {
  return _M0MP411feihaoxiang5xterm3src7browser11RenderModel22from__terminal_2einner(self.headless, self.focused);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal4view(self) {
  const screen_id = _M0MPC16option6Option10unwrap__orGsE(self.screen_element_id, "mb-xterm-screen");
  const input_id = _M0MPC16option6Option10unwrap__orGsE(self.input_element_id, "mb-xterm-input");
  return _M0FP411feihaoxiang5xterm3src7browser22render__terminal__view(_M0MP411feihaoxiang5xterm3src7browser8Terminal8snapshot(self), screen_id, input_id);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal13input_2einner(self, data, was_user_input) {
  _M0MP411feihaoxiang5xterm3src8headless8Terminal13input_2einner(self.headless, data, was_user_input);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal12set__focused(self, value) {
  if (_M0IP016_24default__implPB2Eq10not__equalGbE(self.focused, value)) {
    self.focused = value;
    let element_id;
    _L: {
      const _bind = self.element_id;
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _element_id = _Some;
        element_id = _element_id;
        break _L;
      }
    }
    _M0FP411feihaoxiang5xterm3src7browser27set__terminal__focus__class(element_id, value);
    return;
  } else {
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal7refresh(self) {
  if (!self.disposed) {
    let element_id;
    _L: {
      const _bind = self.element_id;
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _element_id = _Some;
        element_id = _element_id;
        break _L;
      }
    }
    self.refresh_scheduled = false;
    const app = _M0FP219moonbit_2dcommunity7rabbita3new(_M0FP219moonbit_2dcommunity7rabbita12static__cell(_M0MP411feihaoxiang5xterm3src7browser8Terminal4view(self)));
    self.app = app;
    _M0MP219moonbit_2dcommunity7rabbita3App5mount(app, element_id);
    _M0MP411feihaoxiang5xterm3src7browser8Terminal22install__dom__handlers(self);
    if (self.focused) {
      let input_id;
      _L$2: {
        const _bind = self.input_element_id;
        if (_bind === undefined) {
          return;
        } else {
          const _Some = _bind;
          const _input_id = _Some;
          input_id = _input_id;
          break _L$2;
        }
      }
      _M0FP411feihaoxiang5xterm3src7browser22focus__terminal__input(input_id);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal22install__dom__handlers(self) {
  let element_id;
  _L: {
    const _bind = self.element_id;
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _element_id = _Some;
      element_id = _element_id;
      break _L;
    }
  }
  let input_id;
  _L$2: {
    const _bind = self.input_element_id;
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _input_id = _Some;
      input_id = _input_id;
      break _L$2;
    }
  }
  _M0FP411feihaoxiang5xterm3src7browser22bind__terminal__events(element_id, input_id, (data) => {
    _M0MP411feihaoxiang5xterm3src7browser8Terminal13input_2einner(self, data, true);
  }, (value) => {
    _M0MP411feihaoxiang5xterm3src7browser8Terminal12set__focused(self, value);
  }, (amount) => {
    _M0MP411feihaoxiang5xterm3src7browser8Terminal13scroll__lines(self, amount);
  });
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal13scroll__lines(self, amount) {
  _M0MP411feihaoxiang5xterm3src8headless8Terminal13scroll__lines(self.headless, amount);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal17schedule__refresh(self);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal17schedule__refresh(self) {
  if (!self.disposed) {
    const _bind = self.element_id;
    if (_bind === undefined) {
      return;
    } else {
      if (!self.refresh_scheduled) {
        self.refresh_scheduled = true;
        _M0FP411feihaoxiang5xterm3src7browser26request__terminal__refresh(() => {
          _M0MP411feihaoxiang5xterm3src7browser8Terminal7refresh(self);
        });
        return;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal4open(self, element_id) {
  self.element_id = element_id;
  self.screen_element_id = `${element_id}-screen`;
  self.input_element_id = `${element_id}-input`;
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7refresh(self);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal5focus(self) {
  self.focused = true;
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7refresh(self);
  let input_id;
  _L: {
    const _bind = self.input_element_id;
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _input_id = _Some;
      input_id = _input_id;
      break _L;
    }
  }
  _M0FP411feihaoxiang5xterm3src7browser22focus__terminal__input(input_id);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal8on__data(self, listener) {
  return _M0MP411feihaoxiang5xterm3src8headless8Terminal8on__data(self.headless, listener);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal13write_2einner(self, data, callback) {
  _M0MP411feihaoxiang5xterm3src8headless8Terminal13write_2einner(self.headless, data, () => {
    callback();
    _M0MP411feihaoxiang5xterm3src7browser8Terminal17schedule__refresh(self);
  });
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal5write(self, data, callback$46$opt) {
  let callback;
  if (callback$46$opt === undefined) {
    callback = () => {
    };
  } else {
    const _Some = callback$46$opt;
    callback = _Some;
  }
  _M0MP411feihaoxiang5xterm3src7browser8Terminal13write_2einner(self, data, callback);
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal15writeln_2einner(self, data, callback) {
  _M0MP411feihaoxiang5xterm3src8headless8Terminal15writeln_2einner(self.headless, data, () => {
    callback();
    _M0MP411feihaoxiang5xterm3src7browser8Terminal17schedule__refresh(self);
  });
}
function _M0MP411feihaoxiang5xterm3src7browser8Terminal7writeln(self, data, callback$46$opt) {
  let callback;
  if (callback$46$opt === undefined) {
    callback = () => {
    };
  } else {
    const _Some = callback$46$opt;
    callback = _Some;
  }
  _M0MP411feihaoxiang5xterm3src7browser8Terminal15writeln_2einner(self, data, callback);
}
function _M0FP411feihaoxiang5xterm8examples7browser11echo__input(terminal, data) {
  switch (data) {
    case "\r": {
      _M0MP411feihaoxiang5xterm3src7browser8Terminal5write(terminal, "\r\nmoonbit$ ", undefined);
      return;
    }
    case "\u007f": {
      _M0MP411feihaoxiang5xterm3src7browser8Terminal5write(terminal, "\b \b", undefined);
      return;
    }
    default: {
      _M0MP411feihaoxiang5xterm3src7browser8Terminal5write(terminal, data, undefined);
      return;
    }
  }
}
(() => {
  const terminal = _M0MP411feihaoxiang5xterm3src7browser8Terminal11new_2einner(_M0MP411feihaoxiang5xterm3src8headless15TerminalOptions3new(64, 14, 128, -1, undefined, undefined, undefined, undefined));
  _M0MP411feihaoxiang5xterm3src7browser8Terminal8on__data(terminal, (data) => {
    _M0FP411feihaoxiang5xterm8examples7browser11echo__input(terminal, data);
  });
  _M0MP411feihaoxiang5xterm3src7browser8Terminal5write(terminal, "\u001b[1;36mMoonBit xterm browser integration\u001b[0m\r\n", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7writeln(terminal, "Rabbita DOM renderer + headless terminal core", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7writeln(terminal, "", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7writeln(terminal, "\u001b[31mred\u001b[0m \u001b[32mgreen\u001b[0m \u001b[34mblue\u001b[0m \u001b[1mbold\u001b[0m \u001b[3mitalic\u001b[0m \u001b[4munderline\u001b[0m", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7writeln(terminal, "", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal7writeln(terminal, "Click the terminal, type, paste, or use the mouse wheel.", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal5write(terminal, "\r\nmoonbit$ ", undefined);
  _M0MP411feihaoxiang5xterm3src7browser8Terminal4open(terminal, "terminal");
  _M0MP411feihaoxiang5xterm3src7browser8Terminal5focus(terminal);
})();
//# sourceMappingURL=browser.js.map
