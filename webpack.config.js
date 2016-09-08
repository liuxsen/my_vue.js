var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
<<<<<<< HEAD
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
=======
    entry: {
        a: './app/a.js',
        b: './app/b.js'
>>>>>>> 67fcd725bb2acd8fe6f0b07456cfd04466580744
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
<<<<<<< HEAD
            test: /.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.vue$/,
            loader: 'vue'
=======
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
>>>>>>> 67fcd725bb2acd8fe6f0b07456cfd04466580744
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
