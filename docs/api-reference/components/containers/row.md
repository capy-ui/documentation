# Row
Shorthand function for creating a [Container](container.md) which uses `RowLayout` for its `layout` property.

RowLayout arranges items horizontally.

---

Config is a struct of the following type:
```zig
struct {
	expand: Expand = .No,
	/// How much spacing (in px) between elements
	spacing: u32 = 5,
	/// Should the Column wrap when there are too many elements?
	wrapping: bool = false,
};

const Expand = enum {
    /// Each child gets attributed its minimum size
    No,
    /// All children act like they're expanded, that is they take as much space as they can.
    Fill,
};
```

## Examples
```zig
capy.Row(.{}, .{
	capy.Button(.{ .label = "One" }),
	capy.Button(.{ .label = "Two" }),
})
```
