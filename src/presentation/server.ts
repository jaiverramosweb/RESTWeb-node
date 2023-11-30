import express, { Router } from 'express'
import path from 'path'

interface Options {
    port: number
    routes: Router
}

export class Server {

    private app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(options: Options) {
        const { port, routes } = options
        this.routes = routes
        this.port = port
    }

    async start() {
        
        //* Middlewares
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: true }) )

        //* Public folder
        this.app.use( express.static( 'public' ) )

        //* Routes
        this.app.use( this.routes )

        //* SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + '../../../public/index.html')
            res.sendFile( indexPath )
        })

        this.app.listen( this.port, () => {
            console.log(`server running on port ${this.port}`)
        })

    }
}