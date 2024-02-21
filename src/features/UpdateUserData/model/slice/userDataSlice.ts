import { createSlice } from '@reduxjs/toolkit';
import { UpdateUserDataSchema } from './types';
import { updateUserData } from '../services/updateUserData';
import { checkValidPassword } from '../services/checkValidPassword';

const initialState: UpdateUserDataSchema = {
    successMessage: null,
    error: null,
    isValid: false,
    loadingStatus: '',
};

const userDataSlice = createSlice({

    name: 'userData',
    initialState,
    reducers: {
        
        resetIsValidPassword: (state) => {
            state.isValid = false;
        },
        
    },
    extraReducers: (builder) => {

        builder
            .addCase(updateUserData.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.successMessage = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(updateUserData.rejected, (state, action) => {
                state.error = action.payload;
                state.loadingStatus = 'error';
            });
            
        builder
            .addCase(checkValidPassword.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(checkValidPassword.fulfilled, (state, action) => {
                state.isValid = JSON.parse(action.payload);
                state.loadingStatus = 'loaded';
            })
            .addCase(checkValidPassword.rejected, (state, action) => {
                state.error = action.payload;
                state.loadingStatus = 'error';
            });
    },
});

export const { actions: userDataActions } = userDataSlice;

export const { reducer: userDataReducer } = userDataSlice;
