import { StateSchema } from 'app/Providers/Store/types';

export const getTime = (state: StateSchema) => state.interface.time;
