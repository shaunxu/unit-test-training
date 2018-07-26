import { Task, TaskService } from "../src/04-task-service";
import { assert } from "chai";

describe("task service", () => {

    describe("success cases", () => {

        it(`title: normal, desc: normal -> code: 200, task returned`, () => {
            const expect = new Task("task title", "task description");
            const service = new TaskService();

            const actual = service.create(expect.title, expect.description);

            assert.strictEqual(actual.statusCode, 200);
            assert.deepStrictEqual(actual.body, expect);
        });

        it(`title: normal, desc: empty -> code: 200, task returned`, () => {
            const expect = new Task("task title", "");
            const service = new TaskService();

            const actual = service.create(expect.title, expect.description);

            assert.strictEqual(actual.statusCode, 200);
            assert.deepStrictEqual(actual.body, expect);
        });

        it(`title: normal, desc: undefined -> code: 200, task returned`, () => {
            const expect = new Task("task title");
            const service = new TaskService();

            const actual = service.create(expect.title, expect.description);

            assert.strictEqual(actual.statusCode, 200);
            assert.deepStrictEqual(actual.body, expect);
        });

    });

    describe("error (boundary values) cases", () => {

        it(`title: empty -> code: 4001, no task returned`, () => {
            const service = new TaskService();
            const actual = service.create("");
            assert.strictEqual(actual.statusCode, 4001);
            assert.isUndefined(actual.body);
        });

        it(`title: spaces -> code: 4001, no task returned`, () => {
            const service = new TaskService();
            const actual = service.create("    ");
            assert.strictEqual(actual.statusCode, 4001);
            assert.isUndefined(actual.body);
        });

        it(`title: 19 chars -> code: 200, task returned`, () => {
            const expect = new Task("1234567890123456789");
            const service = new TaskService();

            const actual = service.create(expect.title);

            assert.strictEqual(actual.statusCode, 200);
            assert.deepStrictEqual(actual.body, expect);
        });

        it(`title: 20 chars -> code: 200, task returned`, () => {
            const expect = new Task("12345678901234567890");
            const service = new TaskService();

            const actual = service.create(expect.title);

            assert.strictEqual(actual.statusCode, 200);
            assert.deepStrictEqual(actual.body, expect);
        });

        it(`title: 21 spaces -> code: 4002, no task returned`, () => {
            const service = new TaskService();
            const actual = service.create("123456789012345678901");
            assert.strictEqual(actual.statusCode, 4002);
            assert.isUndefined(actual.body);
        });

    });

});