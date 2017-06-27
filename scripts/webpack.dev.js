//-----------  Imports  -----------//

const path    = require('path')
const webpack = require('webpack')

//-----------  Export  -----------//

module.exports = require('./webpack.base')({
  devtool : 'cheap-module-eval-source-map',
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry   : [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output  : {
    filename      : '[name].js',
    chunkFilename : '[name].chunk.js',
  },
})
