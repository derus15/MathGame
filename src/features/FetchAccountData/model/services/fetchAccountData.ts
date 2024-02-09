import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';

// eslint-disable-next-line consistent-return
export const fetchAccountData = createAsyncThunk('/account', async () => {
    try {

        const { data } = await axios.get('/account');
        return data;

    } catch (e) {
        toast.error('Ошибка сервера. Перезайдите в аккаунт');
    }
});
