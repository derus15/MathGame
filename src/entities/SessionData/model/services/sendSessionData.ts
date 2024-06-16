import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'shared/api/axios';
import { toast } from 'react-toastify';
import { StateSchema } from 'app/Providers/Store/types';
import { SignList } from 'app/types/config';
import { Modifications } from 'features/Modifications/model/slice/types';

export interface SessionDataSaveSchema {
    mode: string;
    number: number;
    time: number;
    sign: SignList[];
    eps: string;
    modifications: Modifications[],
    unexpectedEnd: boolean,
}

export const sendSessionData = createAsyncThunk(
    '/session',
    async (arg: SessionDataSaveSchema | null, { getState }) => {
        try {

            const state = getState() as StateSchema;

            const { sessionPoints } = state.sessionData;
            const { sessionTime } = state.sessionData;
            const { sessionEPS } = state.sessionData;
            const { modificationsList } = state.modifications;
            
            const sessionUnexpectedEnd = state.session.unexpectedEnd;
            const sessionGameMode = state.interface.gameMode;
            const sessionSignList = state.example.signList;
            
            const actualSessionData: SessionDataSaveSchema = {
                mode: sessionGameMode,
                number: sessionPoints,
                time: sessionTime,
                sign: sessionSignList,
                eps: sessionEPS,
                modifications: modificationsList,
                unexpectedEnd: sessionUnexpectedEnd,
            };

            await axios.post('/session', arg || actualSessionData);

        } catch (error) {
            console.log(error);
            toast.error('Не удалось сохранить сессию, попробуйте позже');
        }
    },
);
