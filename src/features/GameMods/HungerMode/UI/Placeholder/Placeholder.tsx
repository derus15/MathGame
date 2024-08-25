import React, { useState } from 'react';
import style from './Placeholder.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound } from '../../model/selectors/getCurrentRound';
import { RoundCounter } from '../Counter/RoundCounter';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { BaseTimer } from 'shared/UI/BaseTimer/BaseTimer';
import { getIsRoundProgress } from '../../model/selectors/getIsRoundProgress';

export const Placeholder = () => {

    const [timeUntil, setTimeUntil] = useState(3000);
    const currentRound = useSelector(getCurrentRound);
    const isRoundProgress = useSelector(getIsRoundProgress);
    const dispatch = useDispatch();
    
    const startRound = () => {
        dispatch(hungerModeActions.startRound());
    };

    return (
        <>
            <div className={style.timerContainer}>
                <RoundCounter />
            </div>
            <div className={style.placeholderContainer}>
                <span>Раунд {currentRound} завершен</span>
                <div className={style.textUntil}>
                    <span>
                        Следующий начнется через
                    </span>
                    <BaseTimer
                        time={timeUntil}
                        startCondition={!isRoundProgress}
                        setTime={setTimeUntil}
                        onFinishCallback={startRound}
                    />
                </div>
            </div>
        </>
    );
};
