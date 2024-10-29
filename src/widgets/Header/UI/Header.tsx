import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { AccountInfo } from './AccountInfo/AccountInfo';
import { DevInfoBoard } from 'widgets/DevInfoBoard';
import { ModificationsList } from '../UI/ModificationsList/ModificationsList';

export const Header = () => (
    <header className={style.containerHeader}>
        <div className={style.logoModsContainer}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <ModificationsList />
            {__IS_DEV__ && <DevInfoBoard />}
        </div>
        <AccountInfo />
    </header>
);
