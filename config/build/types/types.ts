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
    isAnalyzer: boolean;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    isAnalyzer: boolean;
    port: number;
}
