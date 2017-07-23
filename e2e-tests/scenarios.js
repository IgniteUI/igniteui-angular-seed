'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {


    it('should automatically redirect to /grid-markup-init when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/grid-markup-init");
    });


    describe('grid-markup-init', function () {

        beforeEach(function () {
            browser.get('index.html#!/grid-markup-init');
        });
        
        it('should render grid heading when user navigates to /grid-markup-init', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).
                toMatch(/igGrid with markup configuration/);
        });

    });


    describe('combo', function () {

        beforeEach(function () {
            browser.get('index.html#!/combo');
        });

        it('should render combo heading when user navigates to /combo', function () {
            expect(element.all(by.css('[ng-view] h2')).first().getText()).
                toMatch(/igCombo/);
        });

    });
});
