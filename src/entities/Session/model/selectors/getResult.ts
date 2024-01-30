import { StateSchema } from 'app/Providers/Store/types';

export const getResult = (state: StateSchema) => state.session.result;
