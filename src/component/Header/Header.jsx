import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderAccount from './HeaderAccount';


const Header = () => {

    return (
        <div className={style.containerHeader}>
            <Link to='/'>
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <HeaderAccount />
        </div>
    );
};

export default Header;