import { createSlice } from '@reduxjs/toolkit';
import { UpdateUserDataSchema } from '../types/types';

const initialState: UpdateUserDataSchema = {
    isValid: false,
    message: 'asd',
};

const userDataSlice = createSlice({

    name: 'userData',
    initialState,
    reducers: {
        
        resetIsValidPassword: (state) => {
            state.isValid = false;
        },
        
        setIsValidPassword: (state) => {
            state.isValid = true;
        },
        
    },

});

export const { actions: userDataActions } = userDataSlice;

export const { reducer: userDataReducer } = userDataSlice;
