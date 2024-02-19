import React from 'react';
import style from './UpdateUserModal.module.css';
import AuthInput from 'shared/UI/Input/LoginInput/AuthInput';
import LoginButton from 'shared/UI/Button/LoginButton/LoginButton';
import { updateUserData } from 'features/UpdateUserData/model/services/updateUserData';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { useForm } from 'react-hook-form';
import { UpdateUserDataParams } from 'features/UpdateUserData/model/types/types';
import { toast } from 'react-toastify';

const UpdateUserModal = () => {

    const dispatch = useAppDispatch();
    const { handleSubmit, register, watch } = useForm({ mode: 'onChange' });

    const onSubmit = (values: UpdateUserDataParams) => {
        const passwordFirst = watch('passwordFirst');
        const passwordConfirm = watch('passwordConfirm');

        if (passwordFirst === passwordConfirm) {
            dispatch(updateUserData(values));
        } else {
            toast.error('Пароли не совпдаают');
        }
    };

    return (
        <form className={style.inputContainer} onSubmit={handleSubmit(onSubmit)}>
            <span className={style.title}>Редактирование профиля</span>
            <AuthInput placeholder="Новое имя" {...register('name')} />
            <AuthInput 
                placeholder="Новый пароль"
                {...register('passwordFirst')} 
            />
            <AuthInput
                placeholder="Повторите пароль"
                {...register('passwordConfirm')}
            />
            <LoginButton>Сохранить</LoginButton>
        </form>
    );
};

export default UpdateUserModal;
