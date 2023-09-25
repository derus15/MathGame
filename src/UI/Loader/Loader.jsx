import React from 'react';
import style from './Loader.module.css';

const Loader = ({isLoading, position}) => {

    return (
        <>
          <div className={isLoading ? [style.loader, position].join(' ') : ''}></div>
        </>
    );
};

export default Loader;