var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine', 'source-map-support'],

        files: [
            {
                pattern: './karma-test-shim.js',
                watched: true
            }
        ],

        browsers: ['Chrome'],

        reporters: ['spec', 'kjhtml'],

        preprocessors: {
            './karma-test-shim.js': ['webpack']
        },

        specReporter: {
            suppressErrorSummary: false, // print error summary
            suppressFailed: false,      // print information about failed tests
            suppressPassed: false,      // print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: true,      // print the time elapsed for each spec
            failFast: false              // do not finish with first failure
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        browserConsoleLogOptions: {
            level: 'error',
            format: '%b %T: %m',
            terminal: true
        },
    };

    config.set(_config);
};
