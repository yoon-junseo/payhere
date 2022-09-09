/* eslint-disable */
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
require('dotenv/config');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|mp4|webm|webp)$/,
        type: 'asset',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new EnvironmentPlugin([
      'REACT_APP_GITHUB_API_URL',
      'REACT_APP_FIREBASE_API_KEY',
      'REACT_APP_FIREBASE_AUTH_DOMAIN',
      'REACT_APP_FIREBASE_PROJECT_ID',
      'REACT_APP_FIREBASE_STORAGE_BUCKET',
      'REACT_APP_FIREBASE_MESSAGINGSENDER_ID',
      'REACT_APP_FIREBASE_APP_ID',
      'REACT_APP_FIREBASE_MEASUREMENT_ID',
    ]),
  ],
};
