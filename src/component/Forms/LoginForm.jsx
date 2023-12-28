import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './Forms.module.css';
import LoginInput from '../../UI/Input/LoginInput/LoginInput';
import LoginButton from '../../UI/Button/LoginButton/LoginButton';
import { fetchAuth } from '../../redux/Slices/backSlices/auth/authSlice';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Loader from '../../UI/Loader/Loader';

const LoginForm = () => {

    const [isRemember, setIsRemember] = useState(JSON.parse(localStorage.getItem('remember')) || false);
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const status = useSelector((state) => state.auth.statusLog);
    const isLoading = status === 'loading';

    const { handleSubmit, register } = useForm({
        mode: 'onChange',

        defaultValues: {
            email: isRemember ? localStorage.getItem('email') : '',
            password: isRemember ? localStorage.getItem('password') : '',
        },
    });

    const onSubmit = async (values) => {

        const data = await dispatch(fetchAuth(values));
        const error = data.payload;

        localStorage.setItem('remember', isRemember);

        if (isRemember) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);
        }

        if (error && error.response) {
            const errorStatus = error.response.status;
            let errorMessage;

            if (errorStatus === 400) {
                errorMessage = 'Неверный логин или пароль';
            } else if (errorStatus === 404) {
                errorMessage = 'Пользователь не найден';
            } else if (errorStatus === 500) {
                errorMessage = 'Ошибка сервера, попробуйте позже';
            }

            toast.error(errorMessage);
        }

        if ('token' in data.payload) {
            localStorage.setItem('token', data.payload.token);
        }

        if (!('token' in data.payload) && !(error && error.response)) {
            toast.error('Сервер не отвечает. Попробуйте позже');
        }
    };

    if (isAuth) {
        return <Navigate to="/account" />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.container}>
                <div className={style.loaderContainer}>
                    <Loader isLoading={isLoading} position={style.positionLoginLoader} />
                    <div className={style.loginHeader}>Логин</div>
                </div>
                <LoginInput placeholder="Почта" {...register('email')} type="email" />
                <LoginInput placeholder="Пароль" {...register('password')} />
                <Checkbox label="Запомни меня" checked={isRemember} setIsChecked={setIsRemember} />
                <LoginButton>Войти</LoginButton>
            </div>
        </form>
    );
};

export default LoginForm;
