import React from 'react';
import style from './NotFound.module.css';

function NotFound() {
    return (
        <div className={style.container}>
            <h1 className={style.title_num}>404</h1>
            <div className={style.title_int}>Здесь ничего нет</div>
        </div>
    );
}

export default NotFound;
