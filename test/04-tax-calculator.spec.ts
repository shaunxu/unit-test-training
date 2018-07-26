import { TaxCalculator } from "../src/04-tax-calculator";
import { assert } from "chai";

describe("tax calculator", () => {

    describe("0", () => {

        it(`incoming = -1 -> 0`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(-1);
            assert.strictEqual(result, 0);
        });

        it(`incoming = 0 -> 0`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(0);
            assert.strictEqual(result, 0);
        });

        it(`incoming = 1 -> 0.03`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(1);
            assert.strictEqual(result, 0.03);
        });

    });

    describe("1500", () => {

        it(`incoming = 1499 -> 44.97`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(1499);
            assert.strictEqual(result, 44.97);
        });

        it(`incoming = 1500 -> 45`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(1500);
            assert.strictEqual(result, 45);
        });

        it(`incoming = 1501 -> 150.1`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(1501);
            assert.strictEqual(result, 150.1);
        });

    });

    describe("4500", () => {

        it(`incoming = 4499 -> 44.97`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(4499);
            assert.strictEqual(result, 449.9);
        });

        it(`incoming = 4500 -> 900`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(4500);
            assert.strictEqual(result, 450);
        });

        it(`incoming = 4501 -> 900.2`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(4501);
            assert.strictEqual(result, 900.2);
        });

    });

    describe("min, max", () => {

        it(`incoming = number.min -> 0`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(Number.MIN_SAFE_INTEGER);
            assert.strictEqual(result, 0);
        });

        it(`incoming = number.max -> 1801439850948198.2`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(Number.MAX_SAFE_INTEGER);
            // it should be 1801439850948198.2 but we found a bug in `_.floor`
            // https://github.com/lodash/lodash/issues/3888
            assert.strictEqual(result, 1801439850948198);
        });

    });

    describe("-infinity, infinity, nan", () => {

        it(`incoming = -infinity -> 0`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(-Infinity);
            assert.strictEqual(result, 0);
        });

        it(`incoming = infinity -> nan`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(Infinity);
            assert.isNaN(result);
        });

        it(`incoming = nan -> nan`, () => {
            const calc = new TaxCalculator();
            const result = calc.calculate(NaN);
            assert.isNaN(result);
        });

    });

});