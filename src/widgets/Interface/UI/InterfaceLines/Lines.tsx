import React, { memo, useState } from 'react';
import style from './Lines.module.css';
import { Line } from 'shared/UI/Line/Line';
import { useDispatch } from 'react-redux';
import { interfaceActions } from 'widgets/Interface';

const Lines = () => {

    const [rotate, setRotate] = useState(false);
    const dispatch = useDispatch();

    function handleClick() {
        setRotate((prevState) => !prevState);
        dispatch(interfaceActions.incrementSecretCounter());
    }

    function rotation(direction: string) {
        if (rotate) {
            return `${style[direction]} ${style.rotateLine}`;
        }
        return `${style[direction]}`;
    }

    return (
        <div className={style.containerLines}>
            <Line className={rotation('rightLine')} onClick={handleClick} />
            <Line className={rotation('leftLine')} onClick={handleClick} />
        </div>
    );
};

export default memo(Lines);
