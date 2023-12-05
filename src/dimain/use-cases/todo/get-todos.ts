import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface AllTodosUseCase {
    execute(): Promise<TodoEntity[]>
}

export class AllTodos implements AllTodosUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) {}

    execute(): Promise<TodoEntity[]> {
        return this.repository.getAll();
    }

}