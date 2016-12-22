var express = require('express');
var router = express.Router();

var getUrl = {
  codeUrl: '/next'
}

router.get('/', function(req, res, next) {
  res.json(getUrl);
});

module.exports = router;
