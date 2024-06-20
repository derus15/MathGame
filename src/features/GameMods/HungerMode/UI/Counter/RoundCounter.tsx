import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound } from 'features/GameMods/HungerMode';
import { getInterfaceRounds } from 'widgets/Interface/model/selectors/getInterfaceRounds';
import { sessionActions } from 'entities/Session';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { RetryFlag } from 'entities/Example';
import style from '../HungerMode.module.css';

export const RoundCounter = () => {

    const currentRounds = useSelector(getCurrentRound);
    const rounds = useSelector(getInterfaceRounds);
    const dispatch = useDispatch();

    const endRound = () => {
        dispatch(sessionActions.endSession());
    };

    return (
        <div className={style.retryContainer}>
            <BaseCounter incrementArg={currentRounds} targetArg={rounds} mark="/" callback={endRound} />
            <RetryFlag />
        </div>
    );
};
