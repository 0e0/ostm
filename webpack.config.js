module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },
  resolveLoader: {
      modulesDirectories: [
          '/users/path/a/node_modules'
      ]
},
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
}
