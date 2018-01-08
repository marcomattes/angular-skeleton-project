var webpackConfig = require('./webpack.test.ci');
var path = require('path');

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

        reporters: ['spec', 'coverage-istanbul', 'junit'],

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

        // the default configuration
        junitReporter: {
            outputDir: '../reports', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'testResults.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            useBrowserName: false, // add browser name to report and classes names
        },

        coverageIstanbulReporter: {
            dir: path.join(__dirname, '../reports'),
            reports: ['html', 'cobertura'],
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: false,
            'report-config': {
                html: {
                    subdir: 'coverage-html'
                }
            }
        }
    };

    config.set(_config);
};
