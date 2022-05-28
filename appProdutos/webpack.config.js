const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    mode: 'development',
    output: {
        uniqueName: 'produtos',
    },
    devServer: {
        port: 9001,
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'produtos',
            filename: 'remoteEntry.js',
            exposes: {
                './ProdutosApp' : path.resolve(__dirname, 'src', 'index.js'),
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