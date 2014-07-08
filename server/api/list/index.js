'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./list.controller');



//Get all messages
router.get('/', controller.index);

//Create a new message
router.post('/', controller.createMessage);

//Get a specific message
router.get('/:id', controller.getMessage);

//Update a message
router.put('/:id', controller.updateMessage);

//Delete a message
router.delete('/:id', controller.deleteMessage);

module.exports = router;