# Why use native UI ?
Most apps today have what is called branded UI. Think of Spotify, Blender and Adobe Photoshop. Their UIs are particular, but don't match with the rest of the system and thus look 'special' (a.k.a. it's branding).

For Capy, I decided to go with a true native UI, using win32 on Windows, gtk+ on Linux (it's the most used and supported UI on Linux), and eventually Cocoa on macOS.  

## Advantages

The main advantages are:
- **Free accesibility**: This is by far the most important point. You should never not care about accessibility. In Capy, by using native toolkits, accessibility comes for free and is also automatically improved at each system update. All that while also having perfect integration with external tools (screen readers, ...)
- **Integration**: If you have set dark mode or changed a theme or any other system preference, it simply gets applied to your app. No complex behaviours needed.
- **Decades of features**: Implementing a text control from scratch is very hard and will always miss some features (did you handle Insert key? Ctrl+V on selected text? Obscure KDE shortcuts?). Using native UI handles all that perfectly given it's the reference
- **Small overhead**: as all the logic and rendering code is already in your system, binary sizes are small and startup time is near zero.

Another advantage is familiarity, users shouldn't have to learn how to do things your way. Even if your dedign language only matches one platform, it's still better than none at all.

Because overall, full consistency across OSes is only for the developer's convenience, at the expense of the users.
Relatedly, Capy also attemps to be a "jack of all trades, master of none", because for an UI toolkit, it's very important to be able to do everything you want with small friction, rather than something in a specific mindset/architecture with no friction.
Because GUIs are complex, it's just the reality, and because the UI toolkit isn't specifically tailored for your application, there's no escape to it.

## Disadvantages

- **No branding**: You won't be able to force your design to your user

Capy also handles seamless cross-compilation despite using native UI toolkit, you can compile to Windows from Linux.

As a conclusion, I'm probably harsh and biased, but UX is much more important than UI. That is UI doesn't work alone, UI should help UX. Hence the term UI/UX. So stop making beautiful UIs that confuse users and let them have consistency, so that they don't have to relearn patterns for every app. Because applications are made for the users, not for the sake of being made quick and dirty. 