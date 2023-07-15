const log = console.log;
//const minePosition = 2;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

  
const minePosition = getRandomInt(10);// random from 0, to 10
log(minePosition)




function check(n) {
    log(n)
    if (minePosition == n) {
        alert('you are dead');
        location.reload();
    }
}




//get container
const containerDOM = document.querySelector('.container')
log(containerDOM);
for (let i = 0; i < 10; i++) {
    containerDOM.innerHTML += `<button onclick="check(${i})">[]</button>`
}




// Function arguments

function sum(a, b) {
    return a + b
}

const result = sum(3, 5)











/* <button onclick="check(1)">[]</button> */


