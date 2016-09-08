var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'es6'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    }
};
