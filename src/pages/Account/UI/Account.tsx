import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Account.module.css';
import { fetchAccountData, getAccountLoadingStatus } from 'features/FetchAccountData';
import { AccountUserInfo } from 'widgets/AccountUserInfo';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import Loading from 'shared/UI/Loading/Loading';

const Account = () => {

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getAccountLoadingStatus) === 'loading';

    useEffect(() => {
        dispatch(fetchAccountData());
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (

        <div className={style.mainContainer}>
            <AccountUserInfo />

            <div className={style.anotherTiles}>
                <div className={style.tiles} />
                <div className={style.tiles} />
            </div>

            <div className={style.soonContainer}>
                <span className={style.comingSoon}>Скоро будет добавлено...</span>
            </div>

        </div>
    );
};

export default Account;
