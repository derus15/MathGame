import { createSlice } from '@reduxjs/toolkit';
import { SessionDataSchema } from '../types/types';

const initialState: SessionDataSchema = {
    sessionPoints: 0,
    sessionTime: 0,
    sessionEPS: '0.00',
    sessionExampleList: [],
    sessionIdealTimeFlags: [],
};

export const sessionDataSlice = createSlice({

    name: 'sessionData',
    initialState,
    reducers: {

        startNewRoundTime: (state) => {
            state.sessionIdealTimeFlags.push([]);
        },

        setSessionTimeFlags: (state) => {
            if (state.sessionIdealTimeFlags.length > 0) {
                const currentRound = state.sessionIdealTimeFlags[state.sessionIdealTimeFlags.length - 1];
                currentRound.push(Date.now());
            } else {
                state.sessionIdealTimeFlags.push([Date.now()]);
            }
        },

        resetSessionTimeFlags: (state) => {
            state.sessionIdealTimeFlags = [];
        },

        incrementSessionPoints: (state) => {
            state.sessionPoints += 1;
        },

        resetSessionPoints: (state) => {
            state.sessionPoints = 0;
        },

        saveSessionTime: (state, action) => {
            state.sessionTime = action.payload;
        },

        resetSessionTime: (state) => {
            state.sessionTime = 0;
        },

        saveEPS: (state, action) => {
            state.sessionEPS = action.payload;
        },
        
        updateExampleList: (state, action) => {
            const [example, answer] = action.payload;
            const newExample = `${example} ${answer}`;
            state.sessionExampleList = [...state.sessionExampleList, newExample];
        },
        
        resetExampleList: (state) => {
            state.sessionExampleList = [];
        },

    },
});

export const { actions: sessionDataActions } = sessionDataSlice;

export const { reducer: sessionDataReducer } = sessionDataSlice;
