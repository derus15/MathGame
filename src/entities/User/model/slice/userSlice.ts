import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User/model/slice/types';

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

        initAuth: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
                state.isAuth = true;
            }
        },

        logout: (state) => {
            state.isAuth = null;
            localStorage.removeItem('token');
        },

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
