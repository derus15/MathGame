import React, { useState } from 'react';
import style from './Auth.module.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../UI/Toaster/Toaster.css';
import LoginInput from '../../UI/Input/LoginInput/LoginInput';
import LoginButton from '../../UI/Button/LoginButton/LoginButton';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authData, fetchAuth } from '../../redux/Slices/authSlice';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Checkbox from '../../UI/Checkbox/Checkbox';

const Login = () => {

    const [isRemember, setIsRemember] = useState(JSON.parse(localStorage.getItem('remember')) || false);
    const dispatch = useDispatch();
    const isAuth = useSelector(authData);

    const status = useSelector(state => state.auth.statusLog);
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
        return <Navigate to='/account' />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.loginContainer}>
                <div className={style.loginHeader}>Логин</div>
                <LoginInput placeholder={'Почта'} {...register('email')} type={'email'}></LoginInput>
                <LoginInput placeholder={'Пароль'} {...register('password')}></LoginInput>
                <Checkbox label={'Запомни меня'} checked={isRemember} setIsChecked={setIsRemember} />
                <LoginButton>Войти</LoginButton>
                <div className={isLoading ? [style.loader, style.positionLoginLoader].join(' ') : ''}></div>
                <ToastContainer
                    position='top-center'
                    autoClose={1500}
                    hideProgressBar={false}
                    theme={'dark'}
                />
            </div>
        </form>
    );
};

export default Login;