var express = require('express');
var router = express.Router();

var getUserInfo = {
  stype: '1',
  openid: 'abcdefghijklmnopqrstuvwxyz'
}

router.get('/', function(req, res, next) {
  res.json(getUserInfo);
});

module.exports = router;
