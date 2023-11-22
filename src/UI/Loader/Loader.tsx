import React, { FC } from 'react';
import style from './Loader.module.css';
import { classNames } from '../../helpers/classNames';

interface loaderProps {
    isLoading: boolean,
    position?: string,
}

const Loader:FC<loaderProps> = ({ isLoading, position }) => (

    <div className={classNames('', { [style.loader]: isLoading }, [position])} />
);

export default Loader;
