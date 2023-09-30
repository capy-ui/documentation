# Why was native UI chosen ?
Most apps today have what is called branded UI. Think of Spotify, Blender and Adobe Photoshop. Their UIs are particular, but don't match with the rest of the system and thus look 'special' (a.k.a. it's branding).

For Capy, I decided to go with a true native UI, using win32 on Windows, gtk+ on Linux (it's the most used and supported UI on Linux), and eventually Cocoa on macOS.  

## Advantages

The main advantages are:
- **Accesibility**: This is by far the most important point. You should never not care about accessibility. In Capy, by using native toolkits, accessibility comes easier than by other approaches and is can be improved at each system update. All that while also having good integration with external tools (screen readers, ...)
- **Integration**: If you have set dark mode or changed a theme or any other system preference, it simply gets applied to your app. No complex behaviours on your part is needed. Capy handles everything.
- **Decades of features**: Implementing a text control from scratch is [a hard problem](https://lord.io/text-editing-hates-you-too/) and will always miss some features (did you handle Insert key? Ctrl+V on selected text? Obscure KDE shortcuts?). Using native UI handles all that perfectly as on their target OS they are seen as the reference
- **Small overhead**: as all the logic and rendering code is already in your system, binary sizes are small and startup time is near zero.

Another advantage is familiarity, users shouldn't have to learn how to do things your way. Even if your design language only matches one platform, it's still better than none at all.

## Disadvantages

- **No branding**: You won't be able to force your design to your user

Capy also handles seamless cross-compilation. Despite using the native UI toolkit, you can compile to Windows from Linux.

UX is much more important than UI. That is UI doesn't work alone, UI should help UX. Hence the term UI/UX. Beautiful UIs do not matter if it confuses the users, consistency matters, so that they don't have to relearn patterns for every app.
