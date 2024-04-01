interface UserSchema {
    _id: string,
    name: string,
}

interface CounterTimeSchema {
    _id: string,
    total_time: number,
}

interface CounterExampleSchema {
    _id: string,
    total_example: number,
}

export interface AccountDataSchema {
    counterExample: CounterExampleSchema[],
    counterTime: CounterTimeSchema[],
    user: UserSchema,
}

export interface AccountSchema {
    data: AccountDataSchema | null,
    loadingStatus: 'loading' | 'loaded' | 'error' | '',
}
