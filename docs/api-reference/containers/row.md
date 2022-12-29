# Row
Shorthand function for creating a [Container](container.md) which uses `RowLayout` for its `layout` property.

RowLayout arranges items horizontally.

---

Config is a struct of the following type:
```zig
struct {};
```

## Examples
```zig
capy.Row(.{}, .{
	capy.Button(.{ .label = "One" }),
	capy.Button(.{ .label = "Two" }),
})
```
