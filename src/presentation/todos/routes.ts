import { Router } from "express";
import { TodosController } from "./controller";



export class TodoRoutes {

    static get routes(): Router {

        const route = Router()

        const todoController = new TodosController()

        route.get('/', todoController.getTodos)
        route.get('/:id', todoController.getTodoById)
        route.post('/', todoController.createTodo)
        route.put('/:id', todoController.updateTodo)
        route.delete('/:id', todoController.deleteTodo)

        return route
    }

}