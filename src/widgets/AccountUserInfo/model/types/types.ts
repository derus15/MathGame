interface UserSchema {
    _id: string,
    name: string,
}

export interface AccountDataSchema {
    totalTimeInfo: number,
    totalExampleInfo: number,
    user: UserSchema,
}
