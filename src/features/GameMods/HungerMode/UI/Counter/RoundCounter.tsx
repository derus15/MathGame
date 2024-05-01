import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { getInterfaceRounds } from 'widgets/Interface/model/selectors/getInterfaceRounds';
import { getIsRoundProgress } from 'features/GameMods/HungerMode/model/selectors/getIsRoundProgress';
import { sessionActions } from 'entities/Session';

export const RoundCounter = () => {

    const currentRounds = useSelector(getCurrentRound);
    const rounds = useSelector(getInterfaceRounds);
    const isRoundProgress = useSelector(getIsRoundProgress);

    const dispatch = useDispatch();

    useEffect(() => {

        if (currentRounds > rounds && !isRoundProgress) {
            dispatch(sessionActions.endSession());
        }

        dispatch(hungerModeActions.setHungerPoint(currentRounds * 2));
    }, [rounds]);

    return (
        <div>
            {currentRounds} / {rounds}
        </div>
    );
};
