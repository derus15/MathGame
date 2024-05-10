import { useDispatch, useSelector } from 'react-redux';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { sessionDataActions } from 'entities/SessionData';

export const useStartSession = () => {

    const sessionProgress = useSelector(getSessionProgress);
    const dispatch = useDispatch();

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(sessionDataActions.resetExampleList());
            dispatch(sessionActions.startSession());
        }
    };

    return { startSessionHandler };
    
};
