import { useDispatch, useSelector } from 'react-redux';
import { getExampleAnswer, getExample, useRefreshExample } from 'entities/Example';
import { useModifications } from 'features/Modifications';
import { ChangeEvent, useCallback } from 'react';
import { sessionDataActions } from 'entities/SessionData';
import { useCheckError } from 'features/GameMods/hooks/useCheckError';

export const useCheckAnswer = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getExampleAnswer);
    const example = useSelector(getExample);

    const { refreshExample } = useRefreshExample();
    const { checkError } = useCheckError();
    const [oneTry] = useModifications();

    const checkAnswer = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        checkError(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.setSessionTimeFlags());
            dispatch(sessionDataActions.incrementSessionPoints());
            dispatch(sessionDataActions.updateExampleList([example, answer]));
            refreshExample();
            e.target.value = '';
        }
    }, [answer, example, oneTry]);
    
    return {
        checkAnswer,
    };
    
};
