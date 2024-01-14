import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../../helpers/api/axios';
import { AccountSchema } from './types';

export const getData = createAsyncThunk<string>('/account', async () => {
    const { data } = await axios.get('/account');
    return data;
});

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
            .addCase(getData.pending, (state) => {
                state.data = null;
                state.status = 'loading';
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'loaded';
            })
            .addCase(getData.rejected, (state) => {
                state.data = null;
                state.status = 'error';
            });
    },
});

export const { actions: accountActions } = accountSlice;

export const { reducer: accountReducer } = accountSlice;
