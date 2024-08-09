import { toast } from 'react-toastify';
import { useSaveSessionDataMutation } from '../api/saveSessionDataApi';
import { useCallback } from 'react';
import { SessionDataSaveSchema } from '../types/types';
import { useGetSessionData } from './useGetSessionData';
import { useSelector } from 'react-redux';
import { getIsPersonalSeed, getIsRetrySession } from 'entities/Example';
import { getIsAuth } from 'entities/User';

export const useSendSessionData = () => {

    const [sendSessionDataMutation] = useSaveSessionDataMutation();
    const sessionData = useGetSessionData();
    const isAuth = useSelector(getIsAuth);
    const isRetry = useSelector(getIsRetrySession);
    const isPersonalSeed = useSelector(getIsPersonalSeed);
    const isCustomSession = isPersonalSeed || isRetry;

    const sendSessionData = (actualSessionData: SessionDataSaveSchema) => {

        if (isAuth && isCustomSession) {
            toast.error('Повторные сессии не сохраняются');
            return;
        }

        if (isAuth) {
            try {
                sendSessionDataMutation(actualSessionData);
            } catch (error) {
                console.error(error);
                toast.error('Не удалось сохранить сессию, попробуйте позже');
            }
        }
    };

    const handleSendSessionData = useCallback(() => {

        const actualSessionData: SessionDataSaveSchema = {
            mode: sessionData.mode,
            number: sessionData.number,
            time: sessionData.time,
            rounds: sessionData.rounds,
            sign: sessionData.sign,
            eps: sessionData.eps,
            modifications: sessionData.modifications,
            unexpectedEnd: sessionData.unexpectedEnd,
        };

        sendSessionData(actualSessionData);
    }, [sessionData]);

    return { sendSessionData: handleSendSessionData };
};
