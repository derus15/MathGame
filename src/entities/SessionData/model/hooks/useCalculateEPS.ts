import { calculateEPS } from 'shared/lib/calculateEPS/calculateEPS';
import { useDispatch, useSelector } from 'react-redux';
import { sessionDataActions } from '../slice/sessionDataSlice';
import { getSessionPoints } from '../selectors/getSessionPoints';
import { getSessionTime } from '../selectors/getSessionTime';

export const useCalculateEPS = () => {
    
    const dispatch = useDispatch();
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const eps = calculateEPS(numberResult, sessionTime);

    dispatch(sessionDataActions.saveEPS(eps));
    
    return eps;
};
