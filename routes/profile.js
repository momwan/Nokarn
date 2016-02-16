var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile');
});

router.post('/insert', function(req, res, next) {

   
    var username = req.body.username;
    var surname = req.body.surname;
    var sex = req.body.sex;
    var email = req.body.email;
    var country = req.body.country;
    var job = req.body.job;
    var sport = req.body.job;
 
    var db = req.db;
    var collection = db.get('profiles');
    if(username!=''&&surname!=''&&sex!=''&&email!=''&&country!=''&&job!=''&&sport!='')
    {
    collection.insert({
        username: username,
        surname: surname,
        sex: sex,
        email: email,
        country: country,
        job: job,
        sport: sport 
    }, function(err, docs) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        } else {
            // redirect to /users 
            res.redirect('/profile');
        }
    })
    }
    else
    {
        res.send('Null');
    }
});

module.exports = router;