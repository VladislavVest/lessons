const log = console.log

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// delay(2000).then(() => log('2 sec'))
// function fetchTodos() {
//     log('fetch todo started...')
//     return delay(2000)
//     .then(() => fetch(url))
//         .then(responce => responce.json())
//         log(data)
// }
// fetchTodos()
//     .then(data => {
//         log('Data:', data)
//     })
//     .catch(e => console.error(e))




async function fetchAsyncTodos() {
    log('fetch todo started...')
    try {
        await delay(2000)
        const responce = await fetch(url)
        const data = await responce.json()
        log('data:', data)
    } catch (e) {
        console.error(e)
    }

}

fetchAsyncTodos()
