var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/service/save', function(req, res, next) {
  console.log(req.body)
  
  var dataToRes = {
    data:{},
    msg:null,
    statusCode:1
  }
  res.json(dataToRes);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(dataToRes));
});
router.post('/service/sendCode', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
