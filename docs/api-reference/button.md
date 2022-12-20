# Button

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Config is a struct of the following type:
```zig
struct {
    /// The label the button will take. For example, if this is 'Test',
    /// the user will see a button which, at the center, has the text 'Test'
    label: [:0]const u8 = "",
    /// The callback that will be called when the button is pressed
    onclick: ?fn(button: *Button_Impl) = null
};
```

## Properties
Name | Description
---- | -----------
`label` | The text label which appears inside the button
`enabled` | Whether the button can be pressed or not, defaults to `true`.

## Example

<Tabs>
<TabItem value="zig" label="Zig">

```zig
fn onButtonClicked(button: *capy.Button_Impl) !void {
	button.setLabel("Stop!");
}

try window.set(
	capy.Button(.{ .label = "Click Me", .onclick = onButtonClicked })
);
```

</TabItem>
<TabItem value="c" label="C">

```c
CapyWidget button = capy_button("Hello");
```

</TabItem>
</Tabs>
