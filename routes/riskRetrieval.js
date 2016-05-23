var express = require('express');
var router = express.Router();

var riskRetrieval = [
  {
    id: "10086",
    url: "http://www.wooyun.org",
    harmlevel: "高",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://news.china.com/domestic/945/20160522/22712785.html",
    harmlevel: "中",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://www.cankaoxiaoxi.com/roll10/20160523/1167810.shtml",
    harmlevel: "低",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://baijia.baidu.com/?tn=topic&topicid=xe6b4bsO",
    harmlevel: "提示",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },{
    id: "10086",
    url: "http://www.wooyun.org",
    harmlevel: "高",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://news.china.com/domestic/945/20160522/22712785.html",
    harmlevel: "中",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://www.cankaoxiaoxi.com/roll10/20160523/1167810.shtml",
    harmlevel: "低",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://baijia.baidu.com/?tn=topic&topicid=xe6b4bsO",
    harmlevel: "提示",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },{
    id: "10086",
    url: "http://www.wooyun.org",
    harmlevel: "高",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://news.china.com/domestic/945/20160522/22712785.html",
    harmlevel: "中",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://www.cankaoxiaoxi.com/roll10/20160523/1167810.shtml",
    harmlevel: "低",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  },
  {
    id: "10086",
    url: "http://baijia.baidu.com/?tn=topic&topicid=xe6b4bsO",
    harmlevel: "提示",
    vulType: "SQL 注入",
    addTime: "2016-01-01 11::22:33",
    taskid: "1008"
  }
]

router.get('/', function(req, res, next) {
  res.json(riskRetrieval);
});

module.exports = router;
