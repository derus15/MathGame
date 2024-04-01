import { StateSchema } from 'app/Providers/Store/types';

export const getHeaderLoadingStatus = ((state: StateSchema) => state.initAuthData.loadingStatus);
