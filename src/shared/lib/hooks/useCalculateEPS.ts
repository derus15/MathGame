import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionPoints, getSessionTime, sessionDataActions } from 'entities/SessionData';

export const useCalculateEPS = () => {
    
    const dispatch = useDispatch();
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const eps = calculateEPS(numberResult, sessionTime);

    dispatch(sessionDataActions.saveEPS(eps));
    
    return eps;
};
