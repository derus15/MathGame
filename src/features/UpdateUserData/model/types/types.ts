export interface UpdateUserDataParams {
    name: string;
    password: string;
}

export interface ResponseMessage {
    message: string;
}

export interface UpdateUserDataSchema {
    isValid: boolean;
}
