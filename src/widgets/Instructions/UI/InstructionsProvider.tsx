import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from 'widgets/Instructions/UI/Instructions.module.css';
import Cross from '../../../../public/assets/cross.svg';
import { useSelector } from 'react-redux';
import { getSessionProgress } from 'entities/Session';
import { StateSchema } from 'app/Providers/Store/types';

export const InstructionsProvider = memo(() => {

    const [isOpen, setIsOpen] = useState(JSON.parse(localStorage.getItem('isInstruction')) 
    ?? true);
    const [isVisible, setIsVisible] = useState(true);
    const sessionProgress = useSelector(getSessionProgress);

    const initialValue = 'Для начала сессии нажмите на поле ввода или Space';
    const instruction = useSelector((state: StateSchema) => state.instructions.instruction) || initialValue;

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

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
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
        localStorage.setItem('isInstruction', String(false));
    };

    return (
        isOpen && (
            <div className={classNames(style.instructions, { [style.hidden]: !isVisible })}>
                {instruction}
                <button
                    className={style.btn}
                    type="button"
                    onClick={closeInstruction}
                >
                    <Cross />
                </button>
            </div>
        )
    );
});
