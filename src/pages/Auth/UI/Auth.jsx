import React from 'react';
import style from './Auth.module.css';
import LoginForm from '../../../component/Forms/LoginForm';
import RegisterForm from '../../../component/Forms/RegisterForm';
import Toast from '../../../UI/Toaster/Toast';

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
