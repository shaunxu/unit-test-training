import { assert, expect, default as chai } from "chai";
import { add } from "../src/01-simple-fn";

chai.should();

describe(`#1-simple-fn (chai)`, () => {

    it(`assert style: x = 3, y = 5 -> result = 8`, () => {
        const x = 3;
        const y = 5;
        const result = add(x, y);

        assert.strictEqual(result, 8);
    });

    it(`should style: x = 3, y = 5 -> result = 8`, () => {
        const x = 3;
        const y = 5;
        const result = add(x, y);
        
        result.should.equals(8);
    });

    it(`expect style: x = 3, y = 5 -> result = 8`, () => {
        const x = 3;
        const y = 5;
        const result = add(x, y);

        expect(result).to.equal(8);
    });

    it(`3a`, () => {
        // arrange
        const x = 3;
        const y = 5;

        // action
        const result = add(x, y);

        // assert
        assert.strictEqual(result, 8);
    });

});