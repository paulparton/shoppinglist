'use strict';

var _ = require('lodash'),
	mongo = require("mongojs"),
	db = mongo("shopr_db"),
	lists = db.collection("lists"),
	objectId = mongo.ObjectId;

// Get list of lists
exports.index = function(req, res) {

	lists.find({}, function(err, data){

		//If there is an error with the db connection
		if(!data && err){

			//return the error
			res.send(err);

		}

		//return the database results
		res.send(data);

	});

};

//create a new list
exports.createMessage = function(req, res){

	lists.save(req.body, function(err){

		//If there is an error with the db connection
		if(err){

			//return the error
			res.send(err);

		}

		//return the database results
		res.send(req.body);

	});

};

//Get a message by id
exports.getMessage = function(req, res){

	lists.find({_id: objectId(req.params.id)}, function(err, data){

		//If there is an error with the db connection
		if(!data && err){

			//return the error
			res.send(err);

		}

		//return the database results
		res.send(data);

	});

};

exports.updateMessage = function(req, res){

	lists.find({_id: objectId(req.params.id)}, req.body, function(err){
		
		//If there is an error with the db connection
		if(err){

			//return the error
			res.send(err);

		}

		//return the database results
		res.send(req.body);

	});
};

exports.deleteMessage = function(req, res){

	lists.remove({_id: objectId(req.params.id)}, function(err, data){

		//If there is an error with the db connection
		if(!data && err){

			//return the error
			res.send(err);

		}

		//return the database results
		res.send(data);

	});

};