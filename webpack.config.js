const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: ['./app.scss', './index.js'],
  
  output: {
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'bundle.css',
                  },
                },
                { loader: 'extract-loader' },
                { loader: 'css-loader' },
                {
                  loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                },
                { loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules']
                    }
                },
              ]
          }
      ]
  }
};
