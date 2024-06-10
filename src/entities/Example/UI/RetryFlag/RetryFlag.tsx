import React from 'react';
import style from './RetryFlag.module.css';
import { useSelector } from 'react-redux';
import { getIsRetrySession } from '../../model/selectors/getIsRetrySession';

export const RetryFlag = () => {

    const isRetry = useSelector(getIsRetrySession);
    
    return (
        isRetry && <span className={style.flag} title="Повторная сессия">- П</span>
    );
};
