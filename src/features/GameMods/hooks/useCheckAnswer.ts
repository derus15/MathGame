import { useDispatch, useSelector } from 'react-redux';
import { getExampleAnswer, getExample, useRefreshExample } from 'entities/Example';
import { useModifications } from 'features/Modifications';
import { ChangeEvent, useCallback, useState } from 'react';
import { sessionDataActions } from 'entities/SessionData';
import { useCheckError } from './useCheckError';

export const useCheckAnswer = () => {

    const dispatch = useDispatch();
    const [isCorrect, setIsCorrect] = useState(false);
    const answer = useSelector(getExampleAnswer);
    const example = useSelector(getExample);

    const { refreshExample } = useRefreshExample();
    const { checkError, isIncorrect } = useCheckError();
    const [oneTry] = useModifications();

    const checkAnswer = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        checkError(e);
        if (e.target.value === answer) {
            setIsCorrect(true);
            dispatch(sessionDataActions.setSessionTimeFlags());
            dispatch(sessionDataActions.incrementSessionPoints());
            dispatch(sessionDataActions.updateExampleList([example, answer]));
            refreshExample();
            e.target.value = '';
            setTimeout(() => setIsCorrect(false), 500);
        }
    }, [answer, example, oneTry]);

    return {
        checkAnswer,
        isCorrect,
        isIncorrect,
    };
};
