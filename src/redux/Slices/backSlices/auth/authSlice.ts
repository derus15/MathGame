// LEGACY

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../../shared/api/axios';
import { AuthSchema, TokenSchema, UserSchema } from './types';

export const fetchAuth = createAsyncThunk<TokenSchema, {rejectValue: string}>(
    '/auth/fetchAuth',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', params);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const fetchRegister = createAsyncThunk<TokenSchema, {rejectValue: string}>(
    '/auth/fetchRegister',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/register', params);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

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
            .addCase(fetchRegister.pending, (state) => {
                state.data = null;
                state.statusReg = 'loading';
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.data = action.payload;
                state.statusReg = 'loaded';
                state.isAuth = true;
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.data = null;
                state.statusReg = 'error';
            });

        builder
            .addCase(fetchAuth.pending, (state) => {
                state.data = null;
                state.statusLog = 'loading';
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload;
                state.statusLog = 'loaded';
                state.isAuth = true;
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.data = null;
                state.statusLog = 'error';
            });

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
