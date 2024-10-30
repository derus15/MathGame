import React from 'react';
import style from './TimersContainer.module.css';
import { HungerTimer } from '../Timer/HungerTimer';
import { RoundCounter } from '../Counter/RoundCounter';
import { HungerPointsCounter } from '../Counter/HungerPointsCounter';
import { useSelector } from 'react-redux';
import { getIsRoundProgress } from '../../model/selectors/getIsRoundProgress';

interface TimersContainerProps {
    endSessionCallback?: () => void
}

export const TimersContainer = ({ endSessionCallback }: TimersContainerProps) => {

    const isRoundProgress = useSelector(getIsRoundProgress);
    
    return (
        <div className={style.timersContainer}>
            {isRoundProgress
                ? (
                    <div className={style.roundProgressTimer}>
                        <HungerTimer endSessionCallback={endSessionCallback} />
                        <HungerPointsCounter />
                    </div>
                ) : (
                    <div className={style.roundCounter}> 
                        <RoundCounter endSessionCallback={endSessionCallback} />
                    </div>
                )}
        </div>
    );
};
