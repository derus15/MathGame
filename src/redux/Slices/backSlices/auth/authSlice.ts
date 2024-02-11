// LEGACY

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthSchema, UserSchema } from './types';
import axios from 'shared/api/axios';

export const fetchAuthMe = createAsyncThunk<UserSchema>(
    '/auth/fetchAuthMe',
    async () => {
        const { data } = await axios.get('/auth/me');
        return data;
    },
);

const initialState: AuthSchema = {
    user: null,
    data: null,
    isAuth: false,
    statusLog: '',
    statusReg: '',
};

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            localStorage.removeItem('token');
            state.isAuth = false;
        },
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchAuthMe.pending, (state) => {
                state.user = null;
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuth = true;
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.user = null;
            });
    },
});

export const { actions: authActions } = authSlice;

export const { reducer: authReducer } = authSlice;
