const log = console.log();
var Datastore = require('nedb');
var db = new Datastore({filename : 'users'});
db.loadDatabase();
// var Datastore = require('nedb'), db = new Datastore({ filename: 'data.db', autoload: true });
// npm install nedb --save