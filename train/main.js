const log = console.log;



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const minePosition = getRandomInt(10);// random from 0, to 10
log(minePosition)






function check(n, el) {
    log(n)
    if (minePosition == n) {

        el.classList.add('off')
        el.classList.add ('animate')
        alert('you are dead');
        setTimeout(function () {
            location.reload();
        }, 1000)

    }
    el.classList.add('touch')
}



//get container
const containerDOM = document.querySelector('.container')
log(containerDOM);
for (let i = 0; i < 10; i++) {
    containerDOM.innerHTML += `<button onclick="check(${i},this)">[]</button>`
   
}




// Function arguments

// function sum(a, b) {
//     return a + b
// }

// const result = sum(3, 5)











/* <button onclick="check(1)">[]</button> */


