var express = require('express');
var router = express.Router();
//var jsonfile = require('jsonfile');
//var body=require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
