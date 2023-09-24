import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../axios';

export const getData = createAsyncThunk('/account', async () => {
    const { data } = await axios.get('/account');
    return data;
});

const initialState = {
    data: null,
    status: '',
};

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers:{},
    extraReducers:{

        [getData.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        },

        [getData.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        },

        [getData.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        },

    }
})

export default querySlice.reducer;