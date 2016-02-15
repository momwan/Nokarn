var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  	var username = req.body.username;
    var password = req.body.password;
    var btn = req.body.submit;

    if(btn="insert"){
	    var db = req.db;
	    var collection = db.get('users');

	    collection.insert({
	        username: username,
	        password: password
	    }, function(err, docs) {
	        if (err) {
	            res.send("There was a problem adding the information to the database.");
	        } else {
	            // redirect to /users 
	            res.render('profile');
	        }
	    })
	}else if(btn="reset"){
		res.render('regis');
	}
});


router.get('/', function(req, res, next) {
	res.render('regis');
});


module.exports = router;
