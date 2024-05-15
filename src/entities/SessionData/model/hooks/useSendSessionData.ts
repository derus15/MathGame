import { toast } from 'react-toastify';
import { SessionDataSaveSchema } from 'entities/SessionData/model/services/sendSessionData';
import { useSaveSessionDataMutation } from 'entities/SessionData/model/api/saveSessionDataApi';
import { useSelector } from 'react-redux';
import { getSessionPoints, getSessionTime } from 'entities/SessionData';
import { getSessionEPS } from 'entities/SessionData/model/selectors/getSessionEPS';
import { getModificationsList } from 'features/Modifications';
import { getUnexpectedEnd } from 'entities/Session/model/selectors/getUnexpectedEnd';
import { getInterfaceGameMode, getInterfaceSignsList } from 'widgets/Interface';

export const useSendSessionData = () => {

    const [sendSessionDataMutation] = useSaveSessionDataMutation();

    const sessionPoints = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const sessionEPS = useSelector(getSessionEPS);
    const modificationsList = useSelector(getModificationsList);
    const sessionUnexpectedEnd = useSelector(getUnexpectedEnd);
    const sessionGameMode = useSelector(getInterfaceGameMode);
    const sessionSignList = useSelector(getInterfaceSignsList);

    const sendSessionData = (actualSessionData: SessionDataSaveSchema) => {
        try {
            sendSessionDataMutation(actualSessionData);
        } catch (error) {
            console.log(error);
            toast.error('Не удалось сохранить сессию, попробуйте позже');
        }
    };

    const handleSendSessionData = () => {

        const actualSessionData: SessionDataSaveSchema = {
            mode: sessionGameMode,
            number: sessionPoints,
            time: sessionTime,
            sign: sessionSignList,
            eps: sessionEPS,
            modifications: modificationsList,
            unexpectedEnd: sessionUnexpectedEnd,
        };

        sendSessionData(actualSessionData);
    };

    return { sendSessionData: handleSendSessionData };
};
