export interface AccountSchema {
    data: string | null,
    status: 'loading' | 'loaded' | 'error' | '',
}
