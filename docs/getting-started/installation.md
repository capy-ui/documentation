---
sidebar_position: 1
---

# Installation

This section will help you with installing and getting ready to use Capy on your computer.

## Use in a new project

### GitHub

All you have to do is to go to the [zig-template repository](https://github.com/zenith391/capy-template)
and click the green 'Use this template' button, which will allow you to create your repository as
you would usually do on GitHub.

### Other git hosting provider

Otherwise, if you wish to use any other git hosting provider (such as [sourcehut](https://sr.ht))
you can execute the following commands in a newly created repository:
```sh
wget https://github.com/capy-ui/zig-template/archive/refs/heads/main.zip
unzip main.zip && rm main.zip
mv zig-template-main/* . && rm -r zig-template-main
```

## Use in an existing project

Run the following command in a terminal:
```sh
zig fetch --save git+https://github.com/capy-ui/capy
```

In your `build.zig`, add:
```diff
diff --git a/build.zig b/build.zig
--- a/build.zig
+++ b/build.zig
@@ -1,6 +1,7 @@
 const std = @import("std");
+const build_capy = @import("capy"); // the build script for capy

-pub fn build(b: *std.build.Build) void {
+pub fn build(b: *std.build.Build) !void {
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

+    const capy_dep = b.dependency("capy", .{
+      .target = target,
+      .optimize = optimize,
+      .app_name = @as([]const u8, "Your Application"),
+    });
+    const capy = capy_dep.module("capy");
+    exe.root_module.addImport("capy", capy);

-    const run_cmd = b.addRunArtifact(exe);
-    run_cmd.step.dependOn(b.getInstallStep());
-    if (b.args) |args| {
-        run_cmd.addArgs(args);
-    }
+    const run_cmd = try build_capy.runStep(exe, .{ .args = b.args });

     const run_step = b.step("run", "Run the app");
     run_step.dependOn(&run_cmd.step);
```
