import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { authActions, fetchAuthMe } from 'redux/Slices/backSlices/auth/authSlice';
import ProfileSvg from '/public/assets/profile.svg';
import LogoutSvg from '/public/assets/logout.svg';

const HeaderAccount = () => {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const data = useSelector((state) => state.auth.user);
    const name = data?.name;

    const Logout = () => {
        dispatch(authActions.logout());
    };

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, [isAuth]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isAuth ? (
                <Link className={style.link} to="/account">
                    <div className={style.containerAccount}>
                        <span className={style.username}>{name}</span>
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

export default HeaderAccount;
