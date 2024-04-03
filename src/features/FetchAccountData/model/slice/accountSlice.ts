import { createSlice } from '@reduxjs/toolkit';
import { AccountSchema } from './types';
import { fetchAccountData } from '../services/fetchAccountData';

const initialState:AccountSchema = {
    data: null,
    loadingStatus: null,
};

const accountSlice = createSlice({

    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchAccountData.pending, (state) => {
                state.data = null;
                state.loadingStatus = 'loading';
            })
            .addCase(fetchAccountData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(fetchAccountData.rejected, (state) => {
                state.data = null;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: accountActions } = accountSlice;

export const { reducer: accountReducer } = accountSlice;
