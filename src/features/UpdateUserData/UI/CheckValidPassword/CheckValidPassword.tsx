import React from 'react';
import style from './CheckValidPassword.module.css';
import AuthInput from 'shared/UI/Input/AuthInput/AuthInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import { useForm } from 'react-hook-form';
import { useCheckValidPasswordMutation } from 'features/UpdateUserData/api/checkValidPasswordApi';

export const CheckValidPassword = () => {

    const [checkValidPassword, {isLoading}] = useCheckValidPasswordMutation();
    const { handleSubmit, register } = useForm({ mode: 'onChange' });

    const checkPassword = (values: string) => {
        checkValidPassword(values);
    };
    
    return (
        <form className={style.inputPasswordContainer} onSubmit={handleSubmit(checkPassword)}>
            <span className={style.header}>Редактирование профиля</span>
            <AuthInput
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
