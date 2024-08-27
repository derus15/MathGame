import React from 'react';
import style from './CheckValidPassword.module.css';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import { useForm } from 'react-hook-form';
import { useCheckValidPassword } from '../../hooks/useCheckValidPassword';

export const CheckValidPassword = () => {

    const { handleSubmit, register } = useForm({ mode: 'onChange' });
    const { handleCheckValidPassword, isLoading } = useCheckValidPassword();
    
    return (
        <form className={style.inputPasswordContainer} onSubmit={handleSubmit(handleCheckValidPassword)}>
            <span className={style.header}>Редактирование профиля</span>
            <LoginInput
                key="password"
                autoFocus
                placeholder="Введите пароль"
                password
                {...register('password')}
            />
            <LoginButton disabled={isLoading}>Подтвердить</LoginButton>
        </form>
    );
};
