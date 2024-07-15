import React, { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import style from './LoginInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    className?: string,
    password?: boolean,
}

const LoginInput = forwardRef((props: LoginInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    const { name, className, password, ...otherProps } = props;
    const [isVisiblePassword, setIsVisiblePassword] = useState(password);

    const handleShowPassword = () => {
        setIsVisiblePassword((prevState) => !prevState);
    };

    return (
        <div className={style.authContainer}>
            <input
                className={classNames(
                    style.npt,
                    {
                        [style.visiblePassword]: isVisiblePassword,
                        [style.notVisiblePassword]: !isVisiblePassword,
                    },
                    [className],
                )}
                ref={ref}
                name={name}
                type={isVisiblePassword ? 'password' : 'text'}
                {...otherProps}
                autoComplete="off"
            />
            {password && (
                <OutlineButton
                    onClick={handleShowPassword}
                    className={classNames(style.passBtn, {
                        [style.passBtnActive]: isVisiblePassword,
                    })}
                    type="button"
                    title={isVisiblePassword ? 'Показать пароль' : 'Скрыть пароль'}
                />
            )}
        </div>
    );
});

export default LoginInput;
