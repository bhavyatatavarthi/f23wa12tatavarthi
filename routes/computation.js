var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var rand =Math.random().toFixed(2);
  var y = req.query.x;
  if(y == undefined){
    y =rand;
  }

    a=Math.pow(rand,rand);
    b= Math.sign(rand).toFixed(2);
    c=Math.tanh(rand).toFixed(2);
    d=Math.trunc(rand);
    res.send(`Math.cos(${y,y}): ${a} Math.sign(${y}) is: ${b} Math.tanh(${y}) is : ${c} math.trunc(${y})`);
  });

module.exports = router;