class Task {

    constructor(
        title: string,
        description: string
    ) {
    }

}

interface TaskRepository {

    findByPage(pageIndex: number, pageSize: number): Promise<Task[]>;

}

class TaskService {

    private _repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this._repository = repository;
    }

    async getTasks(pageIndex: number, pageSize: number): Promise<Task[]> {
        if (pageIndex < 0) {
            pageIndex = 0;
        }
        if (pageSize <= 0 || pageSize > 20) {
            pageSize = 20;
        }
        return await this._repository.findByPage(pageIndex, pageSize);
    }
}

export { Task, TaskRepository, TaskService };