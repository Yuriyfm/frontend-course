import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildsOptions} from "./types/config";

export function buildLoaders({isDev}: BuildsOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => resPath.includes('.module.'),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'
                        },
                    }
                },
                "sass-loader",
            ],
        }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const babelLoader = {
        test: /\.(js | ts | jsx | tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract'],
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }
                ],
            }
        }
    }

    return [
        scssLoader,
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
    ]
}