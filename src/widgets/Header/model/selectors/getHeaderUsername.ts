import { StateSchema } from 'app/Providers/Store/types';

export const getHeaderUsername = (state: StateSchema) => state.initAuthData?.username;
