# TextArea
Editable multi-line text input box.

---

Config is a struct of the following type:
```zig
struct {
    /// The default text of the TextArea.
    text: [:0]const u8 = "",
};
```

## Functions
None specific to this component.

## Properties
Name | Type | Description
---- | ----- | -----------
`text` | `[]const u8` | The text this TextArea contains.


## Examples
```zig
TextArea(.{
	.text =
		\\ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		\\ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		\\ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		\\ Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
})
```
