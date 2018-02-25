const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    index: './src/index.html',
    open: true,
    publicPath: path.resolve(__dirname, '../dist')
  }
};
