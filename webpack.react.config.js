const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        mainFields: ["main", "module", "browser"],
    },
    entry: "./src/app.tsx",
    target: "electron-renderer",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(obj|gltf|glb|max)$/i,
                loader: 'file-loader'
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/renderer"),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
        publicPath: "/",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
    },
    plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
};