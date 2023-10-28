import React from 'react';
import style from './Loader.module.css';

const Loader = ({ isLoading, position }) => (

    <div className={isLoading ? [style.loader, position].join(' ') : ''} />
);

export default Loader;
