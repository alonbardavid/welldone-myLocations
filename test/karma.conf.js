module.exports = function (config) {
    config.set({

        files: [
            //dependencies
            'www/lib/angular/angular.js',
            'www/lib/angular-ui-router/release/angular-ui-router.js',
            'www/lib/ui-router-extras/release/ct-ui-router-extras.js',
            'www/lib/angular-touch/angular-touch.js',
            'www/lib/angular-messages/angular-messages.js',

            //test frameworks
            'test/lib/chai.js',
            'test/lib/chai.expect.js',
            'test/lib/**/*.js',

            //app files
            'www/js/**/*.js',
            //test suites
            'test/unit/**/*.spec.js'
        ],

        autoWatch: false,
        singleRun: true,
        basePath: "../",

        reporters: ['spec'],
        frameworks: ['mocha'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-spec-reporter'
        ]

    });
};