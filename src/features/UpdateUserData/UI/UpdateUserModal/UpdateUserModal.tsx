import React from 'react';
import style from './UpdateUserModal.module.css';
import AuthInput from 'shared/UI/Input/AuthInput/AuthInput';
import { LoginButton } from 'shared/UI/Button/LoginButton/LoginButton';
import { useForm } from 'react-hook-form';
import { UpdateUserDataParams } from 'features/UpdateUserData/model/types/types';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getIsValidPassword } from '../../model/selectors/getIsValidPassword';
import { CheckValidPassword } from '../CheckValidPassword/CheckValidPassword';
import Loader from 'shared/UI/Loader/Loader';
import { useUpdateUserDataMutation } from 'features/UpdateUserData/api/updateUserDataApi';

const UpdateUserModal = () => {

    const { handleSubmit, register, watch } = useForm({ mode: 'onChange' });
    const [updateUserData, { isLoading }] = useUpdateUserDataMutation();
    const isValidPassword = useSelector(getIsValidPassword);
    
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
                password
                {...register('passwordFirst')}
            />
            <AuthInput
                key="passwordConfirm"
                placeholder="Повторите пароль"
                password
                {...register('passwordConfirm')}
            />
            <div className={style.loaderContainer}>
                <Loader isLoading={isLoading} className={style.loader} />
                <LoginButton>Сохранить</LoginButton>
            </div>
        </form>
    );
};

export default UpdateUserModal;
