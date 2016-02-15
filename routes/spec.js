var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('spec');
});

router.post('/insert', function(req, res, next) {
var nation = req.body.lblnation;
var province = req.body.lblprovince;
var age = req.body.lblage;
var db = req.db;
var collection = db.get('spec');

 collection.insert({
        nation: nation,
        province: province,
        age: age
    }, function(err, docs) {
        if (err) {
            res.send("Not insert data to the database.");
        } else {
            // redirect to /users 
            res.send("Compress");
            res.redirect("/spec");
        }
    })






});



 module.exports = router;
