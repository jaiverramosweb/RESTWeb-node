import express from 'express'
import path from 'path'

interface Options {
    port: number
}

export class Server {

    private app = express()
    private readonly port: number

    constructor(options: Options) {
        const { port } = options
        this.port = port
    }

    async start() {
        
        // Middlewares
        // Public folder
        this.app.use( express.static( 'public' ) )

        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + '../../../public/index.html')
            res.sendFile( indexPath )
        })

        this.app.listen( this.port, () => {
            console.log(`server running on port ${this.port}`)
        })

    }
}