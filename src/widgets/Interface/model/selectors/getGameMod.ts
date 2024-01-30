import { StateSchema } from 'app/Providers/Store/types';

export const getGameMod = (state: StateSchema) => state.interface.mode;
