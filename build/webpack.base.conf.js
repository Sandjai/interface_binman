const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './components/app/app.js'
  },

 output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, 
    
    {
      test: /\.(sass|scss)$/,
      use: [{
          loader: "style-loader", // creates style nodes from JS strings
      }, {
        loader: 'css-loader',
        options: { sourceMap: true }
      }, {
        loader: 'postcss-loader',
        options: { sourceMap: true, config: { path: 'postcss.config.js' } }
      },{
          loader: "sass-loader" // compiles Sass to CSS
      }]
    },
    
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
        }
      ]
    },

    {
      test: /\.pug$/,
      loader: 'pug-loader'
    },

    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },


    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[filename].css'
    })
  ]


}




