const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = merge(config, {
  entry: {
    application: [
      './src/styles/base.less',
      './src/index'
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin(GLOBALS),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  module: {
    noParse: /\.min\.js$/,
    loaders: [
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        loaders: [
          'style-loader',
          'css-loader',
          { loader: 'less-loader' }
        ]
      },

      // CSS
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
});
