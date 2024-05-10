import { createSlice } from '@reduxjs/toolkit';
import { SessionSchema } from './types';

const initialState: SessionSchema = {
    sessionProgress: false,
    result: false,
    unexpectedEnd: false,
};

export const sessionSlice = createSlice({

    name: 'session',
    initialState,
    reducers: {

        startSession: (state) => {
            state.sessionProgress = true;
            state.unexpectedEnd = false;
        },

        endSession: (state) => {
            if (state.sessionProgress) {
                state.sessionProgress = false;
                state.result = true;
            }
        },

        unexpectedEnd: (state) => {
            if (state.sessionProgress) {
                state.unexpectedEnd = true;
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
