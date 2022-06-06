const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    //여기에 진입점
    test:'./source/controllers/test.controller.ts'
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app/bundles'),
  },
  module: {
    rules: [{ test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  mode: 'none',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@controllers': path.resolve(__dirname, 'source/controllers'),
      '@typedef': path.resolve(__dirname, 'source/typedef'),
      '@hooks': path.resolve(__dirname, 'source/hooks'),
      '@public': path.resolve(__dirname, 'source/public'),
      '@views': path.resolve(__dirname, 'source/views'),
    },
  },
};
