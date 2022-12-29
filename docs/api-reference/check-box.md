# CheckBox
A little box you can check or leave unmarked.

It is mainly used to select or deselect one item from a list of multiple items
that the user can choose from.

---

Config is a struct of the following type:
```zig
struct {
    /// Whether the check box has a small tick inside
    /// ☒ true
    /// ☐ false
    checked: bool = false,
    /// The label that shows next to your check box
    label: []const u8 = "",
    /// Whether the user can interact with the check box or not
    enabled: bool = true,
};
```

## Functions
*No non-property functions specific to CheckBox... yet*

## Properties
Name | Type | Description
---- | ----- | -----------
`label` | `[]const u8` | The label that shows next to your check box
`checked` | `bool` | Whether the check box has a small tick inside
`enabled` | `bool` | Whether the user can interact with the check box or not

## Examples
```zig
CheckBox(.{ .label = "Be awesome" })
```
