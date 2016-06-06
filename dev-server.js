require('dotenv').config();
require('babel-register');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  contentBase: './client',
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}).listen(process.env.PORT_EXTERNAL, 'localhost', a => a);
