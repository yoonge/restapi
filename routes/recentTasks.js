var express = require('express');
var router = express.Router();

var recentTasks = [

]

router.get('/', function(req, res, next) {
  res.json(recentTasks);
});

module.exports = router;
