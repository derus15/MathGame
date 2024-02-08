import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';

// eslint-disable-next-line consistent-return
export const fetchAccountData = createAsyncThunk('/account', async () => {
    try {

        const { data } = await axios.get('/account');
        return data;

    } catch (e) {
        console.log(e);
    }
});
