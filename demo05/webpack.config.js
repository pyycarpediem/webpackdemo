const path = require('path')

module.exports = {
    entry: {
        index: './src/app.js'
    },
    mode: 'development',
    output: {
        filename: '[name].[hash:6].js', // name对应entry名
        path: path.join(__dirname, 'release') // 拼接 __dirname根目录
    }
}