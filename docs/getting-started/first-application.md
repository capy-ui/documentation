# Hello World

The most basic Capy application is just a typical Zig program with a few lines required for Capy to work. For example:
```zig title="src/main.zig"
const capy = @import("capy");
pub usingnamespace capy.cross_platform;

pub fn main() !void {
    try capy.backend.init();
}
```
The use of `pub usingnamespace capy.cross_platform;` is useful for making your GUI work on some platform with
different ways of workings (think WebAssembly)

Using `capy.backend.init()` initializes the backend. For example the GTK+ backend must call `gtk_init` before using any of its functions, the win32 backend must get the `HINSTANCE` and init ComCtl, ...

To execute your application, you have to type the following command
```sh
zig build run
```

## Creating a window

Now it might be interesting for the program to actually do something, like displaying a window

For that we can init a window, set its size and display it. For example:
```zig title="src/main.zig"
const capy = @import("capy");
pub usingnamespace capy.cross_platform;

pub fn main() !void {
	var window = try capy.Window.init();

	window.setPreferredSize(800, 600);
	window.show();
	capy.runEventLoop();
}
```

Running this will show an empty window.  

![An empty window on KDE (Linux)](https://raw.githubusercontent.com/zenith391/zgt/master/.github/empty_window.png)

Also note the `capy.runEventLoop()` line, which is required to start the event loop so the application
can listen to the OS and not have an unresponsive window.

## Adding a button

This is nice, but an empty window is as useful as an unwearable shoe. So adding a button seems like the next
logical step.  
For that, we can use the `window.set()` function and the `Button` widget to see how to initialize a widget.

First, in `capy` you create a widget using a function. So for a button, we would use `Button( something here )`.
Widgets are configured using a single struct that is always placed first. For now, we will only use the `label` field.

This means we can easily have a labelled button `Button(.{ .label = "A Button" })`. Then we just need to put that button as argument to the `try window.set(anywidget)` function.

:::note

In the documentation, `anywidget`, which is implemented using `anytype`, refers to any widget constructed with their function or the [Widget](https://github.com/capy-ui/capy/wiki/Widget) type.

:::

So let's set `capy.Button(.{ .label = "A Button" })` as our window's widget:
```zig title="src/main.zig"
const capy = @import("capy");
pub usingnamespace capy.cross_platform;

pub fn main() !void {
	window.setPreferredSize(800, 600);
	try window.set(
    	capy.Button(.{ .label = "A Button" })
	);
	window.show();
}
```

![A window with a button saying "A Button" on KDE (Linux)](https://raw.githubusercontent.com/zenith391/zgt/master/.github/window_with_a_button.png)

For how to use Capy to make more things, you can look at the [available examples](https://github.com/zenith391/zgt/tree/master/examples) which feature animations ([colors.zig](https://github.com/zenith391/zgt/blob/master/examples/colors.zig)), custom components example ([graph.zig](https://github.com/zenith391/zgt/blob/master/examples/graph.zig)), and a [simple calculator](https://github.com/zenith391/zgt/blob/master/examples/calculator.zig).
