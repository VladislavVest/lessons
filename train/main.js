const log = console.log;
log('start');
log('start2');

function timeout2sec() {
    log('timeout2sec')
}

setTimeout(() => {

    log('timeout2')
}, 5000)

setTimeout(timeout2sec, 2000)

setTimeout(() => {
    log('insiedeSetTimeout!')

}, 0);


log('end')