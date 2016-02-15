var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('spec');
});

router.post('/new', function(req, res, next) {
    console.log('test');
    var newSpec = {
		nation: req.body.lblnation,
		province: req.body.lblprovince,
		age: req.body.lblage
	};


module.exports = router;
