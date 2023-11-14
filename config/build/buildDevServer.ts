import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from '../../src/types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // при обновлении страницы роутинг сохраняется,
        hot: true,
    };

}
