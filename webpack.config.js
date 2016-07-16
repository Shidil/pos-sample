let webpack = require ('webpack');
let path = require('path');

module.exports =  {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /.*\js$/,
        exclude: 'node_modules',
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
