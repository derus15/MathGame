import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import style from './RegisterForm.module.css';
import AuthInput from 'shared/UI/Input/AuthInput/AuthInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import Loader from 'shared/UI/Loader/Loader';
import { getRegisterLoadingStatus, registerByUsername } from 'features/RegisterByUsername';
import { getIsAuth } from 'entities/User';
import { RegisterParamsData } from '../../model/slice/types';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';

export const RegisterForm = () => {

    const dispatch = useAppDispatch();
    const isAuth = useSelector(getIsAuth);
    const status = useSelector(getRegisterLoadingStatus);
    const isLoading = status === 'loading';

    const { handleSubmit, register } = useForm({ mode: 'onChange' });

    const onSubmit = async (values: RegisterParamsData) => {
        dispatch(registerByUsername(values));
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
                <AuthInput placeholder="Имя" {...register('name')} />
                <AuthInput placeholder="Почта" {...register('email')} type="email" />
                <AuthInput placeholder="Пароль" {...register('password')} password />
                <LoginButton disabled={isLoading}>Зарегистрироваться</LoginButton>
            </div>
        </form>
    );
};
