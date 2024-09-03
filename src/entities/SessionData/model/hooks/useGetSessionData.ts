import { SessionDataSaveSchema } from '../types/types';
import { useSelector } from 'react-redux';
import { getSessionTime } from '../selectors/getSessionTime';
import { getSessionPoints } from '../selectors/getSessionPoints';
import { getModificationsList } from 'features/Modifications';
import { getUnexpectedEnd } from 'entities/Session';
import { getSessionEPS } from '../selectors/getSessionEPS';
import { getParamsGameMode } from 'entities/SessionParams';
import { getExampleSignList } from 'entities/Example';
import { getSessionHungerRounds } from '../selectors/getSessionHungerRounds';

export const useGetSessionData = () => {

    const sessionPoints = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const sessionRounds = useSelector(getSessionHungerRounds);
    const modificationsList = useSelector(getModificationsList);
    const sessionUnexpectedEnd = useSelector(getUnexpectedEnd);
    const sessionGameMode = useSelector(getParamsGameMode);
    const sessionSignList = useSelector(getExampleSignList);
    const sessionEps = useSelector(getSessionEPS);
    
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
