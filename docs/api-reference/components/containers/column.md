# Column
Shorthand function for creating a [Container](container.md) which uses `ColumnLayout` for its `layout` property.

ColumnLayout arranges items vertically.

---

Config is a struct of the following type:
```zig
struct {};
```

## Examples
```zig
capy.Column(.{}, .{
	capy.Button(.{ .label = "One" }),
	capy.Button(.{ .label = "Two" }),
})
```
