import { StateSchema } from 'app/Providers/Store/types';

export const getParamsTime = (state: StateSchema) => state.sessionParams.time;
