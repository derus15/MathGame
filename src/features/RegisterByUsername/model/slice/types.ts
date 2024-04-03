import { LoadingStatus } from 'app/types/config';

interface ErrorSchema {
    message: string;
}

export interface RegisterParamsData {
    name: string;
    email: string;
    password: string;
}

export interface RegisterSchema {
    token: string;
    error: ErrorSchema;
    loadingStatus: LoadingStatus;
}
