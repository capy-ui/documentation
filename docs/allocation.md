# Memory Allocation

Capy, in contrast to other Zig projects, has a quite liberal usage of allocations within its code.
Most notably, UI allocations are made using only **one** allocator that stays constant for the
**lifetime of the application**.

## Rationale

### Why Have One (or two really) Constant Allocator ?
Because, realistically, you cannot mix multiple allocators in the GUI world, or you end up with
an unreasonable inefficiency, all for the sake of dubious benefits.

In Zig, having the choice of using multiple allocators is very useful. It allows to vary the type
of allocator chosen depending on the context of the code. For instance, you might use an [`ArenaAllocator`](https://ziglang.org/documentation/master/std/#std.heap.arena_allocator.ArenaAllocator)
when handling web requests, or a [`FixedBufferAllocator`](https://ziglang.org/documentation/master/std/#std.heap.FixedBufferAllocator)
in other situations.

But there is exactly one context that Capy handles: the GUI context, and there's no utility in
changing allocator between different components. Allocating a `Button` on an `ArenaAllocator` and
then allocating a `Container` on a `GeneralPurposeAllocator` would indeed be a fun exercise, but a
futile one. It would also make everything unneedlessly complex. What happens if I put that `Button`
in the `Container`, and then close the `ArenaAllocator` (which has the effect of also deallocating
`Button`) ?

This is a very complicated case to handle, and it would make multiple allocators a huge pain to
use anyways. Hence the choice to not allow them.

### Why Not Throw Errors On Memory Failure ?
This is a tradeoff that I decided early on in Capy's development. Given the platforms that Capy targets
(Desktop, Mobile, Web), memory allocation ought not to be a major concern. Thoses are platforms which
usually have several gigabytes of RAM and a virtual memory system. So the risk of having an out of
memory error is low to non-existent.  
Even if your application is memory-hungry, as long as you leave several megabytes available to Capy,
it shouldn't pose any problem.

> But even if out of memory errors almost never happen, why remove the ability to catch them ?

That's because I have to make tradeoffs for the sake of Developer Experience (making code easy to
read and easy to write), otherwise we'd end up having to manage every resource like in Assembly code.
In fact, Zig itself makes tradeoffs for DX (Developer Experience): it doesn't force you to handle
stack overflow error, you don't have to add a `catch` clause everytime you create a new variable.
Yet, stack overflows exist, rarely, but they do. But a tradeoff was necessary to make.

Capy is in the same situation, and so doesn't handle out of memory errors.

## Consequences

Capy currently has two allocators:
- `capy.lasting_allocator`, which you can override by setting `pub const capy_lasting_allocator = ...`
in your root file, is an allocator used for allocation that last (e.g. a `Button`)
- `capy.scratch_allocator`, which you can override by setting `pub const capy_scratch_allocator = ...`
in your root file, is an allocator used for short-lived small allocations (e.g. converting UTF-8
to UTF-16 in order to pass it on to win32)

(Note that I'm still wondering about the utility of `capy.scratch_allocator`, so it might be removed
later)

