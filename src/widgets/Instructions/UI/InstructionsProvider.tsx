import React, { memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from 'widgets/Instructions/UI/Instructions.module.css';
import Cross from '../../../../public/assets/cross.svg';
import { useSelector } from 'react-redux';
import { getSessionProgress } from 'entities/Session';
import { getInstructionText } from 'widgets/Instructions/model/selectors/getInstructionText';

export const InstructionsProvider = memo(() => {

    const [isOpen, setIsOpen] = useState(JSON.parse(localStorage.getItem('isInstruction')) 
    ?? true);
    const [isVisible, setIsVisible] = useState(true);
    const sessionProgress = useSelector(getSessionProgress);
    const globalInstruction = useSelector(getInstructionText);
    const [instruction, setInstruction] = useState(globalInstruction);

    const closeInstruction = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 100);
        localStorage.setItem('isInstruction', String(false));
    };

    useEffect(() => {
        
        let timeout: ReturnType<typeof setTimeout>;
        
        if (instruction !== globalInstruction) {
            setIsVisible(false);

            timeout = setTimeout(() => {
                setInstruction(globalInstruction);
                setIsVisible(true);
            }, 100);
        }        
        
        return () => clearTimeout(timeout);
        
    }, [globalInstruction, sessionProgress]);

    useEffect(() => {
        if (sessionProgress) {
            closeInstruction();
            localStorage.setItem('isInstruction', String(true));
        }
    }, [sessionProgress]);

    return (
        isOpen && (
            <div className={classNames(style.instructions, {
                [style.hidden]: !isVisible,
                [style.init]: isVisible,
            })}
            >
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
