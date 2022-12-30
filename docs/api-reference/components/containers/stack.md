# Stack
Shorthand function for creating a [Container](container.md) which uses `StackLayout` for its `layout` property.

StackLayout stacks items on top of each other, with the first being at the bottom and the last being at the top.

---

It doesn't take a config.

## Examples
```zig
capy.Stack(.{
	// some kind of background at the back
	capy.Rect(.{ .color = capy.Color.yellow }),
	capy.Label(.{ .text = "I'm in between because why not" }),
	// and our component on top
	capy.Align(.{}, .{
		capy.Button(.{ .label = "I am the king of the world!" }),
	}),
})
```
