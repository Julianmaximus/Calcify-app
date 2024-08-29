const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize the config here
  config.entry = './App.js';
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  });
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  };

  return config;
};
