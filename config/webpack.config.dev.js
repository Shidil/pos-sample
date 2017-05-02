const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    application: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './src/index'
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      // Sass
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        loaders: [
          'style-loader',
          'css-loader',
          { loader: 'less-loader', query: { outputStyle: 'expanded' } }
        ]
      },

      // CSS
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    port: 8080,
    host: 'localhost'
  }
});
