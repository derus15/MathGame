import React, { useEffect, useState } from 'react';
import style from './Placeholder.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { RoundCounter } from 'features/GameMods/HungerMode/UI/Counter/RoundCounter';

export const Placeholder = () => {

    const [timeUntil, setTimeUntil] = useState(3);
    const currentRound = useSelector(getCurrentRound);
    const dispatch = useDispatch();
    
    useEffect(() => {

        const timeout = setTimeout(() => {
            dispatch(hungerModeActions.startRound());
        }, 3000);

        const interval = setInterval(() => {
            setTimeUntil((time) => time - 1);
        }, 1000);
        
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };

    }, []);
    
    return (
        <>
            <div className={style.timerContainer}>
                <RoundCounter />
            </div>
            <div className={style.placeholderContainer}>
                <span>Раунд {currentRound} завершен</span>
                <span className={style.textUntil}>Следующий начнется через {timeUntil}</span>
            </div>
        </>
    );
};
