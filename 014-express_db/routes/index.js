var express = require('express');
var router = express.Router();
const log = console.log;
const Cat = require('../models/cat.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cats', async function (req, res, next) {
 const cats = await Cat.find(req.query);
 res.json(cats);

});

router.post('/cats', async function (req, res, next) {
  const kitty = new Cat(req.body);
  await kitty.save()

  res.end('OK');

});


router.put('/cats', async function (req, res, next) {
  const newDoc = req.body;
  let doc = await Cat.findOneAndUpdate({ _id: newDoc._id }, newDoc);
  res.json(doc);

});




//   db.update({ _id: newDoc._id }, newDoc, ()=>{
//     res.end('OK');
//   });
//   // res.json({ a: 1, b: req.mydata })
// });

router.delete('/cats/:id', async function (req, res, next) {
  const _id = req.params.id;
  await Cat.findByIdAndDelete(_id);
  res.end('OK');
 });





  // db.remove({ _id }, function (err, numremoved) {
  //   log('VOT ONO', numremoved);
  //   res.end('OK');
  // });
























module.exports = router;


