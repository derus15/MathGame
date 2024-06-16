import { StateSchema } from 'app/Providers/Store/types';

export const getExampleSignsList = (state: StateSchema) => state.example.signList;
