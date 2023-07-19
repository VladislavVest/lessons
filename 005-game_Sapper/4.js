const log = console.log;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const mines = [getRandomInt(10), getRandomInt(10), getRandomInt(10)];// random from 0, to 10
log(mines)
let life = 2;
let score = 0;
const setScore = () => document.querySelector('.score-number').innerHTML = score
const setLife = () => document.querySelector('.life-number').innerHTML = life
setLife()

function check(n, el) {
    mines.forEach((current) => {
        if (current == n) {
            el.classList.add('off')
            life--
            if (life == 0) gameOver();
        } else score++
    })
    log('life', life)
    setScore()
    setLife()
    el.classList.add('touch')
}
function saveScore() {
    const savedScoreJSON = localStorage.getItem('score')
    let savedScoreArr = []
    log(savedScoreJSON);
    if (savedScoreJSON) {
        try {
            savedScoreArr = JSON.parse(savedScoreJSON)
        } catch (error) {
            log(error, 'cant parse JSON')
        }
    }
    log(savedScoreArr)
    savedScoreArr.push({
        date: new Date(),
        score,
    })
    log(savedScoreArr);
    const newSavedScoreJSON = JSON.stringify(savedScoreArr)
    localStorage.setItem('score', newSavedScoreJSON)
}
function gameOver() {
    saveScore()
    alert('you are dead');
    setTimeout(() => {
        location.reload();
    }, 1000)
}
//get container
const containerDOM = document.querySelector('.container')
log(containerDOM);
for (let i = 0; i < 10; i++) {
    containerDOM.innerHTML += `<button onclick="check(${i},this)">[]</button>`
}

















