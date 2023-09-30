---
sidebar_position: 1
---

# Installation

This section will help you installing and being ready to use Capy on your computer, which is necessary before using it.

## Use in a new project

### GitHub

All you have to do is to go to the [zig-template repository](https://github.com/zenith391/capy-template)
and click the green 'Use this template' button and then create your repository as you would usually do on GitHub.

### Other git hosting provider

Otherwise, if you wish to use any other git hosting provider (such as [sourcehut](https://sr.ht))
you can execute the following commands in a newly created repository:
```sh
wget https://github.com/capy-ui/zig-template/archive/refs/heads/main.zip
unzip main.zip && rm main.zip
mv zig-template-main/* . && rm -r zig-template-main
```

## Use in an existing project

In your `build.zig`, add:
```diff
diff --git a/build.zig b/build.zig
--- a/build.zig
+++ b/build.zig
@@ -1,6 +1,7 @@
 const std = @import("std");
+const capy = @import("capy"); // the build script for capy

-pub fn build(b: *std.build.Builder) void {
+pub fn build(b: *std.build.Builder) !void {
     // Standard target options allows the person running `zig build` to choose
     // what target to build for. Here we do not override the defaults, which
     // means any target is allowed, and the default is native. Other options
@@ -11,7 +12,9 @@ pub fn build(b: *std.build.Builder) void {
     // between Debug, ReleaseSafe, ReleaseFast, and ReleaseSmall.
     const optimize = b.standardOptimizeOption(.{});

     const exe = b.addExecutable(.{
         .name = "Your Application",
         .root_source_file = .{ .path = "src/main.zig" },
         .target = target,
         .optimize = optimize
     });
     b.installArtifact(exe);

-    const run_cmd = b.addRunArtifact(exe);
-    run_cmd.step.dependOn(b.getInstallStep());
-    if (b.args) |args| {
-        run_cmd.addArgs(args);
-    }
+    const run_cmd = try capy.install(exe, .{ .args = b.args });

     const run_step = b.step("run", "Run the app");
     run_step.dependOn(&run_cmd.step);
```

Add the following in your `build.zig.zon` file
```zig
.dependencies = .{
  .capy = .{
    // Update the following URL whenever you want to upgrade capy !
    .url = "https://github.com/capy-ui/capy/archive/60fa439feda483611a4bf7767bab108e00a7a3d2.tar.gz",
    .hash = "12201751d2094cde9630bc080e6ce1d8982ff03bdd30a3103abd21321a8361a7e39d",
    //If you want to use the most current version of the master branch, use the url below.
    //Delete the '.hash = "...",'. Run 'zig build'. It will fail, providing you with the up-to-date hash.
  }
}
```
