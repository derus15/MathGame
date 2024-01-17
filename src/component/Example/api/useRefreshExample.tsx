import { useDispatch, useSelector } from 'react-redux';
import { exampleActions } from 'component/Example/model/slice/exampleSlice';
import { getSignsList } from 'component/Interface';

export const useRefreshExample = () => {
    
    const dispatch = useDispatch();
    const signList = useSelector(getSignsList);    
    
    const refreshExample = () => {
        dispatch(exampleActions.generateSign(signList));
        dispatch(exampleActions.generateNumber(2));
    };
    
    return { refreshExample };
    
};
