var express = require('express');
var router = express.Router();
const log = console.log;
var Datastore = require('nedb');
var db = new Datastore({ filename: 'users' });
db.loadDatabase();
db.persistence.compactDatafile();

// var rec = { name: 'bigbounty', age: 16 };
// db.insert(rec, function (err, newrec) {
//   log('done');
// });

db.find({}, function (err, docs) {
  if (err) log('ERROR');
  log(docs);
});


// db.update({ name: 'bigbounty' }, { name: "Doug the Head", year: 1940 }, {});

// db.remove({ name: 'bigbounty' }, function (err, numremoved) {
//   log('VOT ONO', numremoved);
// });




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
  db.insert(user, function (err, newrec) {
    log('done');
    res.end('OK');
  });

});


router.put('/user', function (req, res, next) {
  const newDoc = req.body
  db.update({ _id: newDoc._id }, newDoc, ()=>{
    res.end('OK');
  });
  // res.json({ a: 1, b: req.mydata })
});

router.delete('/user/:id', function (req, res, next) {
  const _id = req.params.id;
  db.remove({ _id }, function (err, numremoved) {
    log('VOT ONO', numremoved);
    res.end('OK');
  });
});
module.exports = router;
