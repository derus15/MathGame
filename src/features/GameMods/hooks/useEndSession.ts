import { useDispatch } from 'react-redux';
import { sessionActions } from 'entities/Session';
import { sessionDataActions } from 'entities/SessionData';

export const useEndSession = () => {
    
    const dispatch = useDispatch();

    const endSessionHandler = () => {
        dispatch(sessionActions.endSession());
        dispatch(sessionDataActions.calculateSessionTime());
        dispatch(sessionDataActions.calculateEPS());
    };

    return { endSessionHandler };
    
};
