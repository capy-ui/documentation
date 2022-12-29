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
None

## Properties
Name | Description
---- | -----------
`color` | The color of the rectangle
`preferredSize` | Optional `Size` giving the preferred size of the rectangle

*Note: `color` doesn't have the getColor, setColor and bindColor functions yet, but it is a
`DataWrapper(Color)` field which means it can be animated easily*

*Note 2: `preferredSize` however is of type `?Size`*

## Examples
Example:
```zig
Rect(.{ .color = Color.yellow })
```
