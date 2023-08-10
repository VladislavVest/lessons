var express = require('express');
var router = express.Router();
const log = console.log;
const Cat = require('../models/cat.js');
// const kitty = new Cat({ name: 'Chupwwwa', color : 'black-white' });
// kitty.save().then(() => console.log('meow'));





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cats', async function (req, res, next) {
  log(req.query);
 const cats = await Cat.find(req.query);
 res.json(cats);

});

router.post('/cats', async function (req, res, next) {
  const kitty = new Cat(req.body);
  await kitty.save()
  res.end('OK');

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


