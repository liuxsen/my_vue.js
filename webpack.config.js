var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        a: './app/a.js',
        b: './app/b.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }]
    },
    output: {
        path: 'build',
        filename: '[name]-bundle.js',
        chunkFilename: "[id].js"
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
}
