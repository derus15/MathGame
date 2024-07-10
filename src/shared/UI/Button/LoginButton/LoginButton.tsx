import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './LoginButton.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface loginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
}

export const LoginButton:FC<loginButtonProps> = ({ children, className, ...props }) => (

    <button
        type="submit"
        className={classNames(style.btn, {}, [className])}
        {...props}
    >
        {children}
    </button>
);
