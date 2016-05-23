var express = require('express');
var router = express.Router();

var taskBasicInfo = {
  target: "http://www.tangscan.com",
  type: "网站任务",
  user: "李铁住",
  startTime: "2016-01-01 17:22:19",
  hight: "16",
  middle: "11",
  low: "11",
  hint: "12"
}

router.get('/', function(req, res, next) {
  res.json(taskBasicInfo);
});

module.exports = router;
