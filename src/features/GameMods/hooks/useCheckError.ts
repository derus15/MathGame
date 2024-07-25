import { ChangeEvent, useCallback, useState } from 'react';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { useDispatch, useSelector } from 'react-redux';
import { sessionDataActions } from 'entities/SessionData';
import { getExampleAnswer } from 'entities/Example';

export const useCheckError = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getExampleAnswer);
    const [isIncorrect, setIsIncorrect] = useState(false);

    const checkError = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNumber = testNumber(value);
        if (isNumber && value.length >= answer.length && value !== answer) {
            dispatch(sessionDataActions.incrementSessionErrors());
            setIsIncorrect(true);
            setTimeout(() => setIsIncorrect(false), 300);
        }
    }, [answer]);
    
    return { checkError, isIncorrect };
    
};
