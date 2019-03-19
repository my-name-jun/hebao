var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/service/save', function(req, res, next) {
  console.log(req.body)
  
  var dataToRes = {
    data:{},
    msg:"提交成功",
    statusCode:1
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(dataToRes));
});
router.post('/service/sendCode', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
