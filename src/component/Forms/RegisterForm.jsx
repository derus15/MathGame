import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './Forms.module.css';
import LoginInput from '../../UI/Input/LoginInput/LoginInput';
import LoginButton from '../../UI/Button/LoginButton/LoginButton';
import { fetchRegister } from '../../redux/Slices/backSlices/auth/authSlice';
import Loader from '../../UI/Loader/Loader';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const status = useSelector((state) => state.auth.statusReg);
    const isLoading = status === 'loading';

    const { handleSubmit, register } = useForm({ mode: 'onChange' });

    const onSubmit = async (values) => {

        const data = await dispatch(fetchRegister(values));
        const error = data.payload;

        if (error && error.response) {
            const errorStatus = error.response.status;
            let errorMessage;

            if (errorStatus === 450) {
                errorMessage = 'Некорректное имя';
            } else if (errorStatus === 451) {
                errorMessage = 'Некорректный e-mail';
            } else if (errorStatus === 452) {
                errorMessage = 'Некорректный пароль';
            } else if (errorStatus === 500) {
                errorMessage = 'Такой пользователь уже существует';
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
                    <Loader isLoading={isLoading} position={style.positionRegisterLoader} />
                    <div className={style.registerHeader}>Регистрация</div>
                </div>
                <LoginInput placeholder="Имя" {...register('name')} />
                <LoginInput placeholder="Почта" {...register('email')} type="email" inputmode="email" />
                <LoginInput placeholder="Пароль" {...register('password')} />
                <LoginButton>Зарегистрироваться</LoginButton>
            </div>
        </form>
    );
};

export default RegisterForm;
