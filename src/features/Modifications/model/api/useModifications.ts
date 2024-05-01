import { ChangeEvent } from 'react';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from 'entities/Example';
import { getModificationsList } from '../selectors/getModificationsList';
import { sessionActions } from 'entities/Session';
import { getInterfaceGameMode } from 'widgets/Interface';
import { hungerModeActions } from 'features/GameMods/HungerMode';

export const useModifications = () => {

    const answer = useSelector(getAnswer);
    const dispatch = useDispatch();
    const modsList = useSelector(getModificationsList);
    const gameMode = useSelector(getInterfaceGameMode);
    const oneTry = modsList.includes('one');

    const onyTry = (e: ChangeEvent<HTMLInputElement>) => {
        const isNumber = testNumber(e.target.value);
        if (oneTry && isNumber) {
            const userAnswer = String(e.target.value).length;
            if (userAnswer === answer.length && e.target.value !== answer) {
                dispatch(sessionActions.unexpectedEnd());
                if (gameMode === 'Голод') { dispatch(hungerModeActions.endRound()); }
                dispatch(sessionActions.endSession());
            }
        }
    };

    return [onyTry];

};
