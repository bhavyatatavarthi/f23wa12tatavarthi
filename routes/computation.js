var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var rand =Math.random().toFixed(2);
  var y = req.query.x;
  if(y == undefined){
    y =rand;
  }

    a=Math.pow(rand,rand);
    b= Math.sign(y).toFixed(2);
    c=Math.tanh(y).toFixed(2);
    d=Math.trunc(y);
    res.send(`Math.pow(${y,y}): ${a} Math.sign(${y}) is: ${b} Math.tanh(${y}) is : ${c} Math.trunc(${y}) is: ${d}`);
  });

module.exports = router;