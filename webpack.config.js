const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],

    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('styles.css')
  ]
};
