import { StateSchema } from 'app/Providers/Store/types';

export const getIsRoundProgress = (state: StateSchema) => state.hungerMode.isRoundProgress;
