import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {

    return (
        <div className={style.containerHeader}>
            <Link to='/'>
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            {/*<Link to='/auth'>*/}
            {/*    <div className={style.profile} ></div>*/}
            {/*</Link>*/}
        </div>
    );
};

export default Header;