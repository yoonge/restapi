var express = require('express');
var router = express.Router();

var userList = [
  {
    id: "10086",
    username: "胯下有杀气",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "测试组",
    mobile: "13800138000"
  },
  {
    id: "10010",
    username: "奈德丽",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "开发组",
    mobile: "13800138000"
  },
  {
    id: "10086",
    username: "胯下有杀气",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "测试组",
    mobile: "13800138000"
  },
  {
    id: "10010",
    username: "奈德丽",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "开发组",
    mobile: "13800138000"
  },
  {
    id: "10086",
    username: "胯下有杀气",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "测试组",
    mobile: "13800138000"
  },
  {
    id: "10010",
    username: "奈德丽",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "开发组",
    mobile: "13800138000"
  },
  {
    id: "10086",
    username: "胯下有杀气",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "测试组",
    mobile: "13800138000"
  },
  {
    id: "10010",
    username: "奈德丽",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "开发组",
    mobile: "13800138000"
  },
  {
    id: "10086",
    username: "胯下有杀气",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "测试组",
    mobile: "13800138000"
  },
  {
    id: "10010",
    username: "奈德丽",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "开发组",
    mobile: "13800138000"
  },
  {
    id: "10086",
    username: "胯下有杀气",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "测试组",
    mobile: "13800138000"
  },
  {
    id: "10010",
    username: "奈德丽",
    email: "newbee@qq.com",
    userLevel: "管理员",
    department: "开发组",
    mobile: "13800138000"
  }
]

router.get('/', function(req, res, next) {
  res.json(userList);
});

module.exports = router;
