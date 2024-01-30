import { createSlice } from '@reduxjs/toolkit';
import { SessionSchema } from './types';

const initialState: SessionSchema = {
    sessionProgress: false,
    result: false,
};

export const sessionSlice = createSlice({

    name: 'session',
    initialState,
    reducers: {

        startSession: (state) => {
            if (!state.sessionProgress) {
                state.sessionProgress = true;
            }
        },

        endSession: (state) => {
            if (state.sessionProgress) {
                state.sessionProgress = false;
                state.result = true;
            }
        },

        resetSessionProgress: (state) => {
            state.sessionProgress = false;
        },
        
        closeResultPage: (state) => {
            state.result = false;
        },
    },
});

export const { actions: sessionActions } = sessionSlice;

export const { reducer: sessionReducer } = sessionSlice;
