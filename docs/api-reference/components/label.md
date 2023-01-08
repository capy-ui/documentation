# Label
Label only containing text for the user to view.

---

Config is a struct of the following type:
```zig
struct {
    const TextAlignment = enum { Left, Center, Right };
    /// The text the label will take. For example, if this is 'Example',
    /// the user will see the text 'Example'.
    text: [:0]const u8 = "",
    /// Defines how will the text take up the available space horizontally
    alignment: TextAlignment = .Center
};
```

## Functions
Name | Description
---- | -----------
`fn getText() [:0]const u8` | Gets the text
`fn setText(label: [:0]const u8) void` | Sets the text

## Properties
Name | Type | Description
---- | ----- | -----------
`text` | `[]const u8` | The text this Label contains
`alignment` | `TextAlignment` | How will the text occupy the available horizontal space

## Examples
```zig
Label(.{ .text = "Test Label" })
```
