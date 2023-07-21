const log = console.log;

const tableDOM = document.querySelector('table')
log (tableDOM);
const tbodyDOM = tableDOM.querySelector('tbody');



// log(localStorage.getItem('score'));




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



savedScoreArr.forEach((item, i) => {
    log(item)
    tbodyDOM.innerHTML += `
            <tr>
                <th scope="row">${i+1}</th>
                <td>${item.date}</td>
                <td>${item.score}</td>
            </tr>   
        `;
})









