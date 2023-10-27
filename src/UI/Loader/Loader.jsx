import React from 'react';
import style from './Loader.module.css';

function Loader({ isLoading, position }) {
    return (
        <div className={isLoading ? [style.loader, position].join(' ') : ''} />
    );
}

export default Loader;
