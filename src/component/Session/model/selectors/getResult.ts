import { StateSchema } from 'redux/types';

export const getResult = (state: StateSchema) => state.session.result;
