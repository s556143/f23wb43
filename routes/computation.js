var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  var x = parseFloat(req.query.x) || (Math.random() * 10); 
  var angleRadians = calcAngle(x, 10); 
  var responseString = `Math.cbrt applied to ${x} is ${angleRadians}`;

  // Send the response
  res.send(responseString);
});

// Helper function to calculate angle using Math.acos
function calcAngle(adjacent, hypotenuse) {
  return Math.cbrt(adjacent / hypotenuse);
}

module.exports = router;