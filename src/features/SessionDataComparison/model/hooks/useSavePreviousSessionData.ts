import { useDispatch } from 'react-redux';
import { previousSessionDataActions } from '../slice/previousSessionDataSlice';
import { useGetSessionData } from 'entities/SessionData';

export const useSavePreviousSessionData = () => {

    const dispatch = useDispatch();
    const sessionData = useGetSessionData();

    const savePreviousSessionData = () => {
        dispatch(previousSessionDataActions.setData(sessionData));
    };
    
    return { savePreviousSessionData };

};
