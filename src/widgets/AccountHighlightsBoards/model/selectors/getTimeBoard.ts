import { StateSchema } from 'app/Providers/Store/types';

export const getTimeBoard = (state: StateSchema) => state.highlightBoard.timeBoard;
