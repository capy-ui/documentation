# Data binding and properties

Capy has a system of properties, which allow to easily do animations, data binding and other things.

This features revolves around the `Atom(T)` struct, this struct also has a nice guarantee
as is automatically makes properties thread-safe.

The way some struct in Capy could have a property is like so:
```zig
const TestStruct = struct {
    int: Atom(u32) = Atom(u32).of(0)
};
```
Here we first see that to initialise an atom, we use the `of(value: T)` function, simple enough.

We can also set it and get it:
```zig
var testStruct = TestStruct {};
std.debug.print("int is {}\n", .{ testStruct.int.get() });
testStruct.int.set(5);
std.debug.print("int is now {}\n", .{ testStruct.int.get() });
```
which would print
```
int is 0
int is now 5
```
This scales simply with threads as using an atom is thread-safe.

## Change listeners

It is possible to get notified every time the value of a atom changes (including when animating, at
an arbitrary rate).

It can be used like so:
```zig
fn onChange(newValue: u32, userdata: usize) void {
    _ = userdata;
   std.debug.print("value is now {}\n", .{ newValue });
}

var testStruct = TestStruct {};
_ = try testStruct.int.addChangeListener(.{
    .function = onChange,
    .userdata = 0
});
testStruct.int.set(5);
testStruct.int.set(3);
```
which will print
```
value is now 5
value is now 3
```

## Binding
By binding two atoms together, they will always have the same value because when one changes, the
other changes too.
```zig
fn bind(other: *Atom(T)) void
```

## Animations

Animations snapshot the current value of the atom and realise a transition to a new value, while
taking a given amount of time.

It can be used like so:
```zig
testStruct.int.animate(capy.Easings.InOut, 1000);
```
where the duration is in milliseconds.

*Note: `capy.Easings.InOut`, `capy.Easings.In`... are actually functions that transform
the t parameter of the linear interpolation, for example Linear is*
```zig
fn Linear(t: f64) f64 {
    return t;
}
```
*It is thus trivial to implement your own easing function.* (a good reference library
of easings that you can implement is available [easings.net](https://easings.net/))

To animate a value that isn't a number, like a struct, but also other containers like
unions, you need to implement the `fn lerp(a: T, b: T, t: f64) T)` function which should
perform a linear interpolation between `a` and `b` of the type you're implementing.

## Read-Modify-Write operations

You should lock, read and write the value manually.
