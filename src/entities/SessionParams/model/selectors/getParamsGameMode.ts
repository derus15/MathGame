import { StateSchema } from 'app/Providers/Store/types';

export const getParamsGameMode = (state: StateSchema) => state.sessionParams.gameMode;
