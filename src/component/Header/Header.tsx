import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderAccount from './HeaderAccount';
import Modifications from './Modifications';

const Header = () => (
    <header className={style.containerHeader}>
        <div className={style.logoModsContainer}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <Modifications />
        </div>
        <HeaderAccount />
    </header>
);

export default Header;
