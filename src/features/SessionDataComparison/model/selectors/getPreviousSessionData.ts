import { StateSchema } from 'app/Providers/Store/types';

export const getPreviousSessionData = (state: StateSchema) => state.previousData.data;
