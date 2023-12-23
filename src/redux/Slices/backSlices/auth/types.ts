export interface AuthSchema {
    data: string | null,
    statusLog: 'loading' | 'loaded' | 'error' | '',
    statusReg: 'loading' | 'loaded' | 'error' | '',
}
