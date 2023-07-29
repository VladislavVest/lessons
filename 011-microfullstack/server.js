const log = console.log
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    log('request', req.url)
    if (req.url == '/home') {
        const html = fs.readFileSync('index.html', 'utf-8')
        res.end(html)
    }
    else if (req.url == '/main.js') {
        const html = fs.readFileSync('main.js', 'utf-8')
        res.end(html)
    }

    else res.end('answer')

}).listen(3000)