var express = require('express');
var router = express.Router();
const log = console.log;
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
  res.json( users)
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
  users.splice(index,1);
  res.end('OK')
});
module.exports = router;
