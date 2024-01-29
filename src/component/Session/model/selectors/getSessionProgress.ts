import { StateSchema } from 'redux/types';

export const getSessionProgress = (state: StateSchema) => state.session.sessionProgress;
