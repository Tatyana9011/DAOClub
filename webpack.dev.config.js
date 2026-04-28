const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    allowedHosts: 'all',
    open: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  output: {
    filename: '[name].bundle-dev.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Development',
    }),
    new CleanWebpackPlugin()
  ],
  module: {
        rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options:{
          presets: ['@babel/env'],
        }
      },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource'
    },
  ]

  },
  
};