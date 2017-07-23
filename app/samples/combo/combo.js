'use strict';

var app = angular.module('myApp.combo', ['ngRoute', 'igniteui-directives']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/combo', {
        templateUrl: 'samples/combo/combo.html',
        controller: 'ComboController'
    });
}])

app.controller('ComboController', ["$scope", "northwind", function ($scope, northwind) {
    $scope.northwind = northwind.data;

    $scope.combo = {
        value1: 20,
        value2: "Chang"
    };
}]);