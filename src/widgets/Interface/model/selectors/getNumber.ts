import { StateSchema } from 'app/Providers/Store/types';

export const getNumber = (state: StateSchema) => state.interface.number;
