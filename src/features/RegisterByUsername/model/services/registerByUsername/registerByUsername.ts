import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { userActions } from 'entities/User';
import { toast } from 'react-toastify';

export const registerByUsername = createAsyncThunk<string, {rejectValue: string}>(
    '/auth/register',
    async (params, { rejectWithValue, dispatch }) => {
        try {

            const { data } = await axios.post('/auth/register', params);

            dispatch(userActions.setAuth(true));
            localStorage.setItem('token', data.token);

            return data;

        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                return toast.error('Сервер не отвечает. Попробуйте позже');
            }

            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);

        }
    },
);
