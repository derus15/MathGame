import React from 'react';
import style from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound } from '../../model/selectors/getCurrentRound';
import { sessionActions } from 'entities/Session';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { RetryFlag } from 'entities/Example';
import { getParamsRounds } from 'entities/SessionParams';
import { sessionDataActions } from 'entities/SessionData';

export const RoundCounter = () => {

    const currentRounds = useSelector(getCurrentRound);
    const rounds = useSelector(getParamsRounds);
    const dispatch = useDispatch();

    const endRound = () => {
        dispatch(sessionActions.endSession());
        dispatch(sessionDataActions.calculateSessionTime());
        dispatch(sessionDataActions.calculateEPS());
    };

    return (
        <div className={style.counterRetryContainer}>
            <BaseCounter
                incrementArg={currentRounds}
                targetArg={rounds} 
                mark="/" 
                callback={endRound} 
            />
            <RetryFlag />
        </div>
    );
};
