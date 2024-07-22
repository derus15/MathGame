import { createSlice } from '@reduxjs/toolkit';
import { SessionDataSchema } from '../types/types';

const initialState: SessionDataSchema = {
    sessionPoints: 0,
    sessionTime: 0,
    sessionEPS: '0.00',
    sessionExampleList: [],
    sessionTimeFlags: [],
    sessionHungerRounds: 0,
    sessionErrors: 0,
};

export const sessionDataSlice = createSlice({

    name: 'sessionData',
    initialState,
    reducers: {

        startNewRoundTime: (state) => {
            state.sessionTimeFlags.push([]);
        },

        setSessionTimeFlags: (state) => {
            if (state.sessionTimeFlags.length > 0) {
                const currentTime = state.sessionTimeFlags[state.sessionTimeFlags.length - 1];
                currentTime.push(Date.now());
            } else {
                state.sessionTimeFlags.push([Date.now()]);
            }
        },

        resetSessionTimeFlags: (state) => {
            state.sessionTimeFlags = [];
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
        
        incrementSessionHungerRounds: (state) => {
            state.sessionHungerRounds += 1;
        },

        resetSessionHungerRounds: (state) => {
            state.sessionHungerRounds = 0;
        },

        incrementSessionErrors: (state) => {
            state.sessionErrors += 1;
        },

        resetSessionErrors: (state) => {
            state.sessionErrors = 0;
        },

    },
});

export const { actions: sessionDataActions } = sessionDataSlice;

export const { reducer: sessionDataReducer } = sessionDataSlice;
