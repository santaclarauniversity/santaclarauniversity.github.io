const path = require('path');
const webpack = require('webpack');


/**
 * Define plugins based on environment
 * @param {boolean} isDev If in development mode
 * @return {Array}
 */
function getPlugins(isDev) {

  const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({}),
  ];

  if (isDev) {
    plugins.push(new webpack.NoErrorsPlugin());
  } else {
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }));
  }

  return plugins;

}


/**
 * Define loaders
 * @return {Array}
 */
function getLoaders() {

  const loaders = [{
    test: /(\.js)/,
    exclude: /(node_modules)/,
    loaders: ['babel-loader'],
  }, {
    test: /(\.jpg|\.png)$/,
    loader: 'url-loader?limit=10000',
  }, {
    test: /\.json/,
    loader: 'json-loader',
  }];

  return loaders;

}


module.exports = (configRoot, config) => {
  return {
    entry: {
      'fabricator': configRoot.src + config.src.scripts.fabricator,
      'toolkit': configRoot.src + config.src.scripts.toolkit
    },
    output: {
      path: configRoot.js,
      filename: '[name].js',
    },
    resolve: {
      extensions: ['', '.js'],
    },
    plugins: getPlugins(config.dev),
    module: {
      loaders: getLoaders(),
    },
  };
};
