import { StateSchema } from 'app/Providers/Store/types';

export const getLoginError = (state: StateSchema) => state.login?.error;
