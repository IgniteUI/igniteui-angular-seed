'use strict';

var app = angular.module('myApp.editors', ['ngRoute', 'igniteui-directives']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/editors', {
        templateUrl: 'samples/editors/editors.html',
        controller: 'EditorsController'
    });
}])

app.controller('EditorsController', ["$scope", function ($scope) {
    $scope.editors = {
        currency: 12.1,
        date: new Date(),
        editor: "Infragistics",
        mask: "134-134-134",
        numeric: 123,
        percent: 0.12,
        text: "Ignite UI"
    };
}]);