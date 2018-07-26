import { Printer, addAndPrint } from "../src/02-print-result-ioc";
import { assert } from "chai";

describe("add and print", () => {

    it(`add and print`, () => {
        // arrange
        const x = 3;
        const y = 5;

        // build a implementation of printer
        class TestPrinter implements Printer {
            private _content: any;
            public get content(): any {
                return this._content;
            }

            public print(content: any): void {
                this._content = content;
            }
        }

        // action
        const printer = new TestPrinter();
        addAndPrint(x, y, printer);

        // assert
        assert.strictEqual(printer.content, 8);
    });

});