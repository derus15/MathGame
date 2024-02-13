interface ErrorSchema {
    message: string;
}

export interface LoginParamsData {
    email: string;
    password: string;
}

export interface LoginSchema {
    token: string | null;
    error: ErrorSchema | null ;
    loadingStatus: 'loading' | 'loaded' | 'error' | '';
}
