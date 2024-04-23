import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';
import { userActions } from 'entities/User';

export const fetchAccountName = createAsyncThunk<string>(
    '/account/name',
    async (params, { dispatch }) => {
        try {

            const { data } = await axios.get('/account/name');
            return data.name;

        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                toast.error('Ошибка сервера. Перезайдите в аккаунт');
            }
            dispatch(userActions.logout());
        }
    },
);
