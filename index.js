var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(function (req, res, next) {
    console.log('Record	timestamp');
    next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/squareroot', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
      "x" : x,
      "y" : y,
      "result square root x": Math.sqrt(x),
      "result square root y": Math.sqrt(y)
    }
    res.json(object);
});

app.post('/calculator/rest/cmtoinch', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
      "x" : x,
      "result cm to inch x": x * 0.39370079
    }
    res.json(object);
});

app.post('/calculator/rest/kbtotb', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
      "x" : x,
      "result kb to tb x": x * Math.pow(10,-9)
    }
    res.json(object);
});

app.listen(3000,function(){
  console.log("server start at port 3000");;
});