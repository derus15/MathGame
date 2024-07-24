import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import style from './LineInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface ExampleInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const LineInput = forwardRef(
    (
        { className, ...props }: ExampleInputProps, 
        ref: ForwardedRef<HTMLInputElement>,
    ) => (
        <input ref={ref} className={classNames(style.npt, {}, [className])} {...props} />
    ),
);
