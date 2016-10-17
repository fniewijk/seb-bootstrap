var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/client/main.js',
    output: {
        path: './assets',
        filename: 'client.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }]
    },
    plugins:[
      new ExtractTextPlugin('client.bundle.css')
    ]
};
