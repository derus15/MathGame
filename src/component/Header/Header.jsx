import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderAccount from './HeaderAccount';

function Header() {
    return (
        <header className={style.containerHeader}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <HeaderAccount />
        </header>
    );
}

export default Header;
