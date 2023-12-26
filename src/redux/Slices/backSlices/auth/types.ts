// export interface UserSchema {
//     id: string,
//     name: string,
// }

// export interface TokenSchema {
//     token: string
// }

export interface AuthSchema {
    data: string | null,
    statusLog: 'loading' | 'loaded' | 'error' | '',
    statusReg: 'loading' | 'loaded' | 'error' | '',
    // user: UserSchema
}
