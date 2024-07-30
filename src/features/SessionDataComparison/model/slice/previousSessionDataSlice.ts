import { createSlice } from '@reduxjs/toolkit';
import { PreviousSessionDataSchema } from '../types/types';

const initialState: PreviousSessionDataSchema = {
    data: null,
};

const previousSessionDataSlice = createSlice({

    name: 'previousSessionData',
    initialState,
    reducers: {

        setData: (state, action) => {
            state.data = action.payload;
        },

    },
});

export const { actions: previousSessionDataActions } = previousSessionDataSlice;
export const { reducer: previousSessionDataReducer } = previousSessionDataSlice;
