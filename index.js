require("./async-iterator-setup.js");

require("core-js/actual/promise/index.js");
require("core-js/actual/symbol/index.js");
require("core-js/actual/async-iterator/drop.js");
require("core-js/actual/async-iterator/take.js");
require("core-js/actual/async-iterator/filter.js");
require("core-js/actual/async-iterator/map.js");

require("streams/factories/async-iterator.js");

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
