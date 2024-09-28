import { useDispatch, useSelector } from 'react-redux';
import { getSessionTimeFlags, sessionDataActions } from 'entities/SessionData';

const calculateDifference = (array: number[][]) => {

    if (!array || array.length === 0 || array[0].length === 0) {
        return;
    }

    const firstElement = array[0][0];
    let lastElement;

    // eslint-disable-next-line no-plusplus
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length > 0) {
            lastElement = array[i][array[i].length - 1];
            break;
        }
    }

    if (lastElement === undefined) {
        return;
    }

    return Math.floor((lastElement - firstElement) / 1000);
};

export const useCalculateTime = () => {

    const dispatch = useDispatch();
    const sessionTimeFlags = useSelector(getSessionTimeFlags);
    const sessionTime = calculateDifference(sessionTimeFlags);

    console.log(sessionTime);

    const saveSessionTime = () => {
        dispatch(sessionDataActions.saveSessionTime(sessionTime));
    };

    return { saveSessionTime };

};
