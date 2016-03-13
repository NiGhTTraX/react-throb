import path from 'path';


export default {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loaders: ['style', 'css', 'less']
    }]
  }
};
