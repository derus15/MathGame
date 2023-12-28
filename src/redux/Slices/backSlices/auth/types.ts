export interface UserSchema {
    id: string,
    name: string,
}

export interface TokenSchema {
    token: string
}

export interface AuthSchema {
    data: TokenSchema | null,
    statusLog: 'loading' | 'loaded' | 'error' | '',
    statusReg: 'loading' | 'loaded' | 'error' | '',
    user: UserSchema,
    isAuth: boolean,
}
