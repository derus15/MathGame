import { useDispatch, useSelector } from 'react-redux';
import { exampleActions } from '../model/slice/exampleSlice';
import generateExample from 'shared/lib/generateExample/generateExample';
import { getInterfaceSignsList } from 'widgets/Interface';

export const useRefreshExample = () => {

    const dispatch = useDispatch();
    const signList = useSelector(getInterfaceSignsList);

    const refreshExample = () => {
        const { example, answer } = generateExample({ signList });
        dispatch(exampleActions.setAnswer(answer));
        dispatch(exampleActions.setExample(example));
    };
    
    return { refreshExample };
    
};
