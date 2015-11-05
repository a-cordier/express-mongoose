var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/** TODO declare */
mongoose.connect('mongodb://localhost/cnamts');

router.use('/votes', require('./voteController'));

module.exports = router;