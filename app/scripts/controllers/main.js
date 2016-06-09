'use strict';

/**
 * @ngdoc function
 * @name angularfirebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfirebaseApp
 */
angular.module('angularfirebaseApp')
  .controller('MainCtrl', function ($scope, Person) {
  
	console.log(Person);
  
	$scope.add = function() {
     var save = Person.$add({
      firstName: $scope.firstName,
      lastName: $scope.lastName
     });

     $scope.firstName = '';
     $scope.lastName = '';

     if(save) {
      alert('saved successfully');
     } else {
      alert('something went wrong');
     }
	}
  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
