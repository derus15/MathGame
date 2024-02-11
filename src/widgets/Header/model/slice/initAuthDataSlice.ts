import { createSlice } from '@reduxjs/toolkit';
import { InitAuthDataeSchema } from './types';
import { initAuthData } from 'widgets/Header/model/services/initAuthData/initAuthData';

const initialState: InitAuthDataeSchema = {
    username: null,
};

const initAuthDataSlice = createSlice({

    name: 'fetchUsername',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(initAuthData.pending, (state) => {
                state.username = null;
            })
            .addCase(initAuthData.fulfilled, (state, action) => {
                state.username = action.payload;
            })
            .addCase(initAuthData.rejected, (state) => {
                state.username = null;
            });
    },
});

export const { actions: initAuthDataActions } = initAuthDataSlice;

export const { reducer: initAuthDataReducer } = initAuthDataSlice;
