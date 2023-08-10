import React from 'react';
import style from './LoginButton.module.css';

const LoginButton = ({children, ...props}) => {

    return (
        <div>
            <button type={'submit'} className={style.btn} {...props}>{children}</button>
        </div>
    );
};

export default LoginButton;