---
sidebar_position: 0
---
# Container
Component which is capable of holding other components inside of it.

It is not instantiated directly, instead you must use shorthands like [Row](row.md), [Column](column.md) or [Stack](stack.md).

## Functions
### getChildAt
```zig
fn getChildAt(self: *Container_Impl, n: usize) !*Widget
```
This function returns the *n-th* child of the container, counting from 0. If *n* is too big for the component, the function returns `error.OutOfBounds`.

Usage:
```zig
const container = try capy.Row(.{}, .{
	capy.Button(.{ .label = "A" }),
	capy.Button(.{ .label = "B" }),
	capy.Button(.{ .label = "C" }),
});

const child = try container.getChildAt(2);
// 'child' holds a pointer to capy.Button(.{ .label = "C" })
```

### getChild
```zig
fn getChild(self: *Container_Impl, name: []const u8) ?*Widget
```
This function searches recursively for a component named `name`. It returns the first it finds. If no component is found, it returns `null`.

Usage:
```zig
const container = try capy.Column(.{}, .{
	capy.CheckBox(.{ .name = "me" }),
});

// In Zig, '.?' is equivalent to 'orelse unreachable'
const child = container.getChild("me").?;
// 'child' holds a pointer to capy.CheckBox(.{ .name = "me" })
```

### getChildAs
```zig
fn getChildAs(self: *Container_Impl, comptime T: type, name: []const u8) ?*T
```
This function is a shorthand that is equivalent to:
```zig
container.getChild(name).as(T);
```

### relayout
```zig
fn relayout(self: *Container_Impl) void
```
This function forces the container to trigger a re-layout. That is call the layouter and reposition and resize its children.  
It shouldn't need to be called as all functions that affect a child's position should also trigger a relayout. If it doesn't please [file an issue](https://github.com/capy-ui/capy/issues).

### add
```zig
fn add(self: *Container_Impl, widget: anytype) !void
```
This function adds the given component to the container.

Example:
```zig
container.add(
	capy.Button(.{ .label = "Hello, World!" })
);
```

### removeByIndex
```zig
fn removeByIndex(self: *Container_Impl, index: usize) void
```
This function removes the component at the given index. Basically, this removes the component that would otherwise have been returned by `getChildAt()`.

### removeAll
```zig
fn removeAll(self: *Container_Impl) void
```
This function removes all children from thz container.


## Properties
Name | Description
---- | -----------
`layout` | The function that handles layouting

## Examples
```zig
Canvas(.{})
    .addDrawHandler(drawCanvas);
```
