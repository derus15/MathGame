import { StateSchema } from 'app/Providers/Store/types';

export const getBoardLoadingStatus = (state: StateSchema) => state.highlightBoard.loadingStatus;
