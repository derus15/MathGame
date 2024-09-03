import { createSlice } from '@reduxjs/toolkit';
import { SessionParamsSchema } from '../types/types';

const initialState: SessionParamsSchema = {
    time: Number(localStorage.getItem('durationTime')) || 15,
    number: Number(localStorage.getItem('durationNumber')) || 10,
    gameMode: localStorage.getItem('mode') || 'Стандарт',
    secretCounter: 0,
    rounds: Number(localStorage.getItem('rounds')) || 3,
};

const sessionParamsSlice = createSlice({

    name: 'sessionParams',
    initialState,
    reducers: {

        changeTime: (state, action) => {
            state.time = Number(action.payload);
            localStorage.setItem('durationTime', action.payload);
        },

        changeNumber: (state, action) => {
            state.number = Number(action.payload);
            localStorage.setItem('durationNumber', action.payload);
        },

        changeRounds: (state, action) => {
            state.rounds = Number(action.payload);
            localStorage.setItem('rounds', action.payload);
        },

        changeGameMode: (state, action) => {
            state.gameMode = action.payload;
            localStorage.setItem('mode', action.payload);
        },

        incrementSecretCounter: (state) => {
            state.secretCounter += 1;
        },

    },
});

export const { actions: sessionParamsActions } = sessionParamsSlice;
export const { reducer: sessionParamsReducer } = sessionParamsSlice;
