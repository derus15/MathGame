import { StateSchema } from 'app/Providers/Store/types';

export const getInitialSeed = (state: StateSchema) => state.example.seed;
