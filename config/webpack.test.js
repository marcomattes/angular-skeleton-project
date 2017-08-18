var helpers = require('./helpers');

module.exports = {
  target: "web",
  devtool: 'inline-source-map',

  entry: {
      'test': 'mocha-loader!./config/mocha-test-shim.js'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    postLoaders: [{
      test: /\.(js|ts)/,
      exclude: /(node_modules|bower_components)/,
      include: helpers.root('app'),  // instrument only testing sources with Istanbul, after other loaders run
      loader: 'istanbul-instrumenter-loader'
    }],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader?sourceMap=false&inlineSourceMap=true', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  }
}
