var express = require('express');
var router = express.Router();
var Task = require('../models/Task.js');
var path = require('path');




router.post('/tasks', function(req, res) {
  console.log(req.body);
    var task = new Task(req.body);
    task.save(function(err, doc) {
      if(err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    });

});




router.get('*', function(req,res) {
  console.log('sup');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('sup');
});

module.exports = router;
