import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/types';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, //  выбираем какие модули мы обрабатываем ts, tsx. По умолчанию только js
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
            },
        }],
        exclude: /node_modules/, // node_modules не трогаем
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/, // благодаря этому мы можем использовать svg везде, и в content: url(./icon.svg)
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(jpe?g|png|gif)$/i,
        use: { // без use билд сборка не работает
            loader: 'file-loader?name=app/images/[name].[ext]',
        },
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];

}
