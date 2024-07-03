import { toast } from 'react-toastify';
import { useSaveSessionDataMutation } from 'entities/SessionData/model/api/saveSessionDataApi';
import { useSelector } from 'react-redux';
import { getSessionPoints, getSessionTime } from 'entities/SessionData';
import { getModificationsList } from 'features/Modifications';
import { getUnexpectedEnd } from 'entities/Session/model/selectors/getUnexpectedEnd';
import { getInterfaceGameMode, getExampleSignsList } from 'widgets/Interface';
import { useCallback } from 'react';
import { SessionDataSaveSchema } from '../types/types';
import { getSessionEPS } from 'entities/SessionData/model/selectors/getSessionEPS';

export const useSendSessionData = () => {

    const [sendSessionDataMutation] = useSaveSessionDataMutation();

    const sessionPoints = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const modificationsList = useSelector(getModificationsList);
    const sessionUnexpectedEnd = useSelector(getUnexpectedEnd);
    const sessionGameMode = useSelector(getInterfaceGameMode);
    const sessionSignList = useSelector(getExampleSignsList);
    const sessionEps = useSelector(getSessionEPS);

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
            mode: sessionGameMode,
            number: sessionPoints,
            time: sessionTime,
            sign: sessionSignList,
            eps: sessionEps,
            modifications: modificationsList,
            unexpectedEnd: sessionUnexpectedEnd,
        };

        sendSessionData(actualSessionData);
    }, [
        sessionGameMode,
        sessionPoints,
        sessionTime,
        sessionSignList,
        modificationsList,
        sessionUnexpectedEnd,
    ]);

    return { sendSessionData: handleSendSessionData };
};
