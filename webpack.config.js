const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const common = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    ExtractCssChunks.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true
                },
                common: {
                    minChunks: 2,
                    chunks: 'all',
                    name: 'common',
                    priority: 10,
                    enforce: true,
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            chunks: ['vendor', 'main', 'common'],
            hash: true
        }),
        new ExtractCssChunks({
            filename: "[name].css",
        })
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        return merge([
            common,
            prodConfig
        ]);
    }
    
    if (argv.mode === 'development') {
        return merge([
            common,
            devConfig
        ]);
    }
}