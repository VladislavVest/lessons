const log = console.log;
log('HEllO')


const callback = () => {
    log('hello 2')
}

setTimeout(callback, 1000);
//***************************************/
setTimeout(() => {
    if (true) {
        setTimeout(() => {
            log('hello 3')
        }, 2000)
    } else {
        setTimeout(() => {
            log('hello 4')
        }, 3000)
    }
}, 1000)