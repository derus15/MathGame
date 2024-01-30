import { StateSchema } from 'app/Providers/Store/types';

export const getSessionPoints = (state: StateSchema) => state.sessionData.sessionPoints;
