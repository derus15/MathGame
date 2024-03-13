import { StateSchema } from 'app/Providers/Store/types';

export const getSessionExampleList = (state: StateSchema) => state.sessionData.sessionExampleList;
