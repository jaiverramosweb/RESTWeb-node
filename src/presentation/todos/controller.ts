import { Request, Response } from "express"

const todos = [
    {id:1, text: 'Hola'},
    {id:2, text: 'Hola 2'},
    {id:3, text: 'Hola 3'},
]

export class TodosController {

    constructor() {}

    public getTodos = (req:Request, res:Response) => {
        return res.json(todos)
    }

    public getTodoById = ( req:Request, res:Response ) => {

        const id = +req.params.id

        if (isNaN(id)) return res.status(400).json({ error: `ID argument is not a number` })

        const todo = todos.find( todo => todo.id === id)

        if ( !todo ) return res.status(404).json({ error: `Todo with id ${id} not found` })

        res.json( todo )
    }

    public createTodo = ( req:Request, res:Response ) => {

        const { text } = req.body
        if(!text) return res.status(400).json({ error: 'Text property is required' })

        const newTodo = {
            id: todos.length + 1,
            text: text
        }

        todos.push(newTodo)

        res.json( newTodo )
 
    }

    public updateTodo = ( req:Request, res:Response ) => {

        const id = +req.params.id
        if( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number' })
        
        const todo = todos.find(todo => todo.id === id)
        if( !todo ) return res.status(400).json({ error: 'Todo with id not found' })

        const { text } = req.body
        if(!text) return res.status(400).json({ error: 'Text property is required' })

        todo.text = text

        res.json( todo )

    }

    public deleteTodo = ( req:Request, res:Response ) => {
        const id = +req.params.id
        if( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number' })

        const todo = todos.find(todo => todo.id === id)
        if( !todo ) return res.status(400).json({ error: 'Todo with id not found' })

        todos.splice( todos.indexOf(todo), 1 )

        res.json( todo )

    }

}