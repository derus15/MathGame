import { StateSchema } from 'app/Providers/Store/types';

export const getSessionErrors = (state: StateSchema) => state.sessionData.sessionErrors;
