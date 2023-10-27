import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    standardCounter: 0,
    sprintTime: 0,
    examplesInSession: [],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

        incrementStandardCounter: (state) => {
            state.standardCounter += 1;
        },

        resetStandardCounter: (state) => {
            state.standardCounter = 0;
        },

        saveSprintTime: (state, action) => {
            state.sprintTime = action.payload;
        },

        resetSprintCounter: (state) => {
            state.sprintCounterTime = 0;
        },

        addExample: (state, action) => {
            state.examplesInSession = [...state.examplesInSession, action.payload];
        },

    },
});

export const {
    saveSprintTime,
    resetSprintCounter,
    incrementStandardCounter,
    resetStandardCounter,
    addExample,
} = dataSlice.actions;

export default dataSlice.reducer;
