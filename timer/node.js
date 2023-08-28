let x = 5;
let timer = setInterval(() => {
    x--
    console.log(timer, x);
    if (x < 0) {
        console.log('end', timer < 0);
        clearInterval(timer);
    }
}, 1000)