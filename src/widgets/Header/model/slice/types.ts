import { LoadingStatus } from 'app/types/config';

export interface InitAuthDataSchema {
    username: string
    loadingStatus: LoadingStatus;
}
