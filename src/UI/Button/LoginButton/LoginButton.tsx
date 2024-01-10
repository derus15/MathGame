import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './LoginButton.module.css';
import { classNames } from '../../../helpers/classNames/classNames';

interface loginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    disabled?: boolean
}

const LoginButton:FC<loginButtonProps> = ({ children, className, disabled, ...props }) => (

    <div>
        <button
            type="submit"
            disabled={disabled}
            className={classNames(style.btn, { [style.disabled]: disabled }, [className])}
            {...props}
        >
            {children}
        </button>
    </div>
);

export default LoginButton;
