import React from 'react';
import style from './Auth.module.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Toast from '../../UI/Toaster/Toast';

const Auth = () => (
    <div className={style.mainContainer}>
        <div className={style.gridContainer}>
            <RegisterForm />
            <LoginForm />
            <Toast />
        </div>
    </div>
);

export default Auth;
