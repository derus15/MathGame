import React from 'react';
import LoginForm from '../../../component/Forms/LoginForm';
import RegisterForm from '../../../component/Forms/RegisterForm';
import Toast from '../../../UI/Toaster/Toast';

const Auth = () => (

    <div className="authContainer">
        <RegisterForm />
        <LoginForm />
        <Toast />
    </div>

);

export default Auth;
