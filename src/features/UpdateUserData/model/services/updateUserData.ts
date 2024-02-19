import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';
import { UpdateUserDataParams } from 'features/UpdateUserData/model/types/types';

export const updateUserData = createAsyncThunk<string, UpdateUserDataParams, {rejectValue: string}>(
    '/user/changeData',
    async (params, { rejectWithValue, dispatch }) => {
        try {

            const { data } = await axios.patch('/auth/register', params);

            return data.message;

        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                return toast.error('Сервер не отвечает. Попробуйте позже');
            }

            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);

        }
    },
);
