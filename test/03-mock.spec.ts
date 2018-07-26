import { Task, TaskRepository, TaskService } from "../src/03-mock";
import { assert } from "chai";
import * as TypeMoq from "typemoq";

describe("mock", () => {

    it(`page index = 0, page size = 3 -> page index = 0, page size = 3`, async () => {
        // arrange
        const pageIndex = 0;
        const pageSize = 3;
        const repository = TypeMoq.Mock.ofType<TaskRepository>();
        repository.setup(x => x.findByPage(pageIndex, pageSize)).verifiable();
        const service = new TaskService(repository.object);

        // action
        await service.getTasks(pageIndex, pageSize);

        // assert
        repository.verifyAll();
    });

    it(`page index = -1, page size = 3 -> page index = 0, page size = 3`, async () => {
        // arrange
        const pageIndex = -1;
        const pageSize = 3;
        const repository = TypeMoq.Mock.ofType<TaskRepository>();
        repository.setup(x => x.findByPage(0, pageSize)).verifiable();
        const service = new TaskService(repository.object);

        // action
        await service.getTasks(pageIndex, pageSize);

        // assert
        repository.verifyAll();
    });

    it(`page index = 1, page size = 100-> page index = 1, page size = 20`, async () => {
        // arrange
        const pageIndex = 1;
        const pageSize = 100;
        const repository = TypeMoq.Mock.ofType<TaskRepository>();
        repository.setup(x => x.findByPage(pageIndex, 20)).verifiable();
        const service = new TaskService(repository.object);

        // action
        await service.getTasks(pageIndex, pageSize);

        // assert
        repository.verifyAll();
    });
});