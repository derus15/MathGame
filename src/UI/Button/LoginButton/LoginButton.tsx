import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './LoginButton.module.css';
import { classNames } from '../../../helpers/classNames/classNames';

interface loginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
}

const LoginButton:FC<loginButtonProps> = ({ children, className, ...props }) => (

    <div>
        <button
            type="submit"
            className={classNames(style.btn, {}, [className])}
            {...props}
        >
            {children}
        </button>
    </div>
);

export default LoginButton;
