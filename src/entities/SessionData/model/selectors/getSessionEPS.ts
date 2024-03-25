import { StateSchema } from 'app/Providers/Store/types';

export const getSessionEPS = (state: StateSchema) => state.sessionData.sessionEPS;
