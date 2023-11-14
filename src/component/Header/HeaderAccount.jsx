import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { authData, logout } from '../../redux/Slices/backSlices/authSlice';
import ProfileSvg from '../../public/assets/profile.svg';
import LogoutSvg from '../../public/assets/logout.svg';

const HeaderAccount = () => {
    const data = useSelector(authData);
    const dispatch = useDispatch();

    const dataNameMe = useSelector((state) => state.auth.data);
    const dataName = useSelector((state) => state.query.data);
    const nameMe = dataNameMe?.name;
    const name = dataName?.user?.name;

    const Logout = () => {
        dispatch(logout());
    };

    return (
        <Link to="/account">
            <div className={style.containerAccount}>
                {data ? (
                    <>
                        <span className={style.username}>{name || nameMe}</span>
                        <svg onClick={Logout} className={style.logoContainer}>
                            <LogoutSvg className={style.logout} />
                        </svg>
                    </>
                ) : (
                    <svg
                        className={style.profile}
                        width="30px"
                        height="30px"
                        style={{ marginLeft: '90px' }}
                    >
                        <ProfileSvg className={style.svg} />
                    </svg>
                )}
            </div>
        </Link>
    );
};

export default HeaderAccount;
