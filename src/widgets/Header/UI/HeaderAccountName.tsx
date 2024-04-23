import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import ProfileSvg from '/public/assets/profile.svg';
import LogoutSvg from '/public/assets/logout.svg';
import { getIsAuth, userActions } from 'entities/User';
import { fetchAccountName } from '../model/services/fetchAccountName/fetchAccountName';
import { getHeaderUsername } from '../model/selectors/getHeaderUsername';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { getHeaderLoadingStatus } from 'widgets/Header/model/selectors/getHeaderLoadingStatus';
import Loader from 'shared/UI/Loader/Loader';

const HeaderAccountName = () => {

    const isAuth = useSelector(getIsAuth);
    const username = useSelector(getHeaderUsername);
    const isLoading = useSelector(getHeaderLoadingStatus) === 'loading';
    const dispatch = useAppDispatch();

    const Logout = () => {
        dispatch(userActions.logout());
    };

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchAccountName());
        }
    }, [isAuth]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isAuth ? (
                <div className={style.containerAccount}>
                    <Link className={style.link} to="/account">
                        <span className={style.username}>{username}</span>
                    </Link>
                    <Link to="/account" onClick={Logout} className={style.logoutContainer}>
                        <LogoutSvg />
                    </Link>
                </div>
            ) : (
                <Link className={style.link} to="/auth">
                    <Loader isLoading={isLoading} className={style.loader} />
                    <svg className={style.profile}>
                        <ProfileSvg />
                    </svg>
                </Link>
            )}
        </>
    );
};

export default HeaderAccountName;
