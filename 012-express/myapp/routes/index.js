var express = require('express');
var router = express.Router();
const log = console.log;
var Datastore = require('nedb');
var db = new Datastore({ filename: 'users' });
db.loadDatabase();

var rec = { name: 'bigbounty', age: 16 };
db.insert(rec, function (err, newrec) {
  log('done');
});

db.find({}, function (err, docs) {
  if (err) log('ERROR');
  log(docs);
});


db.update({ name: 'bigbounty' }, { name: "Doug the Head", year: 1940 }, {});

db.remove({ name: 'bigbounty' }, function (err, numremoved) {
  log('VOT ONO', numremoved);
});




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  res.json({ a: 1, b: req.mydata })
});

const users = [
  { username: 'Jon', age: 30 },
  { username: 'Le', age: 20 },
]
router.get('/user', function (req, res, next) {
  db.find({}, function (err, docs) {
    if (err) log('ERROR');
    log(docs);
    res.json(docs);
  });
 
});

router.post('/user', function (req, res, next) {
  const user = req.body;
  log(user);
  users.push(user);
  res.end('OK');
});

router.put('/user', function (req, res, next) {
  res.json({ a: 1, b: req.mydata })
});

router.delete('/user/:index', function (req, res, next) {
  const index = req.params.index;
  log(index);
  users.splice(index, 1);
  res.end('OK')
});
module.exports = router;
