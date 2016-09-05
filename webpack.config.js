const webpack = require('webpack');
const Path = require('path');

const nodeEnv = process.env.NODE_ENV || 'production';
const BUILD_DIR = Path.join(__dirname, 'dist');
const APP_DIR = Path.join(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: `${APP_DIR}/index.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8080
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015-native-modules','es2015', 'react'],
      },
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],
};