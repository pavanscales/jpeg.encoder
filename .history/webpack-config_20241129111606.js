const path = require('path');

module.exports = {
  entry: './src/index.js', // Main entry file for your project
  output: {
    filename: 'bundle.js',  // The output bundled file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',  // Use 'production' for optimized builds
};
