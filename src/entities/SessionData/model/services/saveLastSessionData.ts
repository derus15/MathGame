import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { sendSessionData } from './sendSessionData';

export const saveLastSessionData = createAsyncThunk(
    '/session',
    async (args, { dispatch }) => {
        try {

            const lastSessionData = JSON.parse(localStorage.getItem('lastSessionData'));
            
            if (lastSessionData) {
                dispatch(sendSessionData(lastSessionData));
                toast.error('Результаты последней сессии сохранены!');
            }

        } catch (error) {
            console.log(error);
            toast.error('Не удалось сохранить последнюю сессию');
        }
    },
);
