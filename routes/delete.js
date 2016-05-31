var express = require('express');
var router = express.Router();
var body=require('body-parser');
var jsonfile = require('jsonfile');

router.post('/', function (req, res) {
  console.log("***************");

  var Title=req.body.titleDelete;
    console.log(req.param('title  :'+Title));
  var fileObj;
  jsonfile.readFile("./data/json/myTutorials.json", function(err, obj) {
      console.log(err);
       console.log("fileObj"+fileObj);
       for(var i=0;i<obj.length;i++){
         if(obj[i].Title===Title){
           obj.splice(i,1);
           break;
         }
       }


       console.log("oooooooo"+obj);

       jsonfile.writeFile("./data/json/myTutorials.json", obj, function(err) {
             if (err) throw err;
             console.log("+++++++++"+err);
               res.redirect( "/" );
         });

})


});
module.exports = router;
