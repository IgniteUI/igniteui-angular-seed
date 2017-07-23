'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.version',
    'myApp.grid-markup-init',
    'myApp.grid-controller-init',
    'myApp.chart',
    'myApp.combo',
    'myApp.editors'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/grid-markup-init' });
}]);
