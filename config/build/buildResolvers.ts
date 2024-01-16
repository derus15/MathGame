import { ResolveOptions } from 'webpack';
import { BuildOptions } from '../../src/app/types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {

    return {

        extensions: ['.tsx', '.ts', '.js', '.jsx'], // при импорте файлов мы не будем использовать расширение: 'import c from ./c']
        // в расширениях также был '.css', если что то не работает, попробуй поменять обратно
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
