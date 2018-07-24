import { add } from "../src/#1-simple-fn";
import { AssertionError } from "assert";

describe(`#1-simple-fn`, () => {

    it(`x = 3, y = 5 -> result = 8`, () => {
        const x = 3;
        const y = 5;
        const result = add(x, y);
        if (result === 8) {
            // do nothing since it pass the test
        }
        else {
            throw new AssertionError({
                actual: result,
                expected: 8,
                operator: "==="
            });
        }
    });

    it(`x = 0, y = 0 -> result = 0`, () => {
        const x = 0;
        const y = 0;
        const result = add(x, y);
        if (result === 0) {
            // do nothing since it pass the test
        }
        else {
            throw new AssertionError({
                actual: result,
                expected: 0,
                operator: "==="
            });
        }
    });

});