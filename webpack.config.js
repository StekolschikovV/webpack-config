const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                include: APP_DIR
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ]
};

module.exports = config;