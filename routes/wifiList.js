var express = require('express');
var router = express.Router();

var wifiList = [
  {
    id: "10086",
    devicesName: "huwei-0102",
    ip: "192.168.1.12"
  },
  {
    id: "10010",
    devicesName: "Samsung Galaxy Note V",
    ip: "192.168.1.177"
  },
  {
    id: "10086",
    devicesName: "huwei-0102",
    ip: "192.168.1.12"
  },
  {
    id: "10010",
    devicesName: "Samsung Galaxy Note V",
    ip: "192.168.1.177"
  },
  {
    id: "10086",
    devicesName: "huwei-0102",
    ip: "192.168.1.12"
  },
  {
    id: "10010",
    devicesName: "Samsung Galaxy Note V",
    ip: "192.168.1.177"
  },
  {
    id: "10086",
    devicesName: "huwei-0102",
    ip: "192.168.1.12"
  },
  {
    id: "10010",
    devicesName: "Samsung Galaxy Note V",
    ip: "192.168.1.177"
  },
  {
    id: "10086",
    devicesName: "huwei-0102",
    ip: "192.168.1.12"
  },
  {
    id: "10010",
    devicesName: "Samsung Galaxy Note V",
    ip: "192.168.1.177"
  },
  {
    id: "10086",
    devicesName: "huwei-0102",
    ip: "192.168.1.12"
  },
  {
    id: "10010",
    devicesName: "Samsung Galaxy Note V",
    ip: "192.168.1.177"
  }
]

router.get('/', function(req, res, next) {
  res.json(wifiList);
});

module.exports = router;
