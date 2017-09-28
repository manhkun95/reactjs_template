const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer],
          } }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './build',
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether',
    }),
  ],
};
