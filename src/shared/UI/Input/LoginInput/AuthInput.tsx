import React, { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import style from './AuthInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    className?: string,
    password?: boolean,
}

const AuthInput = forwardRef((props: LoginInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    const { name, className, password, ...otherProps } = props;
    const [isVisiblePassword, setIsVisiblePassword] = useState(password);

    const handleShowPassword = () => {
        setIsVisiblePassword((prevState) => !prevState);
    };

    return (
        <div
            className={style.authContainer}
        >
            <input
                className={classNames(
                    style.npt,
                    { [style.visiblePassword]: isVisiblePassword,
                        [style.notVisiblePassword]: !isVisiblePassword,
                    },
                    [className],
                )}
                ref={ref}
                name={name}
                type={isVisiblePassword && 'password'}
                {...otherProps}
                autoComplete="off"
            />
            {password && (
                <OutlineButton
                    onClick={handleShowPassword}
                    className={style.passBtn}
                    title={isVisiblePassword ? 'Показать пароль' : 'Скрыть пароль'}
                />)}
        </div>
    );
});

export default AuthInput;
