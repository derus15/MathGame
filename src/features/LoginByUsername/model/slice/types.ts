interface ErrorSchema {
    message: string;
}

export interface LoginSchema {
    token: string | null;
    error: ErrorSchema | null ;
    loadingStatus: 'loading' | 'loaded' | 'error' | '';
}
