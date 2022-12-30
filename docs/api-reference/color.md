# Color
8-bit sRGB color with transparency as 32 bits ordered RGBA

---

You can create a color at compile-time (meaning there's no parsing at runtime) using `comptimeFromString`:
```zig
const color = Color.comptimeFromString("#694200");
```

This means that if the color is wrong, a compile error will be thrown:
```zig
const color = Color.comptimeFromString("hello, world");
```
will throw during compile
```
error: 'hello, world' is not a valid color
```

You can also create a color at run-time using `fromString`, note that this function may throw an error (which can be `error.NotSupported` or `error.InvalidLength`).

Both functions only accept two syntaxes:
- RGB hex (e.g. `#694200` to get `{ .red = 0x69, .green = 0x42, .blue = 0x00 }`)
- RGBA hex (e.g. `#69420088` to get `{ .red = 0x69, .green = 0x42, .blue = 0x00, .alpha = 0x88 }`)

At last, a Color can be created by filling in the struct fields manually:
```zig
const color = Color { .red = 0x69, .green = 0x42, .blue = 0x00, .alpha = 0x88 };
```

---

Colors can be linearly interpolated using `capy.lerp(colorA, colorB, t)` or `Color.lerp(colorA, colorB, t)`.
The former is preferred.  
Currently this interpolation happens in the sRGB color space, but this is subject to changes in the following
versions.

## Preset colors

All the following colors can be accessed quickly using declarations (e.g. `Color.maroon` or `Color.red`).

- maroon (#800000) <div style={{width: '3em', height: '3em', backgroundColor: '#800000'}}></div>
- red (#ff0000) <div style={{width: '3em', height: '3em', backgroundColor: '#ff0000'}}></div>
- orange (#ffa500) <div style={{width: '3em', height: '3em', backgroundColor: '#ffa500'}}></div>
- yellow (#ffff00) <div style={{width: '3em', height: '3em', backgroundColor: '#ffff00'}}></div>
- lime (#00ff00) <div style={{width: '3em', height: '3em', backgroundColor: '#00ff00'}}></div>
- green (#008000) <div style={{width: '3em', height: '3em', backgroundColor: '#008000'}}></div>
- olive (#808000) <div style={{width: '3em', height: '3em', backgroundColor: '#808000'}}></div>
- aqua (#00ffff) <div style={{width: '3em', height: '3em', backgroundColor: '#00ffff'}}></div>
- teal (#008080) <div style={{width: '3em', height: '3em', backgroundColor: '#008080'}}></div>
- blue (#0000ff) <div style={{width: '3em', height: '3em', backgroundColor: '#0000ff'}}></div>
- navy (#000080) <div style={{width: '3em', height: '3em', backgroundColor: '#000080'}}></div>
- fuchsia (#ff00ff) <div style={{width: '3em', height: '3em', backgroundColor: '#ff00ff'}}></div>
- purple (#800080) <div style={{width: '3em', height: '3em', backgroundColor: '#800080'}}></div>
- black (#000000) <div style={{width: '3em', height: '3em', backgroundColor: '#000000'}}></div>
- gray (#808080) <div style={{width: '3em', height: '3em', backgroundColor: '#808080'}}></div>
- silver (#c0c0c0) <div style={{width: '3em', height: '3em', backgroundColor: '#c0c0c0'}}></div>
- white (#ffffff) <div style={{width: '3em', height: '3em', backgroundColor: '#ffffff'}}></div>
- transparent (#00000000) <div style={{width: '3em', height: '3em', backgroundColor: '#00000000', border: '1px solid'}}></div>