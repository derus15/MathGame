import React, { useEffect, useState } from 'react';
import style from './Instructions.module.css';
import { classNames } from '../../helpers/classNames/classNames';
import Cross from '/public/assets/cross.svg';

const Instructions = ({ signal, setIsOpen }) => {

    const instructionsObj = { initial: 'Для начала сессии нажмите на поле ввода или Space' };
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timeout;

        if (signal) {
            setIsVisible(false);
            timeout = setTimeout(() => {
                setIsOpen(false);
            }, 500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [signal]);
    
    const closeInstruction = () => {
        setIsVisible((prevState) => !prevState);
        localStorage.setItem('isInstruction', !isVisible);
        setTimeout(() => {
            setIsOpen((prev) => !prev);
        }, 500);
    };

    return (
        <div className={classNames(style.instructions, { [style.hidden]: !isVisible })}>
            {instructionsObj.initial}
            <button
                className={style.btn}
                type="button"
                onClick={closeInstruction}
            >
                <Cross />
            </button>
        </div>
    );
};

export default Instructions;
