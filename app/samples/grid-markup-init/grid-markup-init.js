'use strict';

var app = angular.module('myApp.grid-markup-init', ['ngRoute', 'igniteui-directives']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/grid-markup-init', {
        templateUrl: 'samples/grid-markup-init/grid-markup-init.html',
        controller: 'GridMarkupInitController'
    });
}])

app.controller('GridMarkupInitController', ["$scope", "northwind", function ($scope, northwind) {
    for (var i = 0; i < northwind.data.length; i++) {
        northwind.data[i].UnitPrice = parseFloat(northwind.data[i].UnitPrice);
    }

    $scope.northwind = northwind.data;

    var createNewProduct = function () {
        return {
            ProductID: $scope.northwind.length + 1,
            ProductName: null,
            QuantityPerUnit: null,
            UnitPrice: null
        };
    };

    $scope.newProduct = createNewProduct();

    $scope.deleteProduct = function (index) {
        $scope.northwind.splice(index, 1);
    };

    $scope.addProduct = function () {

        $scope.northwind.add($scope.newProduct);

        $scope.newProduct = createNewProduct();
    };
}]);