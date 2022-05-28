const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 9000,
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                produtos: 'produtos@http://localhost:9001/remoteEntry.js',
                carrinho: 'carrinho@http://localhost:9002/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ]
}