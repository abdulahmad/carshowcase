const path = require('path');

module.exports = {
  plugins: [],
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
    index: '../src/index.html',
    open: true,
    publicPath: "/"
  }
};
