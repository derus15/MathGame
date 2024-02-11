import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import ProfileSvg from '/public/assets/profile.svg';
import LogoutSvg from '/public/assets/logout.svg';
import { getIsAuth, userActions } from 'entities/User';

const HeaderAccountName = () => {

    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    const data = useSelector((state) => state.auth.user);
    const name = data?.name;

    const Logout = () => {
        dispatch(userActions.logout());
    };

    // useEffect(() => {
    //     dispatch(userActions.initAuth());
    // }, [isAuth]);

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

export default HeaderAccountName;
