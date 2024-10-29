import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import style from './ModificationList.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OneTry } from 'features/Modifications';
import { PersonalSeed } from 'features/PersonalSeed';
import { useFirstRender } from 'shared/lib/hooks/useFirstRender';

export const ModificationsList = () => {

    const location = useLocation();
    const isHome = location.pathname === '/';
    const isFirstRender = useFirstRender();

    return (
        isHome ? (
            <div className={classNames(
                style.modificationsContainer, 
                { [style.modificationsContainerAnimation]: !isFirstRender },
            )}
            >
                <OneTry />
                <PersonalSeed />
            </div>
        ) : (
            <div className={style.homeLinkContainer}>
                <Link
                    to="/"
                    className={classNames(
                        style.homeLink, 
                        { [style.homeLinkContainerAnimation]: !isFirstRender },
                    )}
                >
                    ~
                </Link>
            </div>
        )
    );
};
