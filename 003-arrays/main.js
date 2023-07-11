// push / pop

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.push(8, 8, 8);
console.log(arr[5]);

const el = arr.pop();
console.log(arr, el);

// shift / unshift
arr.unshift("start");
console.log(arr);

// copy value, link to object

let a = 2;
let b = a;
console.log(a, b);

b = 777;
console.log(a, b);

// link

let obj = { a: 1 };
let obj2 = obj;
console.log(obj, obj2);

obj.a = "other value";
console.log(obj, obj2);

const log = console.log;

log(obj);

arr.reverse();
log(arr);

let arr3 = arr.join('-')
log(arr3)

//analog for
arr.forEach(function(item){
    log('loop' , item)
//     const container = document.querySelector('.container')
//     log(container)
//     container.innerHTML+=`<div> ${item} </div>`
})



