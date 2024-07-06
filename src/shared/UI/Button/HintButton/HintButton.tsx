import React, { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './HintButton.module.css';

interface HintButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string,
    text?: string,
    className?: string,
}

export const HintButton = ({ title = '>>', text, className, ...props }: HintButtonProps) => {

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonRef.current && text) {
            buttonRef.current.style.setProperty('--hint-content', `"${text}"`);
        }
    }, [text]);

    return (
        <button
            type="button"
            className={classNames(style.hintButton, {}, [className])}
            ref={buttonRef}
            {...props}
        >
            {title}
        </button>

    );
};
