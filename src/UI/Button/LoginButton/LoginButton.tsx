import React, { FC, ReactNode } from 'react';
import style from './LoginButton.module.css';

interface loginButtonProps {
    children?: ReactNode,
}

const LoginButton:FC<loginButtonProps> = ({ children, ...props }) => (
    <div>
        <button type="submit" className={style.btn} {...props}>{children}</button>
    </div>
);

export default LoginButton;
