'use strict';

describe('myApp.chart module', function () {
    
    beforeEach(module('myApp'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('chart controller', function () {
        it('should ....', inject(function ($controller, $rootScope, populationData) {
            //spec body
            var chartController = $controller('ChartController',
                { $scope: $rootScope.$new(), populationData: populationData });
            expect(chartController).toBeDefined();
        }));
    });
});