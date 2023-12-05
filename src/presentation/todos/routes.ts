import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoReposirotyImpl } from "../../infrastructure/repositories/todo.repository.impl";



export class TodoRoutes {

    static get routes(): Router {

        const route = Router()

        const datasource = new TodoDatasourceImpl();
        const todoRepository = new TodoReposirotyImpl( datasource );
        const todoController = new TodosController( todoRepository );

        route.get('/', todoController.getTodos)
        route.get('/:id', todoController.getTodoById)
        
        route.post('/', todoController.createTodo)
        route.put('/:id', todoController.updateTodo)
        route.delete('/:id', todoController.deleteTodo)

        return route
    }

}