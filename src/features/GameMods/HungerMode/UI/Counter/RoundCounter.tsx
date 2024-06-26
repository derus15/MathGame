import React from 'react';
import style from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound } from '../../model/selectors/getCurrentRound';
import { getInterfaceRounds } from 'widgets/Interface/model/selectors/getInterfaceRounds';
import { sessionActions } from 'entities/Session';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { RetryFlag } from 'entities/Example';

export const RoundCounter = () => {

    const currentRounds = useSelector(getCurrentRound);
    const rounds = useSelector(getInterfaceRounds);
    const dispatch = useDispatch();

    const endRound = () => {
        dispatch(sessionActions.endSession());
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
