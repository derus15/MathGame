import { StateSchema } from 'app/Providers/Store/types';

export const getSessionTimeFlags = (state: StateSchema) => state.sessionData.sessionTimeFlags;
