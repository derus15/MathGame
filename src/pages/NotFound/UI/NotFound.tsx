import React from 'react';
import style from './NotFound.module.css';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';

const NotFound = () => (
    <PageLayout>
        <div className={style.container}>
            <h1 className={style.title_num}>404</h1>
            <div className={style.title_int}>Здесь ничего нет</div>
        </div>
    </PageLayout>
);

export default NotFound;
