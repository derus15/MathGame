import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'features/GameMods/StandardMode/UI/Timer/BaseTimer';
import { sessionActions } from 'entities/Session';
import { getSessionPoints } from 'entities/SessionData';

export const HungerTimer = () => {

    const dispatch = useDispatch();
    const [time, setTime] = useState(10);
    const points = useSelector(getSessionPoints);

    useEffect(() => {
        if (points > 0) {
            setTime((prevState) => prevState + 2);
        }
    }, [points]);
    
    const endSession = () => {
        dispatch(sessionActions.endSession());    
    };
    
    return (
        <div>
            <BaseTimer time={time} setTime={setTime} onFinishCallback={endSession} />
        </div>
    );
};
