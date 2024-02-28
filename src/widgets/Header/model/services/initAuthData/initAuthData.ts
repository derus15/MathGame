import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';
import { userActions } from 'entities/User';

export const initAuthData = createAsyncThunk<string>(
    '/auth/me',
    async (params, { dispatch }) => {
        try {

            const { data } = await axios.get('/auth/me');
            dispatch(userActions.setAuth(true));
            return data.name;

        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                toast.error('Ошибка сервера. Перезайдите в аккаунт');
            }
            dispatch(userActions.logout());
        }
    },
);
