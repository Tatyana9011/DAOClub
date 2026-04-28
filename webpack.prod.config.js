const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/DAOClub/',
    environment: {
      arrowFunction: false
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
    template: './public/index.html'
  })
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
  }
};