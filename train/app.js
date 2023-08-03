const log = console.log;
const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
    log('Server request');
    log(req.url, req.method);

    res.setHeader('Content-Type', 'application/json');
    // res.write('<head><link rel="StyleSheet" href= "#"></head>')
    // res.write('<h1 style="color: red" >Hello word!</h1>');
    // res.write('<p1>Enter name</p1>');
    

const data =JSON.stringify([
    {name: 'Tommy', age:35},
    {name: 'Arthur', age:38},

])
res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
})