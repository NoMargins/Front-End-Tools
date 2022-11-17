const path = require('path')

module.exports = {
    entry: {
        profile: './src/profile/index.js',
        dashboard: './src/dashboard/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),

    }
}