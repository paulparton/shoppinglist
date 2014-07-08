'use strict';

angular.module('shoprApp')
  .controller('ListsCtrl', function ($scope, lists) {

  	//Add a new list
  	$scope.addList = function(){

  		//Save the new list to the database
  		lists.save({name:$scope.newList},

  			//If the save works
			function(data){

				//Add the new list to the ui
				$scope.lists.push(data);

				//Clear the new list form
				$scope.newList = "";

			},

			function(err){
				console.log("error");
				console.log(err);
			}

  		);

  	};

  	$scope.removeList = function(listId){
  		lists.remove(
			{id:listId},
						function(data){
				$scope.lists = data;

				console.log("found:");
				console.log(data);

				//$scope.lists.splice($scope.lists.indexOf(data), 1);


			},
			function(err){
				console.log("error");
				console.log(err);
			}	
		);
  	};

  	//refresh lists from the server
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
