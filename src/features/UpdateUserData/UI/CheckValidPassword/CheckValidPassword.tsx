import React from 'react';
import style from './CheckValidPassword.module.css';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import { useForm } from 'react-hook-form';
import { UpdateUserDataParams } from '../../model/types/types';

interface CheckValidPasswordProps {
    action: (a: UpdateUserDataParams) => void;
    isLoading: boolean
}

export const CheckValidPassword = ({ action, isLoading }: CheckValidPasswordProps) => {

    const { handleSubmit, register } = useForm({ mode: 'onChange' });
    
    return (
        <form className={style.inputPasswordContainer} onSubmit={handleSubmit(action)}>
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
