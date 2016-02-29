var express = require('express');
var router = express.Router();

/* GET til listing. */
router.get('/', function(req, res, next) {
  res.render('til/index', { title: 'Today' });
});

module.exports = router;
