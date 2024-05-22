import { useDispatch, useSelector } from 'react-redux';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { sessionDataActions } from 'entities/SessionData';

export const useStartSession = () => {

    const sessionProgress = useSelector(getSessionProgress);
    const dispatch = useDispatch();

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(sessionActions.startSession());
            dispatch(sessionDataActions.resetSessionTimeFlags());
            dispatch(sessionDataActions.setSessionTimeFlags());
            dispatch(sessionDataActions.resetExampleList());
        }
    };

    return { startSessionHandler };

};
