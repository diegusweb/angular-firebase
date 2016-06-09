'use strict';

/**
 * @ngdoc overview
 * @name angularfirebaseApp
 * @description
 * # angularfirebaseApp
 *
 * Main module of the application.
 */
angular
  .module('angularfirebaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).value('fbURL', 'https://angularifictest.firebaseio.com/')
  .factory('Person', function (fbURL, $firebase) {
    return $firebase(new Firebase(fbURL)).$asArray();
  });
