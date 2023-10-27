import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './Auth.module.css';
import LoginInput from '../../UI/Input/LoginInput/LoginInput';
import LoginButton from '../../UI/Button/LoginButton/LoginButton';
import { authData, fetchRegister } from '../../redux/Slices/backSlices/authSlice';
import Loader from '../../UI/Loader/Loader';

function RegisterForm() {
    const dispatch = useDispatch();
    const isAuth = useSelector(authData);

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
            <div className={style.registerContainer}>
                <div className={style.registerHeader}>Регистрация</div>
                <LoginInput placeholder="Имя" {...register('name')} />
                <LoginInput placeholder="Почта" {...register('email')} type="email" />
                <LoginInput placeholder="Пароль" {...register('password')} />
                <LoginButton>Зарегистрироваться</LoginButton>
                <Loader isLoading={isLoading} position={style.positionRegisterLoader} />
            </div>
        </form>
    );
}

export default RegisterForm;
