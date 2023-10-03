import React from 'react';
import style from './Auth.module.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = () => {

    return (
        <div className={style.mainContainer}>
            <div className={style.gridContainer}>
                <RegisterForm />
                <LoginForm />
            </div>
        </div>
    );
};

export default Auth;