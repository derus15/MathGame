import { createSlice } from '@reduxjs/toolkit';
import { 
    registerByUsername,
} from 'features/RegisterByUsername/model/services/registerByUsername/registerByUsername';
import { RegisterSchema } from 'features/RegisterByUsername/model/slice/types';

const initialState: RegisterSchema = {
    token: null,
    error: null,
    loadingStatus: '',
};

const registerSLice = createSlice({

    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(registerByUsername.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(registerByUsername.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(registerByUsername.rejected, (state, action) => {
                // @ts-ignore
                state.error = action.payload;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: registerActions } = registerSLice;

export const { reducer: registerReducer } = registerSLice;
