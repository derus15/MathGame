import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderAccountName from './HeaderAccountName';
import { OneTry } from 'features/Modifications';

export const Header = () => (
    <header className={style.containerHeader}>
        <div className={style.logoModsContainer}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <OneTry />
        </div>
        <HeaderAccountName />
    </header>
);
