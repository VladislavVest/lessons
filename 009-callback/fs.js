const fs = require('fs')
const log = console.log;


// fs.writeFile('example.txt', 'content my', (err) => {
//     if (err) log(err)
//     log('done')
// })


// fs.readFile('example.txt', 'utf-8', (err,content) => {
//     if (err) log(err)
//     log(content)
// })


const actionAfterReading = (err,content) => {
    if (err) log(err)
    log(content)
}

fs.readFile('example.txt', 'utf-8', actionAfterReading)

