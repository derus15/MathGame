interface ErrorSchema {
    message: string;
}

export interface RegisterParamsData {
    name: string;
    email: string;
    password: string;
}

export interface RegisterSchema {
    token: string | null;
    error: ErrorSchema | null ;
    loadingStatus: 'loading' | 'loaded' | 'error' | '';
}
