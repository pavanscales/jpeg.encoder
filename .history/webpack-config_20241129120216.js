// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your project
  output: {
    filename: 'bundle.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm'], // Make sure these file types are included
    alias: {
      // Define any custom aliases if you have them, else remove the alias field
      '@core': path.resolve(__dirname, 'src/core/'),
      '@encoding': path.resolve(__dirname, 'src/encoding/'),
    },
  },
  module: {
    
        resolve: {
         
        },
      };
      
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
  mode: 'development', // or 'production'
};
