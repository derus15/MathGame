import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderAccount from './HeaderAccount';
import { OneTry } from 'features/Modifications';
import Toast from 'shared/UI/Toaster/Toast';

const Header = () => (
    <header className={style.containerHeader}>
        <div className={style.logoModsContainer}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <OneTry />
            <Toast />
        </div>
        <HeaderAccount />
    </header>
);

export default Header;
