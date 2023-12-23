import { createSlice } from '@reduxjs/toolkit';
import { SessionDataSchema } from './types';

const initialState: SessionDataSchema = {
    counter: 0,
    time: 0,
};

export const sessionDataSlice = createSlice({

    name: 'sessionData',
    initialState,
    reducers: {

        incrementCounter: (state) => {
            state.counter += 1;
        },

        resetCounter: (state) => {
            state.counter = 0;
        },

        saveTime: (state, action) => {
            state.time = action.payload;
        },

    },
});

export const { actions: sessionDataActions } = sessionDataSlice;

export const { reducer: sessionDataReducer } = sessionDataSlice;
