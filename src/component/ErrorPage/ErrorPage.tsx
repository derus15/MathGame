import React from 'react';
import ExampleButton from 'UI/Button/ExampleButton/ExampleButton';
import style from './ErrorPage.module.css';

const ErrorPage = () => {
    
    const clearLocalStorage = () => {
        localStorage.clear();
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    
    return (
        <div className={style.container}>
            <span>Произошла непредвиденная ошибка</span>
            <ExampleButton className={style.btn} onClick={clearLocalStorage}>
                Обновить страницу
            </ExampleButton>

        </div>
    );
};

export default ErrorPage;
