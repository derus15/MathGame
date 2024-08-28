import React from 'react';
import style from './UpdateUserData.module.css';
import LoginInput from 'shared/UI/Input/LoginInput/LoginInput';
import Loader from 'shared/UI/Loader/Loader';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import { useForm } from 'react-hook-form';
import { UpdateUserDataParams } from '../../model/types/types';
import { toast } from 'react-toastify';
import { useUpdateUserDataMutation } from '../../api/updateUserDataApi';

export const UpdateUserData = () => {

    const [updateUserData, { isLoading }] = useUpdateUserDataMutation();
    const { handleSubmit, register, watch } = useForm({ mode: 'onChange' });

    const onSubmit = (values: UpdateUserDataParams) => {

        const passwordFirst = watch('passwordFirst');
        const passwordConfirm = watch('passwordConfirm');

        const userData = {
            name: values.name,
            password: passwordFirst,
        };

        if (passwordFirst !== passwordConfirm) {
            return toast.error('Пароли не совпадают');
        }

        updateUserData(userData);
    };
    
    return (
        <form className={style.inputContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.textContainer}>
                <span className={style.header}>Редактирование профиля</span>
                <span className={style.title}>Заполните поля, которые хотите изменить</span>
            </div>
            <LoginInput placeholder="Новое имя" {...register('name')} />
            <LoginInput
                key="passwordFirst"
                placeholder="Новый пароль"
                password
                {...register('passwordFirst')}
            />
            <LoginInput
                key="passwordConfirm"
                placeholder="Повторите пароль"
                password
                {...register('passwordConfirm')}
            />
            <div className={style.loaderContainer}>
                <Loader isLoading={isLoading} className={style.loader} />
                <LoginButton disabled={isLoading}>Сохранить</LoginButton>
            </div>
        </form>
    );
};
