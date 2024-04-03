import { createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/LoginByUsername/model/slice/types';
import { loginByUsername } from 'features/LoginByUsername/model/services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    token: null,
    error: null,
    loadingStatus: null,
};

const loginSLice = createSlice({

    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(loginByUsername.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                // @ts-ignore
                state.error = action.payload;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: loginActions } = loginSLice;

export const { reducer: loginReducer } = loginSLice;
