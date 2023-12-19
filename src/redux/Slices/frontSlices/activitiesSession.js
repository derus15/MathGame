import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sessionProgress: false,
    result: false,
};

export const activitiesSessionSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {

        startSession: (state) => {
            state.sessionProgress = true;
        },

        endSession: (state) => {
            if (state.sessionProgress) {
                state.sessionProgress = false;
                state.result = true;
            }
        },

        resetSession: (state) => {
            state.sessionProgress = false;
        },
        
        closeResult: (state) => {
            state.result = false;
        },
    },
});

export const { startSession, resetSession, endSession, closeResult } = activitiesSessionSlice.actions;

export default activitiesSessionSlice.reducer;
