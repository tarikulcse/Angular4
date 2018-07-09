var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './server.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
     },
     resolve: {
        extensions: ['.js', '.jsx','.json']
      },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
        }
      
 };