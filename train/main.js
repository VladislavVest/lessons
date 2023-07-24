const log = console.log;

let   razmetka = ""
fetch('https://api.github.com/users')
    .then(res => res.json())
    .then((data) => {
        log(data)




    });


//     fetch("https://api.github.com/users")
//     .then(resp => {return resp.text()})
//     .then(resBody => {razmetka = resBody})
// log('VOT ONO',razmetka)


const tableDOM = document.querySelector('table')
log(tableDOM);
const tbodyDOM = tableDOM.querySelector('tbody');



// log(localStorage.getItem('score'));




// const savedScoreJSON = localStorage.getItem('score')
// let savedScoreArr = []
// log(savedScoreJSON);
// if (savedScoreJSON) {
//     try {
//         savedScoreArr = JSON.parse(savedScoreJSON)
//     } catch (error) {
//         log(error, 'cant parse JSON')
//     }
// }



// savedScoreArr.forEach((item, i) => {
//     log(item)
//     tbodyDOM.innerHTML += `
//                 <tr>
//                     <th scope="row">${i + 1}</th>
//                     <td>${item.login}</td>
//                     <td>${item.id}</td>
//                     <td>${item.avatar}</td>
//                 </tr>   
//             `;
// })
