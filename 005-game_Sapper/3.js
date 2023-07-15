const log = console.log;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const mines = [getRandomInt(10), getRandomInt(10), getRandomInt(10)];// random from 0, to 10
log(mines)
let life = 2;
const setScore =()=>document.querySelector('.score-number').innerHTML=life
setScore()
function check(n, el) {

    mines.forEach((current) => {
        if (current == n) {
            el.classList.add('off')
            life--
            if (life == 0) {
                alert('you are dead');
                setTimeout(() => {
                    location.reload();
                }, 1000)
            }


        }
    })

    log('life', life)
    setScore()  
    el.classList.add('touch')
}


//get container
const containerDOM = document.querySelector('.container')
log(containerDOM);
for (let i = 0; i < 10; i++) {
    containerDOM.innerHTML += `<button onclick="check(${i},this)">[]</button>`
}




// // Function arguments

// function sum(a, b) {
//     return a + b
// }

// const result = sum(3, 5)











/* <button onclick="check(1)">[]</button> */


