import { createSlice } from '@reduxjs/toolkit';
import { SessionDataSchema } from './types';

const initialState: SessionDataSchema = {
    sessionPoints: 0,
    sessionTime: 0,
};

export const sessionDataSlice = createSlice({

    name: 'sessionData',
    initialState,
    reducers: {

        incrementSessionPoints: (state) => {
            state.sessionPoints += 1;
        },

        resetSessionPoints: (state) => {
            state.sessionPoints = 0;
        },

        saveSessionTime: (state, action) => {
            state.sessionTime = action.payload;
        },

    },
});

export const { actions: sessionDataActions } = sessionDataSlice;

export const { reducer: sessionDataReducer } = sessionDataSlice;
