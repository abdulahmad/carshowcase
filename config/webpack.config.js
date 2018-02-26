const path = require('path');

module.exports = {
  plugins: [],
  entry: './src/client/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    index: '../src/index.html',
    open: true,
    publicPath: '/',
  },
};
