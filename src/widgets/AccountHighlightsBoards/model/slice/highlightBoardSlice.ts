import { createSlice } from '@reduxjs/toolkit';
import { fetchHighlightsBoardData } from '../services/fetchHighlightsBoardData';
import { HighlightBoardSchema } from 'widgets/AccountHighlightsBoards/model/slice/types';

const initialState: HighlightBoardSchema = {
    timeBoard: [],
    numberBoard: [],
    loadingStatus: '',
};

const highlightBoardSlice = createSlice({

    name: 'highlightBoard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchHighlightsBoardData.pending, (state) => {
                state.timeBoard = null;
                state.numberBoard = null;
                state.loadingStatus = 'loading';
            })
            .addCase(fetchHighlightsBoardData.fulfilled, (state, action) => {
                const { timeBoard, numberBoard } = action.payload;
                const defaultPlaceholder = {
                    title: '—',
                    eps: '—',
                    additionalParameter: '—',
                };

                state.timeBoard = timeBoard.concat(
                    Array(3 - timeBoard.length).fill(defaultPlaceholder),
                );
                state.numberBoard = numberBoard.concat(
                    Array(3 - numberBoard.length).fill(defaultPlaceholder),
                );

                state.loadingStatus = 'loaded';
            })
            .addCase(fetchHighlightsBoardData.rejected, (state) => {
                state.timeBoard = null;
                state.numberBoard = null;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: highlightBoardActions } = highlightBoardSlice;

export const { reducer: highlightBoardReducer } = highlightBoardSlice;
