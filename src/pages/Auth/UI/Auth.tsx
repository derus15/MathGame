import React from 'react';
import { LoginForm } from 'features/LoginByUsername';
import { RegisterForm } from 'features/RegisterByUsername';

const Auth = () => (

    <div className="authContainer">
        <RegisterForm />
        <LoginForm /> 
    </div>
);

export default Auth;
