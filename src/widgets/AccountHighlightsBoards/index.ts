export { ContainerBoards as HighlightsBoards } from './UI/ContainerBoards/ContainerBoards';
export type { HighlightBoardSchema } from './model/slice/types';
export { highlightBoardReducer, highlightBoardActions } from './model/slice/highlightBoardSlice';
export { getBoardLoadingStatus } from './model/selectors/getBoardLoadingStatus';
export { fetchHighlightsBoardData } from './model/services/fetchHighlightsBoardData';
