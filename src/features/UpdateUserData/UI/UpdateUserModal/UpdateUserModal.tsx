import React from 'react';
import style from './UpdateUserModal.module.css';
import AuthInput from 'shared/UI/Input/LoginInput/AuthInput';
import LoginButton from 'shared/UI/Button/LoginButton/LoginButton';
import { updateUserData } from 'features/UpdateUserData/model/services/updateUserData';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { useForm } from 'react-hook-form';
import { UpdateUserDataParams } from 'features/UpdateUserData/model/slice/types';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getIsValidPassword } from '../../model/selectors/getIsValidPassword';
import { CheckValidPassword } from '../CheckValidPassword/CheckValidPassword';

const UpdateUserModal = () => {

    const dispatch = useAppDispatch();
    const isValidPassword = useSelector(getIsValidPassword);
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
        
        dispatch(updateUserData(userData));
    };
    
    if (!isValidPassword) {
        return <CheckValidPassword />;
    }

    return (
        <form className={style.inputContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.textContainer}>
                <span className={style.header}>Редактирование профиля</span>
                <span className={style.title}>Заполните поля, которые хотите изменить</span>
            </div>
            <AuthInput placeholder="Новое имя" {...register('name')} />
            <AuthInput
                key="passwordFirst"
                placeholder="Новый пароль"
                {...register('passwordFirst')}
            />
            <AuthInput
                key="passwordConfirm"
                placeholder="Повторите пароль"
                {...register('passwordConfirm')}
            />
            <LoginButton>Сохранить</LoginButton>
        </form>
    );
};

export default UpdateUserModal;
