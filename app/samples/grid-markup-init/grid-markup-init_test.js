'use strict';

describe('myApp.grid-markup-init module', function () {

    beforeEach(module('myApp'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('grid-markup-init controller', function () {
        it('should ....', inject(function ($controller, $rootScope, northwind) {
            //spec body
            var gridMarkupInitController = $controller('GridMarkupInitController',
                { $scope: $rootScope.$new(), northwind: northwind });
            expect(gridMarkupInitController).toBeDefined();
        }));

    });
});