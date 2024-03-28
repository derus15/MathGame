import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';

export const fetchHighlightsBoardData = createAsyncThunk('/account/highlight', async () => {
    try {

        const { data } = await axios.get('/account/highlight');
        return data;

    } catch (e) {
        toast.error('Ошибка загрузки данных. Перезайдите в аккаунт');
    }
});
