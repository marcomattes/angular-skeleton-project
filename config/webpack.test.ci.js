var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var common = require('./webpack.test');
var HappyPack = require('happypack');
var happyThreadPool = require('./happy-pack-threadpool');

module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'happypack/loader?id=tslint',
            exclude: /(\.spec\.ts|node_modules)$/,
        },
        {
            test: /\.ts$/,
            loader: 'happypack/loader?id=coverage',
            enforce: 'post',
            exclude: /(\.spec\.ts|node_modules|bower_components)/
        }]
    },
    plugins: [
        new HappyPack({
            id: 'tslint',
            threadPool: happyThreadPool,
            loaders: [{
                loader: 'tslint-loader',
                options: {
                    typeCheck: true,
                    formatter: 'checkstyle',
                    formattersDirectory: 'node_modules/tslint/lib/formatters',
                    fileOutput: {
                        dir: 'reports',
                        ext: 'xml'
                    }
                }
            }]
        }),
        new HappyPack({
            id: 'coverage',
            threadPool: happyThreadPool,
            loaders: ['istanbul-instrumenter-loader?esModules=true']
        })
    ]
});
