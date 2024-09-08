import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import style from './RegisterForm.module.css';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import { Loader } from 'shared/UI/Loader/Loader';
import { getIsAuth } from 'entities/User';
import { RegisterParamsData } from '../../model/types/types';
import { useRegisterByUsernameMutation } from '../../api/registerByUsernameApi';

export const RegisterForm = () => {

    const isAuth = useSelector(getIsAuth);
    const [registerByUsername, { isLoading }] = useRegisterByUsernameMutation();
    const { handleSubmit, register } = useForm({ mode: 'onChange' });

    const onSubmit = async (values: RegisterParamsData) => {
        registerByUsername(values);
    };

    if (isAuth) {
        return <Navigate to="/account" />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.container}>
                <div className={style.loaderContainer}>
                    <Loader isLoading={isLoading} className={style.positionRegisterLoader} />
                    <div className={style.registerHeader}>Регистрация</div>
                </div>
                <LoginInput placeholder="Имя" {...register('name')} />
                <LoginInput placeholder="Почта" {...register('email')} type="email" />
                <LoginInput placeholder="Пароль" {...register('password')} password />
                <LoginButton disabled={isLoading}>Зарегистрироваться</LoginButton>
            </div>
        </form>
    );
};
