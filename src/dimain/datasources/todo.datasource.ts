import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";

export abstract class TodoDatasource {

    abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntity>;

    //todo: patinatión
    abstract getAll(): Promise<TodoEntity[]>;

    abstract findById( id: number ): Promise<TodoEntity>;

    abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>;
 
    abstract deleteteById( id: number ): Promise<TodoEntity>;

}