import { createSlice } from '@reduxjs/toolkit';
import { InitAuthDataSchema } from './types';
import { initAuthData } from 'widgets/Header/model/services/initAuthData/initAuthData';

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
            .addCase(initAuthData.pending, (state) => {
                state.username = null;
                state.loadingStatus = 'loading';
            })
            .addCase(initAuthData.fulfilled, (state, action) => {
                state.username = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(initAuthData.rejected, (state) => {
                state.username = null;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: initAuthDataActions } = initAuthDataSlice;

export const { reducer: initAuthDataReducer } = initAuthDataSlice;
