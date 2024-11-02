import { StateSchema } from 'app/Providers/Store/types';

export const getSessionTimeMilliseconds = (state: StateSchema) => state.sessionData.sessionTime;
