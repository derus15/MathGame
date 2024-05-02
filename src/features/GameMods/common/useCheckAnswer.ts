import { useDispatch, useSelector } from 'react-redux';
import { getAnswer, getExample, useRefreshExample } from 'entities/Example';
import { useModifications } from 'features/Modifications';
import { ChangeEvent, useCallback } from 'react';
import { sessionDataActions } from 'entities/SessionData';

export const useCheckAnswer = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const example = useSelector(getExample);

    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();

    const checkAnswer = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementSessionPoints());
            dispatch(sessionDataActions.updateExampleList([example, answer]));
            refreshExample();
            e.target.value = '';
        }
    }, [answer, example]);
    
    return {
        checkAnswer,
    };
    
};
