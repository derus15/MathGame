import React from 'react';
import style from './Auth.module.css';
import Login from './Login';
import Register from './Register';

const Auth = () => {

    return (
        <div className={style.mainContainer}>
            <div className={style.gridContainer}>
                <Register />
                <Login />
            </div>
        </div>
    );
};

export default Auth;