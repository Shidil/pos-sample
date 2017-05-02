let webpack = require('webpack');
let path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },

  resolve: {
    modules: [
      path.join(__dirname, '../src'),
      'node_modules'
    ],
    alias: {
      // models: path.join(__dirname, '../src/assets/javascripts/models')
    },
    extensions: ['.js', '.jsx', '.json', '.less']
  },

  plugins: [
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks: Infinity
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        loaders: ['babel-loader']
      },

      // fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]'
        }
      },

      // Images
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  }
};
