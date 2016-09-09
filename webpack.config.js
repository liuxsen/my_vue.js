var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.jpg$/,
            loader: "file-loader"
        }]
    },
    babel: {
        // enable stage 0 babel transforms.
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
}
