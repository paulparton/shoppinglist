'use strict';

angular.module('shoprApp')
  .factory('lists', function ($resource) {

    return $resource('http://127.0.0.1:3000/api/lists/:id', {id:"@_id"},
    //return $resource('/api/posts/:_id', 

    { 
        //query: {method:'GET', params:{'id':''}, isArray:true},
        //post: {method:'POST', isArray: true},
        //save: {method:'POST', isArray: false},
        update: {method:'PUT'},
        remove: {method:'DELETE', params: {}}
        
    });


  });






    


