var path = require('path');



module.exports = {
  entry:path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.*jsx$/,
        include: path.resolve(__dirname, 'src/lib'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-env']
           
          }
        }
      }, {
        test: /\.*css$/,
        include: path.resolve(__dirname, 'src/lib'),
            use : [
              'style-loader','css-loader'
            ]
       
       },
       {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        options: {
          presets: ['@babel/react', '@babel/preset-env']
         
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
  
    ]
  },
  externals: {
    'react': 'commonjs ' 
  },
  
};