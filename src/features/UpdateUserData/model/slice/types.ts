import { LoadingStatus } from 'app/types/config';

export interface UpdateUserDataParams {
    name: string;
    password: string;
}

export interface UpdateUserDataSchema {
    error?: string;
    isValid: boolean,
    successMessage: string;
    loadingStatus: LoadingStatus;
}
