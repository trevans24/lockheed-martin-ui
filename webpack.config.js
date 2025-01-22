'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // file for webpack to watch
  entry: './examples/index.jsx',

  // where to output the bundled js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },


  // loaders or compilers
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000
  },
  // performance: {
  //   hints: process.env.NODE_ENV === 'production' ? "warning" : false
  // },
  plugins: [new HtmlWebpackPlugin({ template: './examples/index.html', filename: 'index.html' })],
};
