import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuth = createAsyncThunk('/auth/fetchAuth', async (params, { rejectWithValue }) => {
    try {

        const { data } = await axios.post('/auth/login', params);
        return data;

    } catch (error) {

        return rejectWithValue(error);

    }
});

export const fetchRegister = createAsyncThunk('/auth/fetchRegister', async (params, { rejectWithValue }) => {
    try {

        const { data } = await axios.post('/auth/register', params);
        return data;

    } catch (error) {

        return rejectWithValue(error);

    }
});

export const fetchAuthMe = createAsyncThunk('/auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/auth/me');
    return data;
});

const initialState = {
    data: null,
    statusLog: '',
    statusReg: '',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {

        // Register

        [fetchRegister.pending]: (state) => {
            state.data = null;
            state.statusReg = 'loading';
        },

        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.statusReg = 'loaded';
        },

        [fetchRegister.rejected]: (state) => {
            state.data = null;
            state.statusReg = 'error';
        },

        // Login

        [fetchAuth.pending]: (state) => {
            state.data = null;
            state.statusLog = 'loading';
        },


        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.statusLog = 'loaded';
        },


        [fetchAuth.rejected]: (state) => {
            state.data = null;
            state.statusLog = 'error';
        },

        // Me

        [fetchAuthMe.pending]: (state) => {
            state.data = null;
        },

        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload;
        },

        [fetchAuthMe.rejected]: (state) => {
            state.data = null;
        },

    },
});

export const authData = (state) => Boolean(state.auth.data);

export const { logout } = authSlice.actions;

export default authSlice.reducer;