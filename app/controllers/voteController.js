var express = require('express');
var router = express.Router();
var Vote = require('../model/vote');
var logger = require('../util/logger');

router.get('/', function(req, res) {
	Vote.find(function (err, vote) {
		res.set('Content-Type','application/json'); 
		res.send(200, vote); 
	});
});

router.get('/id/:id', function(req, res) {
	Vote.findOne({'_id':req.params.id}, function (err, vote) {
		res.set('Content-Type','application/json'); 
		res.send(200, vote); 
	});
});

router.get('/active', function(req, res) {
	Vote.findOne({'active':true}, function (err, vote) { 
		if(!vote)
			return res.status(404).send({'message':'not found'});
		if(err) 
			return res.status(500).send({'error': err});
		res.json(vote); 
	});
});

router.post('/', function(req, res) {
	var vote = new Vote();
	vote.question =  req.body.question;
	vote.save(function(err) {
		if (err) {
			return res.send(err);
		}
		res.status(201).send({ message: 'vote added' });
	});

});

router.put('/:id', function(req, res) {
	Vote.findOne({'_id':req.params.id}, function (err, vote) { 
		if(!vote)
			return res.status(404).send({'message':'not found'});
		if(err) 
			return res.status(500).send({'error': err});
		if(req.body.active !== undefined) {
			vote.active = req.body.active;
		}
		if(req.body.done !== undefined){
			logger.info('done is present');
			vote.done = req.body.done;
		}
		if(req.body.question)
			vote.question = req.body.question;
		vote.save(function(err) {
			if (err) {
				return res.send(err);
			}
			res.status(200).send({ message: 'vote updated' });
		});
	});
});

module.exports = router;