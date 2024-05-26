import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';
import { userActions } from 'entities/User';

export const initAuthData = createAsyncThunk<string>(
    '/auth/init',
    async (params, { dispatch, rejectWithValue }) => {
        try {

            const { data } = await axios.get('/auth/init');
            return data.message;

        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                toast.error('Ошибка сервера. Перезайдите в аккаунт');
            }
            dispatch(userActions.logout());
            return rejectWithValue('Нет доступа');
        }
    },
);
