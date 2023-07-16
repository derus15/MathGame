import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    standardCounter: 0,
    sprintCounterTime: 0,
    timeForExample: [],
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

        incrementSprintCounter: (state) => {
            state.sprintCounterTime += 1;
        },

        resetSprintCounter: (state) => {
            state.sprintCounterTime = 0;
        },

    },
});

export const {
    incrementSprintCounter,
    resetSprintCounter,
    incrementStandardCounter,
    resetStandardCounter,
} = dataSlice.actions;

export default dataSlice.reducer;