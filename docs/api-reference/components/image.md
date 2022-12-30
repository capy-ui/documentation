# Image
Displays the image from an [ImageData](../image-data) as a component on the screen.

---

Config is a struct of the following type:
```zig
struct {
    /// The image to display
    data: ImageData,
	/// How to scale the image to fit the component's size
	scaling: Scaling = .Fit,
};

pub const Scaling = enum {
	/// Keep the original size of the image
	None,
	/// Scale the image while keeping the aspect ratio,
	/// even if it does not use all of the component's space
	Fit,
	/// Scale the image without keeping the aspect ratio which may
	/// cause the image to look distorted.
	Stretch,
};
```

## Functions
None specific to this component.

## Properties
Name | Type | Description
---- | ----- | -----------
`data` | `ImageData` | The image to display
`scaling` | `Scaling` | How to scale the image to fit the component's size
