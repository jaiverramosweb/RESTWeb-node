import fs from 'fs'
import http2 from 'http2'

const server = http2.createSecureServer( {
    key: '',
    cert: '',
}, ( req, res ) => {
    if ( req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8')
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end( htmlFile )
        return
    } 

})

server.listen(3000, () => {
    console.log('server running on port 3000')
})