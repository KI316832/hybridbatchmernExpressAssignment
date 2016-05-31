var express = require('express');
var router = express.Router();
var fs=require('fs');

router.get('/getjson', function (req, res) {
  //console.log("inside get request");
  var content=fs.readFileSync('./data/json/myTutorials.json');
  res.json(content.toString());
  console.log("Res::"+res);
});

module.exports = router;
