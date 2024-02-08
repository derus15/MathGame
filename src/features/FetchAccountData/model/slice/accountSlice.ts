import { createSlice } from '@reduxjs/toolkit';
import { AccountSchema } from './types';
import { fetchAccountData } from '../services/fetchAccountData';

const initialState:AccountSchema = {
    data: null,
    status: '',
};

const accountSlice = createSlice({

    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchAccountData.pending, (state) => {
                state.data = null;
                state.status = 'loading';
            })
            .addCase(fetchAccountData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAccountData.rejected, (state) => {
                state.data = null;
                state.status = 'error';
            });
    },
});

export const { actions: accountActions } = accountSlice;

export const { reducer: accountReducer } = accountSlice;
