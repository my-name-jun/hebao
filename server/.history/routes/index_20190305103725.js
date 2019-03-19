var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/service/save', function(req, res, next) {
  var dataToRes = {
    data:{},
    msg:null,
    statusCode:1
  }
  res.json(JSON.stringify(dataToRes));
});
router.post('/service/sendCode', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
