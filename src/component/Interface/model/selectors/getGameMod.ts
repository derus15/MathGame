import { StateSchema } from 'redux/types';

export const getGameMod = (state: StateSchema) => state.interface.mode;
