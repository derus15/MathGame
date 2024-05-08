export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    build: string;
    entry: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
