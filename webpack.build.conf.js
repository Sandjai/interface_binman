const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const { ResolvePlugin } = require('webpack')
const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: []
})

module.exports = new Promise ((res, rej) => {
    res(buildWebpackConfig)
})
--mode production