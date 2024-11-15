import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './AccountInfo.module.css';
import ProfileSvg from '/public/assets/profile.svg';
import LogoutSvg from '/public/assets/logout.svg';
import { getIsAuth, useGetInitAuthDataQuery, useLazyLogoutUserQuery, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { Loader } from 'shared/UI/Loader/Loader';
import { useGetHeaderNameQuery } from '../../api/HeaderNameApi';

export const AccountInfo = () => {

    const isAuth = useSelector(getIsAuth);
    const token = localStorage.getItem('token');
    const [logoutUser] = useLazyLogoutUserQuery();
    const { data: user, isLoading: isLoadingName } = useGetHeaderNameQuery(undefined, { skip: !isAuth });
    const { isLoading: isLoadingInit } = useGetInitAuthDataQuery(undefined, { skip: !token });
    const dispatch = useAppDispatch();

    const Logout = () => {
        logoutUser();
        dispatch(userActions.logout());
    };

    return (
        isAuth ? (
            <div className={style.containerAccountInfo}>
                <Link className={style.linkAccount} to="/account">
                    <span className={style.username}>{user?.name}</span>
                </Link>
                {isLoadingName && <Loader isLoading={isLoadingName} className={style.loaderName} />}
                <Link to="/auth" onClick={Logout} className={style.logoutContainer}>
                    <LogoutSvg />
                </Link>
            </div>
        ) : (
            <div className={style.containerAccountInfo}>
                {isLoadingInit && <Loader isLoading={isLoadingInit} className={style.loaderInit} />}
                <Link className={style.linkProfile} to="/auth">
                    <svg className={style.profile}>
                        <ProfileSvg />
                    </svg>
                </Link>
            </div>
        )
    );
};
