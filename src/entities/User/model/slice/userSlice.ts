import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User/model/slice/types';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    isAuth: false,
};

const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {

        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },

        logout: (state) => {
            state.isAuth = null;
            localStorage.removeItem('token');
        },

    },
    extraReducers: (builder) => {

        builder
            .addCase(initAuthData.pending, (state) => {
                state.isAuth = false;
            })
            .addCase(initAuthData.fulfilled, (state) => {
                state.isAuth = true;
            })
            .addCase(initAuthData.rejected, (state) => {
                state.isAuth = false;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
