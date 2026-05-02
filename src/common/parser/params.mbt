///|
const MaxValue : Int = 0x7FFFFFFF

///|
const MaxSubparams : Int = 256

///|
pub(all) enum ParamEntry {
  Param(Int)
  SubParams(Array[Int])
} derive(Eq, Debug)

///|
struct Params {
  max_length : Int
  max_subparams_length : Int
  params : Array[Int]
  sub_params : Array[Int]
  sub_param_starts : Array[Int]
  sub_param_ends : Array[Int]
  mut length : Int
  mut sub_params_length : Int
  mut reject_digits : Bool
  mut reject_sub_digits : Bool
  mut digit_is_sub : Bool
}

///|
pub fn Params::new(
  max_length? : Int = 32,
  max_subparams_length? : Int = 32,
) -> Params {
  guard max_subparams_length <= MaxSubparams else {
    abort("maxSubParamsLength must not be greater than 256")
  }
  {
    max_length,
    max_subparams_length,
    params: Array::make(max_length, 0),
    sub_params: Array::make(max_subparams_length, 0),
    sub_param_starts: Array::make(max_length, 0),
    sub_param_ends: Array::make(max_length, 0),
    length: 0,
    sub_params_length: 0,
    reject_digits: false,
    reject_sub_digits: false,
    digit_is_sub: false,
  }
}

///|
pub fn Params::from_array(values : Array[ParamEntry]) -> Params {
  let params = Params::new()
  if values.length() == 0 {
    return params
  }
  let mut start = 0
  match values[0] {
    SubParams(_) => start = 1
    _ => ()
  }
  for i = start; i < values.length(); i = i + 1 {
    match values[i] {
      Param(value) => params.add_param_unchecked(value)
      SubParams(subs) =>
        for value in subs {
          params.add_sub_param_unchecked(value)
        }
    }
  }
  params
}

///|
pub fn Params::max_length(self : Params) -> Int {
  self.max_length
}

///|
pub fn Params::max_subparams_length(self : Params) -> Int {
  self.max_subparams_length
}

///|
pub fn Params::length(self : Params) -> Int {
  self.length
}

///|
pub fn Params::sub_params_length(self : Params) -> Int {
  self.sub_params_length
}

///|
pub fn Params::param_at(self : Params, index : Int) -> Int {
  self.params[index]
}

///|
pub fn Params::params_slice(self : Params) -> Array[Int] {
  let result : Array[Int] = []
  for i = 0; i < self.length; i = i + 1 {
    result.push(self.params[i])
  }
  result
}

///|
fn clamp_param(value : Int) -> Int {
  if value > MaxValue {
    MaxValue
  } else {
    value
  }
}

///|
fn Params::add_param_unchecked(self : Params, value : Int) -> Unit {
  self.digit_is_sub = false
  if self.length >= self.max_length {
    self.reject_digits = true
    return
  }
  let start = self.sub_params_length
  self.sub_param_starts[self.length] = start
  self.sub_param_ends[self.length] = start
  self.params[self.length] = clamp_param(value)
  self.length += 1
}

///|
fn Params::add_sub_param_unchecked(self : Params, value : Int) -> Unit {
  self.digit_is_sub = true
  if self.length == 0 {
    return
  }
  if self.reject_digits || self.sub_params_length >= self.max_subparams_length {
    self.reject_sub_digits = true
    return
  }
  self.sub_params[self.sub_params_length] = clamp_param(value)
  self.sub_params_length += 1
  self.sub_param_ends[self.length - 1] += 1
}

///|
pub fn Params::clone(self : Params) -> Params {
  let cloned = Params::new(
    max_length=self.max_length,
    max_subparams_length=self.max_subparams_length,
  )
  for i = 0; i < self.max_length; i = i + 1 {
    cloned.params[i] = self.params[i]
    cloned.sub_param_starts[i] = self.sub_param_starts[i]
    cloned.sub_param_ends[i] = self.sub_param_ends[i]
  }
  for i = 0; i < self.max_subparams_length; i = i + 1 {
    cloned.sub_params[i] = self.sub_params[i]
  }
  cloned.length = self.length
  cloned.sub_params_length = self.sub_params_length
  cloned.reject_digits = self.reject_digits
  cloned.reject_sub_digits = self.reject_sub_digits
  cloned.digit_is_sub = self.digit_is_sub
  cloned
}

///|
pub fn Params::to_array(self : Params) -> Array[ParamEntry] {
  let result : Array[ParamEntry] = []
  for i = 0; i < self.length; i = i + 1 {
    result.push(Param(self.params[i]))
    let start = self.sub_param_starts[i]
    let end = self.sub_param_ends[i]
    if end - start > 0 {
      let sub_params : Array[Int] = []
      for j = start; j < end; j = j + 1 {
        sub_params.push(self.sub_params[j])
      }
      result.push(SubParams(sub_params))
    }
  }
  result
}

///|
pub fn Params::reset(self : Params) -> Unit {
  self.length = 0
  self.sub_params_length = 0
  self.reject_digits = false
  self.reject_sub_digits = false
  self.digit_is_sub = false
}

///|
pub fn Params::reset_zdm(self : Params) -> Unit {
  self.length = 1
  self.sub_params_length = 0
  self.reject_digits = false
  self.reject_sub_digits = false
  self.digit_is_sub = false
  self.sub_param_starts[0] = 0
  self.sub_param_ends[0] = 0
  self.params[0] = 0
}

///|
pub fn Params::add_param(self : Params, value : Int) -> Unit {
  guard value >= -1 else { abort("values lesser than -1 are not allowed") }
  self.add_param_unchecked(value)
}

///|
pub fn Params::add_sub_param(self : Params, value : Int) -> Unit {
  guard value >= -1 else { abort("values lesser than -1 are not allowed") }
  self.add_sub_param_unchecked(value)
}

///|
pub fn Params::has_sub_params(self : Params, index : Int) -> Bool {
  self.sub_param_ends[index] - self.sub_param_starts[index] > 0
}

///|
pub fn Params::get_sub_params(self : Params, index : Int) -> Array[Int]? {
  if !self.has_sub_params(index) {
    return None
  }
  let result : Array[Int] = []
  for i = self.sub_param_starts[index]
      i < self.sub_param_ends[index]
      i = i + 1 {
    result.push(self.sub_params[i])
  }
  Some(result)
}

///|
pub fn Params::get_sub_params_all(self : Params) -> Map[Int, Array[Int]] {
  let result : Map[Int, Array[Int]] = {}
  for i = 0; i < self.length; i = i + 1 {
    match self.get_sub_params(i) {
      Some(values) => result[i] = values
      None => ()
    }
  }
  result
}

///|
pub fn Params::add_digit(self : Params, value : Int) -> Unit {
  let length = if self.digit_is_sub {
    self.sub_params_length
  } else {
    self.length
  }
  if self.reject_digits ||
    length == 0 ||
    (self.digit_is_sub && self.reject_sub_digits) {
    return
  }
  let store = if self.digit_is_sub { self.sub_params } else { self.params }
  let current = store[length - 1]
  store[length - 1] = if current != -1 {
    if current > (MaxValue - value) / 10 {
      MaxValue
    } else {
      current * 10 + value
    }
  } else {
    value
  }
}

///|
pub fn Params::parse_zdm(self : Params, chunks : Array[String]) -> Unit {
  self.reset()
  self.add_param_unchecked(0)
  for chunk in chunks {
    let mut i = 0
    while i < chunk.length() {
      let mut code = chunk[i].to_int()
      while true {
        match code {
          0x3B => self.add_param_unchecked(0)
          0x3A => self.add_sub_param_unchecked(-1)
          _ => self.add_digit(code - 48)
        }
        i += 1
        if i >= chunk.length() {
          break
        }
        code = chunk[i].to_int()
        if !(code > 0x2F && code < 0x3C) {
          break
        }
      }
    }
  }
}
