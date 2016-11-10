const webpack = require('webpack');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/src/index.html',
//   filename: 'public/index.html',
//   inject: 'body'
// });

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    // HTMLWebpackPluginConfig,
    new ExtractTextPlugin("style/styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
