import { StateSchema } from 'app/Providers/Store/types';

export const getSessionTime = (state: StateSchema) => state.sessionData.sessionTime;
