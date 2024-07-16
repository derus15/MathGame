import { toast } from 'react-toastify';
import { useSaveSessionDataMutation } from '../api/saveSessionDataApi';
import { useCallback } from 'react';
import { SessionDataSaveSchema } from '../types/types';
import { useGetSessionData } from './useGetSessionData';

export const useSendSessionData = () => {

    const [sendSessionDataMutation] = useSaveSessionDataMutation();
    const sessionData = useGetSessionData();

    const sendSessionData = (actualSessionData: SessionDataSaveSchema) => {
        try {
            sendSessionDataMutation(actualSessionData);
        } catch (error) {
            console.log(error);
            toast.error('Не удалось сохранить сессию, попробуйте позже');
        }
    };

    const handleSendSessionData = useCallback(() => {

        const actualSessionData: SessionDataSaveSchema = {
            mode: sessionData.mode,
            number: sessionData.number,
            time: sessionData.time,
            sign: sessionData.sign,
            eps: sessionData.eps,
            modifications: sessionData.modifications,
            unexpectedEnd: sessionData.unexpectedEnd,
        };

        sendSessionData(actualSessionData);
    }, [sessionData]);

    return { sendSessionData: handleSendSessionData };
};
