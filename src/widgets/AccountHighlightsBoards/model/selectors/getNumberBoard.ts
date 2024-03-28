import { StateSchema } from 'app/Providers/Store/types';

export const getNumberBoard = (state: StateSchema) => state.highlightBoard.numberBoard;
