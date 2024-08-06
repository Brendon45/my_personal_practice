var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', (req, res)=> {
  res.render('index', { message: 'Hello Word'});
});


module.exports = router;
