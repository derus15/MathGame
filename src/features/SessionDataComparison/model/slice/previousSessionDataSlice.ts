import { createSlice } from '@reduxjs/toolkit';
import { PreviousSessionDataSchema } from '../types/types';

const initialState: PreviousSessionDataSchema = {
    data: {
        mode: 'Стандарт',
        number: 0,
        time: 0,
        sign: ['+', '-'],
        eps: '0.00',
        modifications: [],
        unexpectedEnd: false,
    },
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
