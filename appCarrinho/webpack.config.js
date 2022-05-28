const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    mode: 'development',
    output: {
        uniqueName: 'carrinho',
    },
    devServer: {
        port: 9002,
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'carrinho',
            filename: 'remoteEntry.js',
            exposes: {
                './CarrinhoApp' : path.resolve(__dirname, 'src', 'index.js'),
            },
            shared: {
                '@faker-js/faker' : {
                    singleton: true,
                    requiredVersion: "^7.1.0",
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ]
}