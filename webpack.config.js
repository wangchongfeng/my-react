const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'app.js',
  },
  devServer: {
    host:'localhost',
    port: 1234,
    contentBase: './static'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react': path.resolve(__dirname, './packages/react'),
      'react-dom': path.resolve(__dirname, './packages/react-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
    // new CopyWebpackPlugin({
    //     patterns: [{
    //         from: './public/static',
    //         to: './static'
    //     }]
    // }),
    new webpack.LoaderOptionsPlugin({
      options: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
      },
    }),
  ],
  
};
