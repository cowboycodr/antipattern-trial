import assert from "node:assert/strict";
import { add, multiply } from "../src/math.js";

assert.equal(add(1, 2), 3);
assert.equal(multiply(3, 4), 12);
console.log("math tests passed");
