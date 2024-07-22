import { ChangeEvent, useCallback } from 'react';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { useDispatch, useSelector } from 'react-redux';
import { sessionDataActions } from 'entities/SessionData';
import { getExampleAnswer } from 'entities/Example';

export const useCheckError = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getExampleAnswer);

    const checkError = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNumber = testNumber(value);
        if (isNumber && value.length >= answer.length && value !== answer) {
            dispatch(sessionDataActions.incrementSessionErrors());
        }
    }, [answer]);
    
    return { checkError };
    
};
