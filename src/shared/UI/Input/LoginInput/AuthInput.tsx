import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import style from './AuthInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    className?: string,
}

const AuthInput = forwardRef((props: LoginInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    const { name, className, ...otherProps } = props;

    return (
        <div>
            <input
                className={classNames(style.npt, {}, [className])}
                ref={ref}
                name={name}
                {...otherProps}
                autoComplete="off"
            />
        </div>
    ); 
});

export default AuthInput;
