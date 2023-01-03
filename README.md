# hello-zig-wasm

Toy project to demonstrate very primitive interop between Zig-compiled-to-Wasm and Javascript. Only calling exported Zig functions from JS (and not passing Javascript functions to Zig) because that's all I need for my larger project, but a simple toy like this still seemed like it would be useful for others to take a look at.

## Usage

Make sure you have a relatively up-to-date Zig and Node.js installed. I developed this with Zig 0.10.0 and Node.js v16.15.0. You'll also need make installed to use the Makefile provided.

With all three, you can compile the Zig code to Wasm and execute it in an WebAssembly environment (inside of Node.js) by running:

```sh
make hello
```