# TextField
Editable one-line text input box.

---

Config is a struct of the following type:
```zig
struct {
    /// The default text of the TextField. For example, if this is 'Test',
    /// the user will see an input text field which will already have 'Test' written.
    text: [:0]const u8 = "",
};
```

## Functions
*No non-property functions specific to TextField... yet*

## Properties
Name | Type | Description
---- | ----- | -----------
`text` | `[]const u8` | The text this TextField contains.
`readOnly` | `bool` | Whether the TextField is read-only

Reminder: each property has get, set and bind methods, so there are `getText() []const u8`, `setText([]const u8)` and
`bindText(DataWrapper([]const u8))` functions.  
And similarly for `readOnly`

## Examples
```zig
TextField(.{})
```
