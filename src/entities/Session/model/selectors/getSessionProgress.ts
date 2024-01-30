import { StateSchema } from 'app/Providers/Store/types';

export const getSessionProgress = (state: StateSchema) => state.session.sessionProgress;
