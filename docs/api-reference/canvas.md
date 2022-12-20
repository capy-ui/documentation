# Canvas
Arbitrary size area on which the application may draw any content.

It also has the particularity of being the only component on which the
draw handler works.

## Instantiation function
Example:
```zig
Canvas(.{})
    .addDrawHandler(drawCanvas);
```
Config is a struct of the following type:
```zig
struct {};
```

## Functions
None

## Properties
Name | Description
---- | -----------
`preferredSize` | Optional `Size` giving the preferred size of the canvas

*Note: `preferredSize` has not yet been migrated to use DataWrapper*

## DrawContext
This is what is given to the handler to the `addDrawHandler` function

```zig
pub fn setColorByte(self: *DrawContext, color: capy.Color) void;

pub fn setColor(self: *DrawContext, r: f32, g: f32, b: f32) void;

pub fn clear(self: *DrawContext, x: u32, y: u32, w: u32, h: u32) void {

// Path functions

/// Add a rectangle to the current path
pub fn rectangle(self: *DrawContext, x: u32, y: u32, w: u32, h: u32) void;

pub fn ellipse(self: *DrawContext, x: u32, y: u32, w: f32, h: f32) void;

pub fn text(self: *DrawContext, x: i32, y: i32, layout: TextLayout, str: []const u8) void;

pub fn line(self: *DrawContext, x1: u32, y1: u32, x2: u32, y2: u32) void;

/// Stroke the current path and reset the path.
pub fn stroke(self: *DrawContext) void;

/// Fill the current path and reset the path.
pub fn fill(self: *DrawContext) void;
```