import { StateSchema } from 'app/Providers/Store/types';

export const getSignsList = (state: StateSchema) => state.interface.signList;
