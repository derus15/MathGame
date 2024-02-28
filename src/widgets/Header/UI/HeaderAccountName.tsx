import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import ProfileSvg from '/public/assets/profile.svg';
import LogoutSvg from '/public/assets/logout.svg';
import { getIsAuth, userActions } from 'entities/User';
import { initAuthData } from '../model/services/initAuthData/initAuthData';
import { getHeaderUsername } from '../model/selectors/getHeaderUsername';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';

const HeaderAccountName = () => {

    const isAuth = useSelector(getIsAuth);
    const username = useSelector(getHeaderUsername);
    const dispatch = useAppDispatch();

    const Logout = () => {
        dispatch(userActions.logout());
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(initAuthData());
        }
    }, [isAuth]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isAuth ? (
                <Link className={style.link} to="/account">
                    <div className={style.containerAccount}>
                        <span className={style.username}>{username}</span>
                        <svg onClick={Logout} className={style.logoutContainer}>
                            <LogoutSvg />
                        </svg>
                    </div>
                </Link>
            ) : (
                <Link className={style.link} to="/auth">
                    <svg className={style.profile}>
                        <ProfileSvg />
                    </svg>
                </Link>
            )}
        </>
    );
};

export default HeaderAccountName;
