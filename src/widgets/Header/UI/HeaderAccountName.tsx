import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import ProfileSvg from '/public/assets/profile.svg';
import LogoutSvg from '/public/assets/logout.svg';
import { getIsAuth, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import Loader from 'shared/UI/Loader/Loader';
import { useGetHeaderNameQuery } from '../model/api/HeaderNameApi';

const HeaderAccountName = () => {

    const isAuth = useSelector(getIsAuth);
    const { data: user, isLoading } = useGetHeaderNameQuery(undefined, { skip: !isAuth });
    const dispatch = useAppDispatch();

    const Logout = () => {
        dispatch(userActions.logout());
    };

    return (
        isAuth ? (
            <div className={style.containerAccount}>
                <Link className={style.link} to="/account">
                    <span className={style.username}>{user?.name}</span>
                </Link>
                {isLoading && <Loader isLoading={isLoading} className={style.loader} />}
                <Link to="/account" onClick={Logout} className={style.logoutContainer}>
                    <LogoutSvg />
                </Link>
            </div>
        ) : (
            <Link className={style.link} to="/auth">
                <svg className={style.profile}>
                    <ProfileSvg />
                </svg>
            </Link>
        )
    );
};

export default HeaderAccountName;
