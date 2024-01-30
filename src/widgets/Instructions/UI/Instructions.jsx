import React, { useEffect, useState } from 'react';
import style from './Instructions.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import Cross from '/public/assets/cross.svg';
import { useSelector } from 'react-redux';
import { getSessionProgress } from 'entities/Session';

const Instructions = ({ setIsOpen, instructions }) => {

    const [isVisible, setIsVisible] = useState(true);
    const sessionProgress = useSelector(getSessionProgress);

    useEffect(() => {
        let timeout;

        if (sessionProgress) {
            setIsVisible(false);
            timeout = setTimeout(() => {
                setIsOpen(false);
            }, 500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [sessionProgress]);
    
    const closeInstruction = () => {
        setIsVisible((prevState) => !prevState);
        localStorage.setItem('isInstruction', !isVisible);
        setTimeout(() => {
            setIsOpen((prev) => !prev);
        }, 500);
    };

    return (
        <div className={classNames(style.instructions, { [style.hidden]: !isVisible })}>
            {instructions}
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
