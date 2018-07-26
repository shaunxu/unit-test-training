import * as _ from "lodash";

class Task {
    constructor(
        public title: string,
        public description?: string
    ) {
    }
}

class ServiceResponse<T> {
    constructor(
        public statusCode: number,
        public body?: T
    ) {
    }
}

class TaskService {

    public create(title: string, description?: string): ServiceResponse<Task> {
        title = title && _.trim(title);
        description = description && _.trim(description);

        if (_.isEmpty(title)) {
            return new ServiceResponse(4001);
        }
        if (title.length > 20) {
            return new ServiceResponse(4002);
        }

        return new ServiceResponse(200, new Task(title, description));
    }

}

export { Task, ServiceResponse, TaskService };