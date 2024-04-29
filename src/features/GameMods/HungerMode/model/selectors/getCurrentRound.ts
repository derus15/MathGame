import { StateSchema } from 'app/Providers/Store/types';

export const getCurrentRound = (state: StateSchema) => state.hungerMode.currentRound;
