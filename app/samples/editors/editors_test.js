'use strict';

describe('myApp.editors module', function () {

    beforeEach(module('myApp'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('editors controller', function () {
        it('should ....', inject(function ($controller, $rootScope) {
            //spec body
            var editorsController = $controller('EditorsController',
                { $scope: $rootScope.$new() });
            expect(editorsController).toBeDefined();
        }));
    });
});