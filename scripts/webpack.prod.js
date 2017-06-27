//-----------  Imports  -----------//

const path    = require('path')
const webpack = require('webpack')

//-----------  Export  -----------//

module.exports = require('./webpack.base')({
  devtool : 'cheap-module-eval-source-map',
  plugins : [
    new webpack.optimize.CommonsChunkPlugin({
      name      : 'vendor',
      async     : true,
      children  : true,
      minChunks : 2,
    }),
  ],
  entry   : [
    path.join(process.cwd(), 'src/index.js'),
  ],
  output  : {
    filename      : '[name].[chunkhash].js',
    chunkFilename : '[name].[chunkhash].chunk.js',
  },
})
