'use strict';

describe('myApp.combo module', function () {

    beforeEach(module('myApp'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('combo controller', function () {
        it('should ....', inject(function ($controller, $rootScope, northwind) {
            //spec body
            var comboController = $controller('ComboController',
                { $scope: $rootScope.$new(), northwind: northwind });
            expect(comboController).toBeDefined();
        }));
    });
});