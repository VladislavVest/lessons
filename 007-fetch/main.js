const log = console.log;
const tableDOM = document.querySelector('table')
log(tableDOM);
const tbodyDOM = tableDOM.querySelector('tbody');

fetch('https://api.github.com/users')
    .then(res => res.json())
    .then((data) => {
        log(data)
        data.forEach((item, i) => {
            log(item, i)
            tbodyDOM.innerHTML += `
            <tr>
            <th scope="row">${i + 1}</th>
            <td>${item.login}</td>
            <td>${item.node_id}</td>
            <td><img src="${item.avatar_url}" alt="нет картинки" width="100"></td>
            </tr>
                            `;


                            
        });



    });






























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