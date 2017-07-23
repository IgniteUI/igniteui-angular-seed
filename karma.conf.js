//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'http://code.jquery.com/jquery-1.10.2.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js',

            'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js',
            'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js',
            'http://cdn-na.infragistics.com/igniteui/2017.1/latest/js/infragistics.dv.js',

            'bower_components/html5-boilerplate/dist/css/normalize.css',
            'bower_components/html5-boilerplate/dist/css/main.css',

            'http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css',
            'http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css',

            'app.css',

            'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
            
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'bower_components/igniteui-angular/src/igniteui-angular.js',
            'app.js',
            'data/*.js',
            'components/**/*.js',
            
            'samples/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
