import { StateSchema } from 'app/Providers/Store/types';

export const getLoginLoadingStatus = (state: StateSchema) => state.login.loadingStatus;
