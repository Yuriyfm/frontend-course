import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildsOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildsOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}