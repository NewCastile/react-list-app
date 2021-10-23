// webpack.config.js  
const webpack = require('webpack')
const path = require('path');
const { supportedLocales } = require('./locales')

module.exports = {    
    mode: 'development',    
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }, 
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
        compress: true,
        port: 8000,
        historyApiFallback: true,
    },
    module: {  
        rules: [  
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: [
                    "@babel/env",
                    "@babel/preset-react"
                ] }
              },
            {
                test: /\.(png|svg|jpg|jpeg|)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[hash][ext][query]'
                }
            }
        ]  
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
          /date\-fns[\/\\]/,
          new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]index\.js$`)
        )
      ]
};