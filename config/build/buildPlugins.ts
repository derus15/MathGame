import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildOptions } from './types/types';

export function buildPlugins({ paths, isDev, isAnalyzer }: BuildOptions): webpack.Configuration['plugins'] {

    const plugins: webpack.Configuration['plugins'] = [
        // ниже без указания template, html создается заново
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ];

    if (isAnalyzer) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));
    }

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    return plugins;
}
