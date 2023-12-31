import { Router } from "express";
import { TodoRoutes } from "./todos/routes";



export class AppRoutes {

    static get routes(): Router {

        const route = Router()

        route.use('/api/todos', TodoRoutes.routes)

        return route
    }

}