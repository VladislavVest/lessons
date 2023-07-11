const log = console.log;
const product = {
    id: 1,
    present: true,
    sizes: [1, 2, 3],
    title: 'about product'
}




class Unit {
    x
    y
    name
    constructor(x, y, name) {
        this.x = x
        this.y = y
        this.name = name
    }
    fire() {
        log('boooom')
    }
}

const tank = new Unit(10, 20, 'bigtank')
log(product, tank)
tank.fire()

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]









//metods
const objEntries = Object.entries(product);
log(objEntries);

const objKeys = Object.keys(product);
log(objKeys);

const objValues = Object.values(product);
log(objValues);











// // Spread Method 
// let clone = { ...userDetails }

// // Object.assign() Method
// let clone = Object.assign({}, userDetails)

// // JSON.parse() Method
// let clone = JSON.parse(JSON.stringify(userDetails))