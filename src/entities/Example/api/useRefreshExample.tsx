import { useDispatch, useSelector } from 'react-redux';
import { exampleActions } from '../model/slice/exampleSlice';
import { getInterfaceSignsList } from 'widgets/Interface';

export const useRefreshExample = () => {
    
    const dispatch = useDispatch();
    const signList = useSelector(getInterfaceSignsList);
    
    const refreshExample = () => {
        dispatch(exampleActions.generateSign(signList));
        dispatch(exampleActions.generateNumber(2));
    };
    
    return { refreshExample };
    
};
