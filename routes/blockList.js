var express = require('express');
var router = express.Router();

var blockList = [
  {
    id: "10086",
    config: "baidu.com",
    blackType: "域名黑名单",
    addTime: '2016-01-01 11:22:33'
  },
  {
    id: "10010",
    config: "wooyun.org",
    blackType: "域名黑名单",
    addTime: '2016-02-02 12:34:56'
  },
  {
    id: "10086",
    config: "baidu.com",
    blackType: "域名黑名单",
    addTime: '2016-01-01 11:22:33'
  },
  {
    id: "10010",
    config: "wooyun.org",
    blackType: "域名黑名单",
    addTime: '2016-02-02 12:34:56'
  },
  {
    id: "10086",
    config: "baidu.com",
    blackType: "域名黑名单",
    addTime: '2016-01-01 11:22:33'
  },
  {
    id: "10010",
    config: "wooyun.org",
    blackType: "域名黑名单",
    addTime: '2016-02-02 12:34:56'
  },
  {
    id: "10086",
    config: "baidu.com",
    blackType: "域名黑名单",
    addTime: '2016-01-01 11:22:33'
  },
  {
    id: "10010",
    config: "wooyun.org",
    blackType: "域名黑名单",
    addTime: '2016-02-02 12:34:56'
  },
  {
    id: "10086",
    config: "baidu.com",
    blackType: "域名黑名单",
    addTime: '2016-01-01 11:22:33'
  },
  {
    id: "10010",
    config: "wooyun.org",
    blackType: "域名黑名单",
    addTime: '2016-02-02 12:34:56'
  },
  {
    id: "10086",
    config: "baidu.com",
    blackType: "域名黑名单",
    addTime: '2016-01-01 11:22:33'
  },
  {
    id: "10010",
    config: "wooyun.org",
    blackType: "域名黑名单",
    addTime: '2016-02-02 12:34:56'
  }
]

router.get('/', function(req, res, next) {
  res.json(blockList);
});

module.exports = router;
