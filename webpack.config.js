const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'built.js'
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
  }
}
