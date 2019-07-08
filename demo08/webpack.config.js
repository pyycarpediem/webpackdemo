const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
module.exports = {
    entry: './src/app.js', // 单一入口
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8085
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin({
            title: 'hahaha'
        })
    ]
}