import React, { memo, useEffect, useState } from 'react';
import style from './Lines.module.css';
import { Line } from 'shared/UI/Line/Line';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/Providers/Store/types';
import { getSessionProgress } from 'entities/Session';
import { sessionParamsActions } from 'entities/SessionParams';

export const Lines = memo(() => {

    const [rotate, setRotate] = useState(false);
    const dispatch = useDispatch();
    // const isSecretCounter = useSelector((state: StateSchema) => state.interface.secretCounter) === 5;
    // const sessionProgress = useSelector(getSessionProgress);
    //
    // useEffect(() => {
    //     if (isSecretCounter && !sessionProgress) {
    //         dispatch(interfaceActions.changeGameMode('Завод'));
    //     }
    // }, [isSecretCounter]);

    function handleClick() {
        setRotate((prevState) => !prevState);
        dispatch(sessionParamsActions.incrementSecretCounter());
    }

    function rotation(direction: string) {
        if (rotate) {
            return `${style[direction]} ${style.rotateLine}`;
        }
        return `${style[direction]}`;
    }

    return (
        <>
            <Line className={rotation('rightLine')} onClick={handleClick} />
            <Line className={rotation('leftLine')} onClick={handleClick} />
        </>
    );
});
