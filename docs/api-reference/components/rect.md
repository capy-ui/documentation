# Rect
Arbitrary size area which is filled with a given color.

*This widget extends [Canvas](/docs/api-reference/canvas).*

---

Config is a struct of the following type:
```zig
struct {
    /// The color the rectangle will be filled with
    color: Color = Color.black,
    /// The preferred size of the rectangle, or null to
    /// take the least area available.
    size: ?Size = null,
};
```

## Functions
None specific to this component.

## Properties
Name | Type | Description
---- | ---- | -----------
`color` | `Color` | The color of the rectangle
`preferredSize` | `?Size` | Optional `Size` giving the preferred size of the rectangle

## Examples
Example:
```zig
Rect(.{ .color = Color.yellow })
```
