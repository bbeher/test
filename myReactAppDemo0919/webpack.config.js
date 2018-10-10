// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    
    devServer: {
       inline: true,
       port: 2020,
       historyApiFallback: true,
    //    hot: true,
       stats: 'errors-only',
       proxy: {
         '/test/api': {
             target: 'http://localhost:20189',
             secure: true,
             changeOrigin: true
         }
       }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]',
            //             outputPath: 'images/'
            //           }
            //       }
            //     ]
            //   }
        ]
    },
    // devServer: {
    //   historyApiFallback: true,
    // },
    plugins: [
        new ExtractTextPlugin(
            { filename: 'style.css' }
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};