import { SessionDataSaveSchema } from '../types/types';
import { useSelector } from 'react-redux';
import { getSessionTime } from '../selectors/getSessionTime';
import { getSessionPoints } from '../selectors/getSessionPoints';
import { getModificationsList } from 'features/Modifications';
import { getExampleSignsList, getInterfaceGameMode } from 'widgets/Interface';
import { getUnexpectedEnd } from 'entities/Session';
import { useCalculateEPS } from 'shared/lib/hooks/useCalculateEPS';
import { getSessionHungerRounds } from 'entities/SessionData';

export const useGetSessionData = () => {

    const sessionPoints = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const sessionRounds = useSelector(getSessionHungerRounds);
    const modificationsList = useSelector(getModificationsList);
    const sessionUnexpectedEnd = useSelector(getUnexpectedEnd);
    const sessionGameMode = useSelector(getInterfaceGameMode);
    const sessionSignList = useSelector(getExampleSignsList);
    const sessionEps = useCalculateEPS();
    
    const sessionData: SessionDataSaveSchema = {
        mode: sessionGameMode,
        number: sessionPoints,
        time: sessionTime,
        rounds: sessionRounds,
        sign: sessionSignList,
        eps: sessionEps,
        modifications: modificationsList,
        unexpectedEnd: sessionUnexpectedEnd,
    };
    
    return sessionData;
    
};
