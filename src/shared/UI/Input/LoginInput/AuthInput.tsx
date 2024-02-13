import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import style from './AuthInput.module.css';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
}

const AuthInput = forwardRef(({ name, ...props }: LoginInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div>
        <input className={style.npt} {...props} ref={ref} name={name} autoComplete="off" />
    </div>
));

export default AuthInput;
