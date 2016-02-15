var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  	var username = req.body.username;
    var password = req.body.password;

console.log('value :'+ req.body.a);
    // var db = req.db;
    // var collection = db.get('users');

    // collection.insert({
    //     username: username,
    //     password: password
    // }, function(err, docs)
    // 	if(err) {
    // 		console.log('value :'+ req.body.a);
    //         res.send("There was a problem adding the information to the database.");
    //     } else {
    //         // redirect to /users 
    //         res.redirect('profile');
    //     }
    // })
});

module.exports = router;
