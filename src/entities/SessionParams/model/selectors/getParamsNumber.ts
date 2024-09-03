import { StateSchema } from 'app/Providers/Store/types';

export const getParamsNumber = (state: StateSchema) => state.sessionParams.number;
