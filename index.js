import "./async-iterator-setup.js";

import "core-js/actual/promise/index.js";
import "core-js/actual/symbol/index.js";
import "core-js/actual/async-iterator/drop.js";
import "core-js/actual/async-iterator/take.js";
import "core-js/actual/async-iterator/filter.js";
import "core-js/actual/async-iterator/map.js";

import "streams/factories/async-iterator.js";

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
