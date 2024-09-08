import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { AccountInfo } from './AccountInfo/AccountInfo';
import { OneTry } from 'features/Modifications';
import { PersonalSeed } from 'features/PersonalSeed';
import { DevInfoBoard } from 'widgets/DevInfoBoard';

export const Header = () => (
    <header className={style.containerHeader}>
        <div className={style.logoModsContainer}>
            <Link to="/">
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <div className={style.modificationsContainer}>
                <OneTry />
                <PersonalSeed />
            </div>
            {__IS_DEV__ && <DevInfoBoard />}
        </div>
        <AccountInfo />
    </header>
);
