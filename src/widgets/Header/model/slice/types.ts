export interface InitAuthDataSchema {
    username: string | null
    loadingStatus: 'loading' | 'loaded' | 'error';
}
