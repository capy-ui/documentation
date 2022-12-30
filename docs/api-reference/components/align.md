# Align

Component used to center or align a child component.

---

Config is a struct of the following type:
```zig
struct {
	x: f32 = 0.5,
	y: f32 = 0.5,
};
```

## Functions
None specific to this component.

## Properties
Name | Type | Description
---- | ---- | -----------
`x`  | `f32`| The horizontal alignment of the child component
`y`  | `f32`| The vertical alignment of the child component

## Examples
Using its default values, `Align` will center the enclosed component.
```zig
Align(.{}, Button(.{ .label = "Hi" }))
```
will put out a centered button

The `x` and `y` properties range from 0 to 1.

0 corresponds to left/top, 0.5 to middle and 1 to right/bottom.

For example,
```zig
Align(
	.{ .x = 0, .y = 1 },
	Button(.{ .label = "Bloody hell" }),
)
```
will align the button to the bottom-left.

## Playground

Here's a playground showing how `Align` works with a button in a 200x200 rectangle.

import AlignExample from '@site/src/components/AlignExample';

<AlignExample />
