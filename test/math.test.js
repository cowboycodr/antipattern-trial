import assert from "node:assert/strict";
import { add } from "../src/math.js";

assert.equal(add(1, 2), 3);
console.log("math tests passed");
