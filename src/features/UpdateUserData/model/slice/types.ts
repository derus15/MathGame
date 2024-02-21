export interface UpdateUserDataParams {

    name: string;
    password: string;

}

export interface UpdateUserDataSchema {
    error?: string;
    isValid: boolean,
    successMessage: string;
    loadingStatus: 'loading' | 'loaded' | 'error' | '';
}
