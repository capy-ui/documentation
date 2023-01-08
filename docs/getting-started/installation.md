---
sidebar_position: 1
---

# Installation

This section will help you installing and being ready to use Capy on your computer, which is necessary before using it.

## Use in a new project

**First step is to install the [zigmod](https://github.com/nektro/zigmod) package manager.**

### GitHub

All you have to do is to go to the [zig-template repository](https://github.com/zenith391/capy-template)
and click the green 'Use this template' button and then create your repository as you would usually do on GitHub.

Once done, go in the repository folder and execute
```sh
zigmod fetch
```

### Other git hosting provider

Otherwise, if you wish to use any other git hosting provider (such as [sourcehut](https://sr.ht))
you can execute the following commands in a newly created repository:
```sh
wget https://github.com/capy-ui/zig-template/archive/refs/heads/main.zip
unzip main.zip && rm main.zip
mv zig-template-main/* . && rm -r zig-template-main
zigmod fetch
```

## Use in an existing project

Before proceeding, you must first install the [zigmod](https://github.com/nektro/zigmod) package manager.
Then, in the folder of your project,
you can execute the following commands:
```sh
zigmod init
```
In your `build.zig`, add:
```diff
diff --git a/usr/bin/ziglang/lib/zig/init-exe/build.zig b/build.zig
index 29b50b5..ccbb74b 100644
--- a/usr/bin/ziglang/lib/zig/init-exe/build.zig
+++ b/build.zig
@@ -1,6 +1,7 @@
 const std = @import("std");
+const deps = @import("deps.zig");

-pub fn build(b: *std.build.Builder) void {
+pub fn build(b: *std.build.Builder) !void {
     // Standard target options allows the person running `zig build` to choose
     // what target to build for. Here we do not override the defaults, which
     // means any target is allowed, and the default is native. Other options
@@ -11,7 +12,9 @@ pub fn build(b: *std.build.Builder) void {
     // between Debug, ReleaseSafe, ReleaseFast, and ReleaseSmall.
     const mode = b.standardReleaseOptions();

-    const exe = b.addExecutable("$", "src/main.zig");
+    const exe = b.addExecutable("capy-template", "src/main.zig");
     exe.setTarget(target);
     exe.setBuildMode(mode);
+    try deps.imports.capy.install(exe, .{});
     exe.install();
```
And in your `zigmod.yml` file, add:
```diff
diff --git a/default_zigmod.yml b/zigmod.yml
index e39f6f1..4774adb 100644
--- a/default_zigmod.yml
+++ b/zigmod.yml
@@ -2,4 +2,6 @@ id: Random ID
 name: Your app name
 license: Your license
 description: A description.
+build_dependencies:
+    - src: git https://github.com/zenith391/capy
 root_depedencies:
```
Ensure that [zigmod](https://github.com/nektro/zigmod) package manager is installed.
Then you can execute the following commands:
```sh
zigmod fetch
```
