var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET year. */
router.get('/year', function(req, res, next) {
  res.send('date', { year: (data.year).toBe(new Date().getFullYear().toString()) });
});

module.exports = router;
