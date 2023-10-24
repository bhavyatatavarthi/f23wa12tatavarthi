var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var rand =Math.random().toFixed(2);
  var y = req.query.x;
  if(y == undefined){
    y =rand;
  }

    a=math.pow(rand,rand);
    b= math.copysign(rand, rand).toFixed(2);
    c=math.tanh(rand).toFixed(2);
    d=math.trunc(rand);
    res.send(`Math.cos(${y,y}): ${a} Math.copysign(${y,y}) is: ${b} Math.tanh(${y}) is : ${c} math.trunc(${y})`);
  });

module.exports = router;