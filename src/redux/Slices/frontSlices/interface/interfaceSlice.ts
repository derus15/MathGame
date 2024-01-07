import { createSlice } from '@reduxjs/toolkit';
import { InterfaceSchema } from './types';

const initialState: InterfaceSchema = {
    time: Number(localStorage.getItem('durationTime')) || 15,
    number: Number(localStorage.getItem('durationNumber')) || 10,
    mode: localStorage.getItem('mode') || 'Стандарт',
    signList: JSON.parse(localStorage.getItem('signList')) || ['+', '-'],
    modifications: localStorage.getItem('modifications') || '',
};

export const interfaceSlice = createSlice({

    name: 'interface',
    initialState,
    reducers: {

        changeTime: (state, action) => {
            state.time = action.payload;
            localStorage.setItem('durationTime', action.payload);
        },

        changeNumber: (state, action) => {
            state.number = action.payload;
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
            state.mode = action.payload;
            localStorage.setItem('mode', action.payload);
        },

        changeModifications: (state, action) => {
            if (state.modifications === action.payload) {
                state.modifications = '';
                localStorage.setItem('modifications', '');
            } else {
                state.modifications = action.payload;
                localStorage.setItem('modifications', state.modifications);
            }

        },
    },
});

export const { actions: interfaceActions } = interfaceSlice;

export const { reducer: interfaceReducer } = interfaceSlice;
