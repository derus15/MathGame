import React from 'react';
import style from './TimersContainer.module.css';
import { HungerTimer } from '../Timer/HungerTimer';
import { RoundCounter } from '../Counter/RoundCounter';
import { HungerPointsCounter } from '../Counter/HungerPointsCounter';
import { useSelector } from 'react-redux';
import { getIsRoundProgress } from '../../model/selectors/getIsRoundProgress';

export const TimersContainer = () => {

    const isRoundProgress = useSelector(getIsRoundProgress);
    
    return (
        <div className={style.timersContainer}>
            {isRoundProgress
                ? (
                    <div className={style.roundProgressTimer}>
                        <HungerTimer />
                        <HungerPointsCounter />
                    </div>
                ) : (
                    <div className={style.roundCounter}> 
                        <RoundCounter /> 
                    </div>
                )}
        </div>
    );
};
