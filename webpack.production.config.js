import path from 'path';

const node_modules_dir = path.resolve(__dirname, 'node_modules');

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      exclude: [node_modules_dir],
      loader: 'babel'
    }]
  }
}
