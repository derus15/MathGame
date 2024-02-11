import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import style from './RegisterForm.module.css';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';
import LoginButton from 'shared/UI/Button/LoginButton/LoginButton';
import Loader from 'shared/UI/Loader/Loader';
import { getRegisterLoadingStatus, registerByUsername } from 'features/RegisterByUsername';
import { getIsAuth } from 'entities/User';

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);
    const status = useSelector(getRegisterLoadingStatus);
    const isLoading = status === 'loading';

    const { handleSubmit, register } = useForm({ mode: 'onChange' });

    const onSubmit = async (values) => {
        dispatch(registerByUsername(values));
    };

    if (isAuth) {
        return <Navigate to="/account" />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.container}>
                <div className={style.loaderContainer}>
                    <Loader isLoading={isLoading} position={style.positionRegisterLoader} />
                    <div className={style.registerHeader}>Регистрация</div>
                </div>
                <LoginInput placeholder="Имя" {...register('name')} />
                <LoginInput placeholder="Почта" {...register('email')} type="email" inputmode="email" />
                <LoginInput placeholder="Пароль" {...register('password')} />
                <LoginButton disabled={isLoading}>Зарегистрироваться</LoginButton>
            </div>
        </form>
    );
};
