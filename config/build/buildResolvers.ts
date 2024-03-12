import webpack from "webpack";
import path from "path";
import {BuildsOptions} from "./types/config";

export function buildResolvers(options: BuildsOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    }
}