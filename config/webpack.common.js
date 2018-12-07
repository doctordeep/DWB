/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

require("dotenv").config();

module.exports = {
  entry: {
    app: './_src/index.js',
    vendor: ['a11y-dialog', 'default-passive-events', 'jquery-smooth-scroll', 'lazysizes', 'prop-types', 'react', 'react-a11y-dialog', 'react-dom', 'react-web-notification', 'svg4everybody'],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      background: '#212529',
    }),
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../_layouts/default.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
      async: /\.js$/,
      preload: {
        test: /\.js$/,
        chunks: 'async'
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: path.resolve('_images'),
      to: 'images/',
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
  devServer: {
    contentBase: './assets',
    port: 3000,
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/svg4everybody/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-2'],
            plugins: ["transform-class-properties"]
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss.config.js',
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: require.resolve("svg4everybody"),
        loader: "imports-loader?this=>window"
      }
    ],
  },
};
