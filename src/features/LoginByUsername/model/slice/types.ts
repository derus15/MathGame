import { LoadingStatus } from 'app/types/config';

interface ErrorSchema {
    message: string;
}

export interface LoginParamsData {
    email: string;
    password: string;
}

export interface LoginSchema {
    token: string;
    error: ErrorSchema;
    loadingStatus: LoadingStatus;
}
