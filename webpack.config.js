var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    babel: {
        // enable stage 0 babel transforms.
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
}
