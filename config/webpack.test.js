var webpack = require('webpack');
var path = require('path');
var HappyPack = require('happypack');
var happyThreadPool = require('./happy-pack-threadpool');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loaders: ['happypack/loader?id=ts'],
      exclude: /node_modules/
    },
    {
      test: /\.html$/,
      loader: 'happypack/loader?id=html'
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'happypack/loader?id=content'
    }]
  },

  plugins: [
    new HappyPack({
      id: 'ts',
      threadPool: happyThreadPool,
      loaders: ['ts-loader?transpileOnly=true&happyPackMode=true', 'angular2-template-loader']
    }),
    new HappyPack({
      id: 'html',
      threadPool: happyThreadPool,
      loaders: ['html-loader?attrs=false']
    }),
    new HappyPack({
      id: 'content',
      threadPool: happyThreadPool,
      loaders: ['null-loader']
    })
  ]
};