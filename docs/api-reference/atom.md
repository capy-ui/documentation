# Atom
Wrapper used to add binding, change listener, thread safety and animation capabilities to a value. It is used for all component properties.

For a guide on how to use it, see [Data binding and properties](../guides/data-binding).

---
Atom is a generic struct, which means you need to put the type `T` of your data in
`Atom(T)`.

Then you can use `Atom.of` in order to get a data wrapper for the given value.

With an `u64` this would look like:
```zig
var property = Atom(u64).of(123);
```

## Functions

Note that *Self* refers to *Atom(T)*

### animate

```zig
fn animate(self: *Self, easing: Easing, target: T, duration: u64) void
```
Easing is equivalent to `*const fn(f64) f64` (a function that takes a `f64` and returns a `f64`).

This function starts an animation on the Atom's value from the current value to
`target` and lasting `duration` milliseconds.

Capy has a few preset easings:
- `capy.Easings.Linear`
- [`capy.Easings.In`](https://easings.net/#easeInQuad)
- [`capy.Easings.Out`](https://easings.net/#easeOutQuad)
- [`capy.Easings.InOut`](https://easings.net/#easeInOutQuad)


### hasAnimation
```zig
fn hasAnimation(self: *Self) bool
```
Returns `true` if the Atom is currently in an animation.  
On the other hand it returns `false` if the animation ended or if there has been no animation.

### addChangeListener
```zig
fn addChangeListener(self: *Self, listener: ChangeListener) !usize
```

ChangeListener is defined to be
```zig
pub const ChangeListener = struct {
	function: *const fn (newValue: T, userdata: usize) void,
	userdata: usize = 0
};
```

The function is called with userdata every time the value of the Atom changes.

### bind
```zig
fn bind(self: *Self, other: *Self) void
```
Binds both data wrappers both ways. This means that `self` and `other` will always have the
same value.

### bindOneWay
```zig
fn bindOneWay(sender: *Self, receiver: *Self) void
```
Binds `receiver` to `sender`. Which means that when `sender` changes, `receiver` is
set to the new value, but when `receiver` changes, `sender` is not set to this new value.

### get
```zig
fn get(self: *Self) T
```
Returns the current value.

### set
```zig
fn set(self: *Self, value: T) void
```
Set the current value to `value`.
This will:
- clear the current animation, if any
- call all the change listeners
- update all data wrappers that are bound to it

### dependOn
```zig
fn dependOn(self: *Self, tuple: anytype, function: anytype) !void
```
This makes the value of this data wrapper entirely dependent
on the given parameters, it can only be reverted by calling set()

`tuple` must be a tuple with pointers to data wrappers

`function` must be a function accepting as arguments the value types of the data wrappers and returning a new value.

For example:
```zig
var a = Atom(u64).of(1);
var b = Atom([]const u8).of("Hello");

var c = Atom(u64).of(undefined);
try c.dependOn(.{ &a, &b }, cFunction);
// now c is equal to 6 because 1 + 5 = 6

fn cFunction(a: u64, b: []const u8) u64 {
	return a + b.len;
}

a.set(5);
// now c is equal to 10
b.set("no");
// and now c is equal to 7
```

### deinit
```zig
fn deinit(self: *Self) void
```
Deallocates all resources previously allocated by this Atom.

Must be called when its lifetime ends.
