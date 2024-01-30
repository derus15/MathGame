import { useDispatch, useSelector } from 'react-redux';
import { exampleActions } from '../model/slice/exampleSlice';
import { getSignsList } from 'widgets/Interface';

export const useRefreshExample = () => {
    
    const dispatch = useDispatch();
    const signList = useSelector(getSignsList);    
    
    const refreshExample = () => {
        dispatch(exampleActions.generateSign(signList));
        dispatch(exampleActions.generateNumber(2));
    };
    
    return { refreshExample };
    
};
