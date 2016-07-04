var express = require('express');
var router = express.Router();

var onlineUserList = [
  {
    userName: "胯下有杀气",
    email: "newbee@qq.com",
    timeLength: "36000"
  },
  {
    userName: "奈德丽",
    email: "naidali@qq.com",
    timeLength: "108000"
  },
  {
    userName: "胯下有杀气",
    email: "newbee@qq.com",
    timeLength: "36000"
  },
  {
    userName: "奈德丽",
    email: "naidali@qq.com",
    timeLength: "108000"
  },
  {
    userName: "胯下有杀气",
    email: "newbee@qq.com",
    timeLength: "36000"
  },
  {
    userName: "奈德丽",
    email: "naidali@qq.com",
    timeLength: "108000"
  },
  {
    userName: "胯下有杀气",
    email: "newbee@qq.com",
    timeLength: "36000"
  },
  {
    userName: "奈德丽",
    email: "naidali@qq.com",
    timeLength: "108000"
  },
  {
    userName: "胯下有杀气",
    email: "newbee@qq.com",
    timeLength: "36000"
  },
  {
    userName: "奈德丽",
    email: "naidali@qq.com",
    timeLength: "108000"
  },
  {
    userName: "胯下有杀气",
    email: "newbee@qq.com",
    timeLength: "36000"
  },
  {
    userName: "奈德丽",
    email: "naidali@qq.com",
    timeLength: "108000"
  }
]

router.get('/', function(req, res, next) {
  res.json(onlineUserList);
});

module.exports = router;
