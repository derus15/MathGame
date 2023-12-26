import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../../helpers/axios';
import { AuthSchema } from './types';
import { StateSchema } from '../../../types';

export const fetchAuth = createAsyncThunk<string, {rejectValue: string}>(
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

export const fetchRegister = createAsyncThunk<string, {rejectValue: string}>(
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

export const fetchAuthMe = createAsyncThunk<string, {rejectValue: string}>(
    '/auth/fetchAuthMe',
    async () => {
        const { data } = await axios.get('/auth/me');
        return data;
    },
);

const initialState: AuthSchema = {
    data: null,
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
        },
    },
    extraReducers: (builder) => {

        // eslint-disable-next-line no-unused-expressions
        builder
            .addCase(fetchRegister.pending, (state) => {
                state.data = null;
                state.statusReg = 'loading';
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.data = action.payload;
                state.statusReg = 'loaded';
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
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.data = null;
                state.statusLog = 'error';
            });

        builder
            .addCase(fetchAuthMe.pending, (state) => {
                state.data = null;
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.data = null;
            });
    },
});

export const authData = (state: StateSchema) => Boolean(state.auth.data);
export const { actions: authActions } = authSlice;

export const { reducer: authReducer } = authSlice;
