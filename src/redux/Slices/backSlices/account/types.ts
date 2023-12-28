// export interface AccountDataSchema {
//     counterTime: number,
//     counterExample: number,
//     user: string,
// }

export interface AccountSchema {
    data: string | null,
    status: 'loading' | 'loaded' | 'error' | '',
}
