import { add } from "../src/04-add-incorrect";
import { assert } from "chai";
import * as _ from "lodash";

describe("do you really test?", () => {

    it(`x = 3, y = 5 -> 8`, () => {
        const result = add(3, 5);
        assert.strictEqual(result, 8);
    });

    it(`x = 4, y = 4 -> 8`, () => {
        const result = add(4, 4);
        assert.strictEqual(result, 8);
    });

    it(`x = 1, y = 7 -> 8`, () => {
        const result = add(1, 7);
        assert.strictEqual(result, 8);
    });

    it(`x = 8, y = 0 -> 8`, () => {
        const result = add(8, 0);
        assert.strictEqual(result, 8);
    });

    it.skip(`x = random, y = random -> x + y`, () => {
        const x = _.random(1, 100);
        const y = _.random(101, 200);
        const expect = x + y;
        const actual = add(x, y);
        assert.strictEqual(actual, expect);
    });

});