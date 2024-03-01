import React, { FC } from 'react';
import style from './Loader.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface loaderProps {
    isLoading: boolean,
    className?: string,
}

const Loader:FC<loaderProps> = ({ isLoading, className }) => (

    <div className={classNames(style.loader, { [style.loaderActive]: isLoading }, [className])} />
);

export default Loader;
