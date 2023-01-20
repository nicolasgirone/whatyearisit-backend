var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET year. */
router.get('/year', function(req, res, next) {
  req.send('date', { year: '2050' });
});

module.exports = router;
