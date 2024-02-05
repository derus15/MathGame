import React, { ForwardedRef, forwardRef } from 'react';
import style from './LoginInput.module.css';

interface LoginInputProps {
    name: string,
}

const LoginInput = forwardRef(({ name, ...props }: LoginInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div>
        <input className={style.npt} {...props} ref={ref} name={name} autoComplete="off" />
    </div>
));

export default LoginInput;
