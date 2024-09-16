# Async Iterator Helpers Demo

A demonstration of Async Iterator Helpers using core-js polyfills + babel + webpack.

Due to some intricacies around async generators, some setup is necessary to make the
following code work across modern and legacy runtimes (both server and web browser).

This repository deomnstrates how to make this work by providing a bootstrap script in
`async-iterator-setup.js` and a basic babel+webpack configuration to provide a 
proof-of-concept for transpiled environments as well.

```js
async function* gen() {
  yield* [1, 2, 3, 4, 5];
}

gen()
  .drop(1)
  .take(3)
  .filter(n => n != 3)
  .map(n => n * 10)
  .stream()
  .batch(2)
  .forEach(n => console.log(n));
```
