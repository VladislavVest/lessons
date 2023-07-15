const log = console.log;
const minePosition = 2;





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
















/* <button onclick="check(1)">[]</button> */