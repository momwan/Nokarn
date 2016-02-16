var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('spec');
});

router.post('/fiding', function(req, res, next) {
var nation = req.body.lblnation;
var province = req.body.lblprovince;
var age = req.body.lblage;
var db = req.db;
var collection = db.get('spec');
console.log(nation);
collection.find({ nation: nation },{}, function(err, docs) {
    if (err){
    		console.log('Error finding ');

    	} else {
    		console.log("ANS :" + docs.length);
    		res.render('detail',{loverlist: docs});
    	}
    })





});



 module.exports = router;
