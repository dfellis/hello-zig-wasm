hello.wasm: hello.zig
	zig build-lib hello.zig -target wasm32-freestanding-none -dynamic -O ReleaseSmall -rdynamic

hello: hello.wasm
	node world.js

clean:
	git clean -ffdx
