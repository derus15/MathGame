import React from 'react';
import style from './Counter.module.css';
import { useSelector } from 'react-redux';
import { getCurrentRound } from '../../model/selectors/getCurrentRound';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { RetryFlag } from 'entities/Example';
import { getParamsRounds } from 'entities/SessionParams';

interface RoundCounterProps {
    endSessionCallback?: () => void
}

export const RoundCounter = ({ endSessionCallback }: RoundCounterProps) => {

    const currentRounds = useSelector(getCurrentRound);
    const rounds = useSelector(getParamsRounds);

    const endSession = () => {
        endSessionCallback();
    };

    return (
        <div className={style.counterRetryContainer}>
            <BaseCounter
                incrementArg={currentRounds}
                targetArg={rounds} 
                mark="/" 
                callback={endSession}
            />
            <RetryFlag />
        </div>
    );
};
