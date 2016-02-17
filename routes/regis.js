var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  	var username = req.body.username;
    var password = req.body.password;
    var btn = req.body.submit;

    if(btn=="insert"){
	    var db = req.db;
	    var collection = db.get('users');

	    if(username!='' || password!=''){

	    	collection.find({ username: username},{}, function(e, docs) {
	    			console.log('Docs :' + docs.length); 
			        if (docs.length > 0) {
			            res.send('Username Duplicate');
			            
			        }else{

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
			        }
   
			})

		    
		}else{
			res.send('Username and Password Not Null');
		}

	}else if(btn=="reset"){
		res.render('regis');
	}
});

router.get('/', function(req, res, next) {
	res.render('regis');
});


module.exports = router;
