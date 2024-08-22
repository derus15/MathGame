import React, { Dispatch, memo, SetStateAction, useEffect, useState } from 'react';
import style from '../Timer/HungerTimer.module.css';
import { useCalculateHungerTime } from '../../../hooks/useCalculateHungerTime/useCalculateHungerTime';
import { useSelector } from 'react-redux';
import { getSessionPoints } from 'entities/SessionData';
import { getExampleAnswer, getExampleSign } from 'entities/Example';

interface HungerTooltipProps {
    setTime: Dispatch<SetStateAction<number>>,
    isMounted: boolean,
}

export const HungerTooltip = memo(({ setTime, isMounted }: HungerTooltipProps) => {
    
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    const [extraTime, setExtraTime] = useState(2);

    const globalPoints = useSelector(getSessionPoints);
    const answer = useSelector(getExampleAnswer);
    const sign = useSelector(getExampleSign);

    useEffect(() => {

        let timeout: ReturnType<typeof setTimeout>;
        setExtraTime(useCalculateHungerTime(answer, sign));

        if (globalPoints > 0 && isMounted) {

            setIsShowTooltip(true);
            timeout = setTimeout(() => {
                setIsShowTooltip(false);
            }, 400);

            setTime((prevState) => prevState + (extraTime * 1000));
        }

        return () => clearTimeout(timeout);
    }, [globalPoints]);

    return (
        isShowTooltip && (<div className={style.hungerCounter}>+ {extraTime}</div>)
    );
});
