import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authData, logout } from '../../redux/Slices/backSlices/authSlice';

const Header = () => {

    const data = useSelector(authData);
    const dispatch = useDispatch();
    const dataNameMe = useSelector(state => state.auth.data);
    const dataName = useSelector(state => state.query.data);
    const nameMe = dataNameMe?.name;
    const name = dataName?.user?.name;

    const Logout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    };

    return (
        <div className={style.containerHeader}>
            <Link to='/'>
                <h1 className={style.logo}>MathGame</h1>
            </Link>
            <Link to='/account'>
                <div className={style.containerAccount}>
                    {data
                        ?
                        <>
                            <span className={style.username}>{name || nameMe}</span>
                            <svg onClick={Logout} className={style.logoContainer}>
                                <image xlinkHref='/logout.svg' className={style.logout} />
                            </svg>
                        </>
                        :
                        <svg className={style.profile} width='30px' height='30px' style={{ marginLeft: '90px' }}>
                            <image xlinkHref='/profile.svg' className={style.svg} />
                        </svg>
                    }
                </div>
            </Link>
        </div>
    );
};

export default Header;