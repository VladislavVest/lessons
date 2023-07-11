// 2 === '2' - false
// 2 == '2'  - true

if (2 == 2) {
  console.log("hello from if");
}
console.log(2 == 2);

console.log(2 == 2 && 3 == 3);

console.log(2 == 2 || 5 == 3);

console.log(true && true);

console.log(true || false);

console.log(true && false);

if (2 != 1) {
  console.log("a");
} else {
  console.log("b");
}

const a = 1;

if (a == 0) {
  console.log("a");
} else if (a == 1) {
  console.log("b");
} else if (a == 2) {
  console.log("b");
} else {
  console.log("b");
}

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

const log = console.log;

(2 == 2) ? log(111) : log(22);

let pass = 11
const status = (pass == 11) ? 'Admin' : 'Guest';

const getStatus = (pass) => (pass == 11) ? 'Admin' : 'Guest';

