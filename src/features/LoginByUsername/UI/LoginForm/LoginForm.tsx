import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import style from './Loginform.module.css';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import Checkbox from 'shared/UI/Checkbox/Checkbox';
import Loader from 'shared/UI/Loader/Loader';
import { getIsAuth } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { useLoginByUsernameMutation } from '../../api/loginByUsernameApi';
import { LoginParamsData } from '../../model/types/types';
import { toast } from 'react-toastify';

export const LoginForm = memo(() => {

    const [isRemember, setIsRemember] = useState(JSON.parse(localStorage.getItem('remember')) || false);
    const isAuth = useSelector(getIsAuth);
    const [loginByUsername, { isLoading }] = useLoginByUsernameMutation();

    const { handleSubmit, register } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: isRemember ? localStorage.getItem('email') : '',
            password: isRemember ? localStorage.getItem('password') : '',
        },
    });

    const onSubmit = (values: LoginParamsData) => {

        if (isRemember) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);
        }

        if (!values.email) {
            toast.error('Некорректная почта');
            return;
        }

        if (!values.password) {
            toast.error('Некорректный пароль');
            return;
        }

        loginByUsername(values);
        localStorage.setItem('remember', isRemember.toString());
    };

    if (isAuth) {
        return <Navigate to="/account" />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.container}>
                <div className={style.loaderContainer}>
                    <Loader isLoading={isLoading} className={style.positionLoginLoader} />
                    <div className={style.loginHeader}>Логин</div>
                </div>
                <LoginInput placeholder="Почта" {...register('email')} type="email" />
                <LoginInput placeholder="Пароль" {...register('password')} password />
                <Checkbox label="Запомни меня" checked={isRemember} setIsChecked={setIsRemember} />
                <LoginButton disabled={isLoading}>Войти</LoginButton>
            </div>
        </form>
    );
});
