const log = console.log;
log('Request data...')
// setTimeout (()=>{
//     log('preparing data..') 

// const backendData ={
//      server: 'avs',
//      port: 2000,
//      status: 'warking'
// }
//      setTimeout (()=>{
//         backendData.modified = true
//         log('data received.',backendData) 

// }, 2000)

// }, 2000)

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        log('preparing data..')
        const backendData = {
            server: 'avs',
            port: 2000,
            status: 'warking'
        }
        resolve(backendData)
    }, 2000);
})

p.then(data => {
   return  new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 4000)
    })

 
}).then(clientData =>{
    log('data received.', clientData)
        
})