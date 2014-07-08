'use strict';

angular.module('shoprApp')
  .controller('ListsCtrl', function ($scope, lists) {

  	$scope.addList = function(){

  		lists.save({name:$scope.newList},

			function(data){

				console.log("found:");
				console.log(data);
				$scope.newList = "";
				
$scope.loadLists();

			},

			function(err){
				console.log("error");
				console.log(err);
			}

  		);

  	};

  	$scope.removeList = function(listId){
  		console.log(listId);
  	};

  	$scope.loadLists = function(){
	  	lists.query({}, 
			function(data){
				$scope.lists = data;

				console.log("found:");
				console.log(data);
			},
			function(err){
				console.log("error");
				console.log(err);
			}	
		);
  	};


  	$scope.loadLists();

  });
