import { StateSchema } from 'app/Providers/Store/types';

export const getParamsRounds = (state: StateSchema) => state.sessionParams.rounds;
