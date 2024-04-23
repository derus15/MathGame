import { createSlice } from '@reduxjs/toolkit';
import { InitAuthDataSchema } from './types';
import { fetchAccountName } from '../services/fetchAccountName/fetchAccountName';

const initialState: InitAuthDataSchema = {
    username: null,
    loadingStatus: null,
};

const initAuthDataSlice = createSlice({

    name: 'fetchUsername',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchAccountName.pending, (state) => {
                state.username = null;
                state.loadingStatus = 'loading';
            })
            .addCase(fetchAccountName.fulfilled, (state, action) => {
                state.username = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(fetchAccountName.rejected, (state) => {
                state.username = null;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: initAuthDataActions } = initAuthDataSlice;

export const { reducer: initAuthDataReducer } = initAuthDataSlice;
