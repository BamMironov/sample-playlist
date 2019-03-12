const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin()
    ]
};