import { StateSchema } from 'app/Providers/Store/types';

export const getLoginToken = (state: StateSchema) => state.login?.token;
