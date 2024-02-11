import { StateSchema } from 'app/Providers/Store/types';

export const getRegisterLoadingStatus = (state: StateSchema) => state.register.loadingStatus;
