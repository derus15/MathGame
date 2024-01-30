import React, { FC } from 'react';
import style from './Loader.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface loaderProps {
    isLoading: boolean,
    position?: string,
}

const Loader:FC<loaderProps> = ({ isLoading, position }) => (

    <div className={classNames(style.loader, { [style.loaderActive]: isLoading }, [position])} />
);

export default Loader;
