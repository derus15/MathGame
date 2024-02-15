import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import style from './Loginform.module.css';
import AuthInput from 'shared/UI/Input/LoginInput/AuthInput';
import LoginButton from 'shared/UI/Button/LoginButton/LoginButton';
import Checkbox from 'shared/UI/Checkbox/Checkbox';
import Loader from 'shared/UI/Loader/Loader';
import { getIsAuth } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { getLoginLoadingStatus } from '../../model/selectors/getLoginLoadingStatus';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { LoginParamsData } from 'features/LoginByUsername/model/slice/types';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';

export const LoginForm = () => {

    const [isRemember, setIsRemember] = useState(JSON.parse(localStorage.getItem('remember')) || false);
    const isAuth = useSelector(getIsAuth);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getLoginLoadingStatus) === 'loading';

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

        dispatch(loginByUsername(values));
        localStorage.setItem('remember', isRemember);

    };

    if (isAuth) {
        return <Navigate to="/account" />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.container}>
                <div className={style.loaderContainer}>
                    <Loader isLoading={isLoading} position={style.positionLoginLoader} />
                    <div className={style.loginHeader}>Логин</div>
                </div>
                <AuthInput placeholder="Почта" {...register('email')} type="email" />
                <AuthInput placeholder="Пароль" {...register('password')} />
                <Checkbox label="Запомни меня" checked={isRemember} setIsChecked={setIsRemember} />
                <LoginButton disabled={isLoading}>Войти</LoginButton>
            </div>
        </form>
    );
};
