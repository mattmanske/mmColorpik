//-----------  Imports  -----------//

const path    = require('path')
const webpack = require('webpack')

//-----------  Definitions  -----------//

const output = {
  path: path.resolve(process.cwd(), 'build')
}

//-----------  Export  -----------//

module.exports = (opts) => ({
  target  : 'web',
  entry   : opts.entry,
  output  : Object.assign(output, opts.output),
  devtool : opts.devtool,
  resolve : {
    modules    : ['app', 'node_modules'],
    extensions : ['.js'],
    mainFields : ['browser', 'main'],
  },
  module  : {
    loaders: [{
      test    : /\.(js|jsx)$/,
      loader  : 'babel-loader',
      exclude : /node_modules/,
    }, {
      test    : /\.css$/,
      include : /node_modules/,
      loaders : ['style-loader', 'css-loader'],
    }, {
      test    : /\.(eot|svg|ttf|woff|woff2)$/,
      loader  : 'file-loader',
    }, {
      test    : /\.(jpg|png|gif)$/,
      loader  : 'file-loader',
    }, {
      test    : /\.html$/,
      loader  : 'html-loader',
    }, {
      test    : /\.json$/,
      loader  : 'json-loader',
    }],
  },
});
