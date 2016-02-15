var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('users');
    var username = req.body.username;
    var password = req.body.password;
    collection.find({ username: username, password: password }, function(e, docs) {
        if (docs.length > 0) {
            res.render('/index');
        } else {
            res.render('/regis');
        }
       
    });
});



router.get('/login', function(req, res, next) {
    res.render('login');
});
module.exports = router;
