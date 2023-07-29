const log = console.log
// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

const url = '/example'

async function fetchAsyncTodos() {
    log('fetch todo started...')
    try {
        // await delay(2000)
        const responce = await fetch(url)
        // const data = await responce.json()
        const data = await responce.text()
        log('data:', data)
    } catch (e) {
        console.error(e)
    }

}

fetchAsyncTodos()