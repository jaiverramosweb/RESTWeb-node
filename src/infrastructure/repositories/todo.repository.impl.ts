import { CreateTodoDto, TodoDatasource, TodoEntity, TodoRepository, UpdateTodoDto } from "../../dimain";


export class TodoReposirotyImpl implements TodoRepository {

    constructor(
        private readonly datasource: TodoDatasource
    ) {}

    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }

    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<TodoEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(updateTodoDto);
    }

    deleteteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteteById(id);
    }

}