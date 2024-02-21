import React from 'react';
import style from './CheckValidPassword.module.css';
import AuthInput from 'shared/UI/Input/LoginInput/AuthInput';
import LoginButton from 'shared/UI/Button/LoginButton/LoginButton';
import { useForm } from 'react-hook-form';
import { checkValidPassword } from '../../model/services/checkValidPassword';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';

export const CheckValidPassword = () => {

    const dispatch = useAppDispatch();
    const { handleSubmit, register } = useForm({ mode: 'onChange' });

    const checkPassword = (values: string) => {
        dispatch(checkValidPassword(values));
    };
    
    return (
        <form className={style.inputPasswordContainer} onSubmit={handleSubmit(checkPassword)}>
            <span className={style.header}>Редактирование профиля</span>
            <AuthInput
                key="password"
                autoFocus
                placeholder="Введите пароль"
                {...register('password')}
            />
            <LoginButton>Подтвердить</LoginButton>
        </form>
    );
};
