import React from 'react';
import { getIsAuth } from 'entities/User';
import style from './InviteRegister.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const InviteRegister = () => {
    
    const isAuth = useSelector(getIsAuth);
    
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {!isAuth && (
                <div className={style.instruction}>
                    <Link to="/auth" className={style.instructionLink}>
                        Создайте аккаунт,
                    </Link>
                    чтобы сохранять результаты
                </div>
            )}
        </>
    );
};
