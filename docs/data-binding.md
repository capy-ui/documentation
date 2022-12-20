# Data binding and properties

Capy has a system of properties, which allow to easily do animations, data binding and other things.

This features revolves around the `DataWrapper(T)` struct, this struct also has a nice guarantee
as is automatically makes properties thread-safe.

The way some struct in Capy could have a property is like so:
```zig
const TestStruct = struct {
    int: DataWrapper(u32) = DataWrapper(u32).of(0)
};
```
Here we first see that to initialise a data wrapper, we use the `of(value: T)` function, simple enough.

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
We could also simply scale this to use threads as using a data wrapper is thread-safe.

## Change listeners

Now we can get to some more interesting things, it is possible to get notified every time
the value of a data wrapper changes (including when animating, at an arbitrary rate).

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
will print
```
value is now 5
value is now 3
```

## Binding
This means two data wrappers will always have the same value because when one changes,
the other changes too.
```zig
fn bind(other: *DataWrapper(T)) void
```

## Animations

Animations snapshot the current value of the data wrapper and take a given amount of time.

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
of easings is [easings.net](https://easings.net/)

To animate a value that isn't a number, like a struct, but also other containers like
unions, you need to implement the `fn lerp(a: T, b: T, t: f64) T)` function which should
perform a linear interpolation between `a` and `b` of the type you're implementing.

## Read-Modify-Write operations

You should lock, read and write the value manually.
