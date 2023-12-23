import { createSlice } from '@reduxjs/toolkit';
import { ActivitiesSessionSchema } from './types';

const initialState: ActivitiesSessionSchema = {
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

export const { actions: activitiesSessionActions } = activitiesSessionSlice;

export const { reducer: activitiesSessionReducer } = activitiesSessionSlice;
