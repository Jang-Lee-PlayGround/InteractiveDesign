const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    //여기에 진입점
    test: './src/controllers/test.ts',
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
      '@controllers': path.resolve(__dirname, 'src/controllers'),
      '@typedef': path.resolve(__dirname, 'src/typedef'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@public': path.resolve(__dirname, 'src/public'),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
};
