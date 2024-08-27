export interface UpdateUserDataParams {
    name: string;
    password: string;
}

export interface ResponseUpdateMessage {
    message: string;
}

export interface UpdateUserDataSchema {
    isValid: boolean;
    message: string;
}
