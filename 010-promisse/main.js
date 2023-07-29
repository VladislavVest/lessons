const p = Promise((result, error) => {
    setInterval(() => {
        result(12233)
    }, 1000)
})


p.then((number) => { log(nember) })




// class MyPromise {
//     constructor(foo) {

//     }
// }