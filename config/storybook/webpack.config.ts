import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../../src/app/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../src'),
    });

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
    }));

    // @ts-ignore
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    // @ts-ignore
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
    });

    return config;
};
