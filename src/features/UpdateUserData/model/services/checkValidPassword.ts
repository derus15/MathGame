import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';

export const checkValidPassword = createAsyncThunk<string, string, {rejectValue: string}>(
    '/user/checkPassword',
    async (params, { rejectWithValue }) => {
        try {

            const { data } = await axios.post('/user/checkPassword', params);
            return data.isValid;

        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                return toast.error('Сервер не отвечает. Попробуйте позже');
            }
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);

        }
    },
);
