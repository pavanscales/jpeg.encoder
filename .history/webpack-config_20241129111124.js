const path = require('path');

module.exports = {
  entry: './src/index.js',  // Main entry point of your project
  output: {
    filename: 'bundle.js',  // The name of the bundled file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // For transpiling ES6+ code to compatible JavaScript
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',  // Set to 'production' for optimized output
};
