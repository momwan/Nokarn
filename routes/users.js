var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('users');
    var username = req.body.username;
    var password = req.body.password;
    collection.find({ username: username, password: password },{}, function(e, docs) {

    	// console.log('U: ' + username );
    	// console.log('P: ' + password);

    	// if (!docs) { console.log('docs is empty');}
    	// if (docs.length > 0 ) { console.log('Docs count ' + docs.length);}

        if (docs.length > 0) {
            res.render('index',{username:docs});
        } else {
            res.render('regis');
        }
       
    });
});

// router.get('/profile', function(req, res, next){
//     res.render('profile')
// })


router.get('/login', function(req, res, next) {
    res.render('login');
});
module.exports = router;
