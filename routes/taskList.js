var express = require('express');
var router = express.Router();

var taskList = [
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-01",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-02",
    department: "研发部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-03",
    department: "测试部",
    user: "胯下有杀气",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-04",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-05",
    department: "市场部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-06",
    department: "测试部",
    user: "王尼玛",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-07",
    department: "研发部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-08",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-09",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-10",
    department: "测试部",
    user: "胯下有杀气",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-11",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-12",
    department: "市场部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-13",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-14",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-15",
    department: "测试部",
    user: "Yoonge",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  },
  {
    url: "https://www.baidu.com",
    percent: "99%",
    date: "2016-05-16",
    department: "测试部",
    user: "李铁柱",
    high: "6",
    middle: "7",
    low: "8",
    hint: "9"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(taskList);
});

module.exports = router;
