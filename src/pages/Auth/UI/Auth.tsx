import React from 'react';
import { LoginForm } from 'features/LoginByUsername';
import { RegisterForm } from 'features/RegisterByUsername';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';

const Auth = () => (

    <PageLayout>
        <div className="authContainer">
            <RegisterForm />
            <LoginForm /> 
        </div>
    </PageLayout>

);

export default Auth;
