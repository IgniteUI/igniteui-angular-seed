'use strict';

var app = angular.module('myApp.chart', ['ngRoute', 'igniteui-directives']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/chart', {
        templateUrl: 'samples/chart/chart.html',
        controller: 'ChartController'
    });
}])

app.controller('ChartController', ["$scope", "populationData", function ($scope, populationData) {
    $scope.dataChart = populationData.data;
}]);