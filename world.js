const fs = require('fs');
const mod = new WebAssembly.Module(fs.readFileSync('hello.wasm'))
const inst = new WebAssembly.Instance(mod, {});

let ptr = inst.exports.hello();
// *Must* be done afterwards to have access to the newly-grown memory, if that happens
const arr = new Uint8Array(inst.exports.memory.buffer);
const chars = [];
for (let i = ptr; i < arr.length; i++) {
  if (arr[i] === 0) break;
  chars.push(String.fromCharCode(arr[i]));
}
console.log(chars.join(''));