import { createSlice } from '@reduxjs/toolkit';
import { InterfaceSchema } from './types';

const initialState: InterfaceSchema = {
    time: Number(localStorage.getItem('durationTime')) || 15,
    number: Number(localStorage.getItem('durationNumber')) || 10,
    gameMode: localStorage.getItem('mode') || 'Стандарт',
    signList: JSON.parse(localStorage.getItem('signList')) || ['+', '-'],
    secretCounter: 0,
};

export const interfaceSlice = createSlice({

    name: 'interface',
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

        changeSign: (state, action) => {
            if (state.signList.includes(action.payload) && state.signList.length > 1) {
                state.signList = state.signList.filter((sign) => sign !== action.payload);
            } else if (!state.signList.includes(action.payload)) {
                state.signList = [...state.signList, action.payload];
            }
            localStorage.setItem('signList', JSON.stringify(state.signList));
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

export const { actions: interfaceActions } = interfaceSlice;

export const { reducer: interfaceReducer } = interfaceSlice;
