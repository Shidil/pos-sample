const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');

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
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000',
      './src/index'
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
    new webpack.DefinePlugin(GLOBALS),
    new DashboardPlugin()
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
    host: 'localhost',
    port: 3000,
    hot: true
  }
});
