import { ChangeEvent } from 'react';
import { testNumber } from 'helpers/testNumber/testNumber';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from 'component/Example';
import { getModificationsList } from '../selectors/getModificationsList';
import { sessionActions } from 'component/Session';

export const useModifications = () => {

    const answer = useSelector(getAnswer);
    const dispatch = useDispatch();
    const modsList = useSelector(getModificationsList);
    const oneTry = modsList.includes('one');

    const onyTry = (e: ChangeEvent<HTMLInputElement>) => {
        const isNumber = testNumber(e.target.value);
        if (oneTry && isNumber) {
            const userAnswer = String(e.target.value).length;
            if (userAnswer === answer.length && e.target.value !== answer) {
                dispatch(sessionActions.endSession());
            }
        }
    };

    return [onyTry];

};
