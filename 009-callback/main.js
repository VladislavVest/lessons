const asyncOperation = (clb) => {
    setInterval(() => {
        const data = { a: 1 }
        clb(data)
    }, 2000)
}

////////////////////////////////////////////////////////////////////////

const log = console.log;

const callBack = (data) => {
    log("Result:", data)
}

asyncOperation(callBack)


// function asyncOperation(){}
