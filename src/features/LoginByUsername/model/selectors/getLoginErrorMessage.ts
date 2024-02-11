import { StateSchema } from 'app/Providers/Store/types';

export const getLoginErrorMessage = (state: StateSchema) => state.login?.error?.message;
