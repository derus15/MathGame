import { StateSchema } from 'app/Providers/Store/types';

export const getBoosterCount = (state: StateSchema) => state.boosterPack.boosterCount;
