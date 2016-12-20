var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: {
        foldcontent_jquery: './src/foldcontent.jquery.js'},
    output: {
        path: BUILD_PATH,
        filename: '[name].min.js',
        library: 'foldcontent',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true,

    devServer: {
        publicPath: "/dist/",
        port: 8082
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};