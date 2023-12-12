import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    time: 0,
};

export const sessionDataSlice = createSlice({

    name: 'data',
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

export const {
    saveTime,
    incrementCounter,
    resetCounter,
} = sessionDataSlice.actions;

export default sessionDataSlice.reducer;
