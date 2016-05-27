var express = require('express');
var router = express.Router();

var logList = [
  {
    id: "10086",
    userName: "奈德丽",
    userLevel: "管理员",
    action: "登陆系统",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.131"
  },
  {
    id: "10010",
    userName: "9527",
    userLevel: "普通用户",
    action: "新增任务 1802",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.38"
  },
  {
    id: "10086",
    userName: "奈德丽",
    userLevel: "管理员",
    action: "登陆系统",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.131"
  },
  {
    id: "10010",
    userName: "9527",
    userLevel: "普通用户",
    action: "新增任务 1802",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.38"
  },
  {
    id: "10086",
    userName: "奈德丽",
    userLevel: "管理员",
    action: "登陆系统",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.131"
  },
  {
    id: "10010",
    userName: "9527",
    userLevel: "普通用户",
    action: "新增任务 1802",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.38"
  },
  {
    id: "10086",
    userName: "奈德丽",
    userLevel: "管理员",
    action: "登陆系统",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.131"
  },
  {
    id: "10010",
    userName: "9527",
    userLevel: "普通用户",
    action: "新增任务 1802",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.38"
  },
  {
    id: "10086",
    userName: "奈德丽",
    userLevel: "管理员",
    action: "登陆系统",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.131"
  },
  {
    id: "10010",
    userName: "9527",
    userLevel: "普通用户",
    action: "新增任务 1802",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.38"
  },
  {
    id: "10086",
    userName: "奈德丽",
    userLevel: "管理员",
    action: "登陆系统",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.131"
  },
  {
    id: "10010",
    userName: "9527",
    userLevel: "普通用户",
    action: "新增任务 1802",
    addTime: "2016-06-01 11:22:33",
    ip: "192.168.40.38"
  }
]

router.get('/', function(req, res, next) {
  res.json(logList);
});

module.exports = router;
