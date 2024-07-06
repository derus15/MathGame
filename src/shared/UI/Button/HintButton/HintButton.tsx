import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './HintButton.module.css';

interface HintButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string,
    text?: string,
    className?: string,
}

export const HintButton = ({ title = '>>', text, className }: HintButtonProps) => {

    return (
        <button
            type="button"
            className={classNames(style.hintButton, {}, [className])}
        >
            {title}
        </button>
    );
};
