const HahaPlugin = require('./haha-plugin')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new HahaPlugin()
    ]
}