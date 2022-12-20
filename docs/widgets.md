# Widgets
## What are widgets?

Widgets in Capy are represented in two ways due to lack of OOP:
- The actual widget (Button, TextArea...) , which we will now call the **component** and which is first stored in the stack (with your window.set call) and then stored in heap when properly initialised.
- The generic widget, which we will now call the **widget**, is represented by the `capy.Widget` struct which contains a pointer to the component's class and data and some other properties.

## Functions

To check if a widget is backing a given component, the following code can be used:
```zig
if (widget.is(Button_Impl)) { // is the widget representing a button?
    // ...
}
```

Similarly, if you're sure a widget represents a button, you can do
```zig
const button: *Button_Impl = widget.as(Button_Impl);
```

And finally,
```zig
if (widget.is(Button_Impl)) {
    const button = widget.as(Button_Impl);
    // ...
}
```
can be shortened to
```zig
if (widget.cast(Button_Impl)) |button| {
    // ...
}
```

## Functions
Each component shares the following functions:

Name | Description
---- | -----------
`fn getWidth() u32` | Returns the width of the component, in pixels
`fn getHeight() u32` | Returns the height of the component, in pixels
`fn asWidget() anyerror!Widget` | Returns a new widget linked to a copy of the component, if it is known that the component already has a widget, then `error.ComponentAlreadyHasWidget` is returned
`fn setUserdata(userdata: ?*anyopaque)` | Sets the userdata of the component to the given pointer (all pointers automatically cast to `?*anyopaque`) for later retrieval
`fn getUserdata(comptime T: type)` | Returns the userdata as a pointer of type T (e.g. `*u32` or `*const Widget`)
`fn getWidget() ?*Widget` | If the component is associated with a (generic) Widget, returns it
`fn getParent() ?*Container_Impl` | Returns the direct parent of this component, or null if it doesn't have one. The result is Container_Impl and not Widget as only a Container can be the parent of other components.
`fn getRoot() ?*Container_Impl` | Goes up the widget tree (by taking the parent) until we're on a widget with no parent, that is, the root, and returns it. The widget tree's root is usually the one that was set with `window.set()`. Returns null if the component is unparented.

Each component also shares the following properties (alongside their respective `get`, `set` and `bind` functions):

Name | Description
---- | -----------
`opacity: f64` | The opacity of the component from 0 to 1. Thus, 0 means the component is fully transparent while 1 means it is opaque.
`alignX: ?f32` | If there is more available size than preferred size and the widget is not expanded,this will determine where will the widget be located horizontally.
`alignY: ?f32` | If there is more available size than preferred size and the widget is not expanded,this will determine where will the widget be located vertically.
`name: ?[]const u8` | The name of the widget. It is generally used for the `Container.get()` method. *Note it doesn't have a `bindName` method*

## Handlers
Every component can also have multiple handlers for different kinds of events.

(`T` is the type of the component)

Name | Callback type | Description
---- | ------------- | -----------
`addClickHandler` | `fn (widget: *T) anyerror!void` | Called on button click (only for Button)
`addDrawHandler` | `fn (widget: *T, ctx: *Canvas_Impl.DrawContext) anyerror!void` | Called when needing to draw (only for Canvas)
`addMouseButtonHandler` | `fn (widget: *T, button: MouseButton, pressed: bool, x: u32, y: u32) anyerror!void` | Called when a mouse button is pressed (`pressed = true`) or released (`pressed = false`)
`addMouseMotionHandler` | `fn (widget: *T, x: u32, y: u32) anyerror!void` | Called when the mouse is moved
`addScrollHandler` | `fn (widget: *T, dx: f32, dy: f32) anyerror!void` | Called when the mouse wheel has moved, indicating scroll. Unit of `dx` and `dy` is arbitrary but usually is in number of 'ticks' or 'lines' scrolled
`addResizeHandler` | `fn (widget: *T, size: Size) anyerror!void` | Called when the component is resized
`addKeyTypeHandler` | `fn (widget: *T, key: []const u8) anyerror!void` | Called when a character is pressed. `key` is the UTF-8 encoding of the character
