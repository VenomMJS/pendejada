var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('author', { title:'Autor de la aplicación' });
});

module.exports = router;
