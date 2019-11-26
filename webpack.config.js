var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: 'src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\(.*js|.*jsx)$/,
        include: path.resolve(__dirname, 'src/lib'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','env'],
            plugins: [
              require("@babel/plugin-transform-arrow-functions"),
              require("@babel/plugin-transform-modules-commonjs")
          ]
          }
        }
      }, {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : [
                'css-loader'
            ]
        })
       },
    ]
  },
  externals: {
    'react': 'commonjs ' 
  }
};