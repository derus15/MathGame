import React from 'react';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';
import style from './ErrorPage.module.css';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';

const ErrorPage = () => {
    
    const clearLocalStorage = () => {
        localStorage.clear();
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    
    return (
        <div className="mainContainer">
            <PageLayout>
                <div className={style.container}>
                    <span>Произошла непредвиденная ошибка</span>
                    <ExampleButton className={style.btn} onClick={clearLocalStorage}>
                        Обновить страницу
                    </ExampleButton>
                </div>
            </PageLayout>
        </div>
    );
};

export default ErrorPage;
