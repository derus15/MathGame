import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderAccountName from './HeaderAccountName';
import { OneTry } from 'features/Modifications';
import Toast from 'shared/UI/Toaster/Toast';

export const Header = () => (
    <header className={style.containerHeader}>
        <div className={style.logoModsContainer}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <OneTry />
            <Toast />
        </div>
        <HeaderAccountName />
    </header>
);
