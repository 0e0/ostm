const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
}
