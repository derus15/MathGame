import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Account.module.css';
import { AccountUserInfo, fetchAccountData, getAccountLoadingStatus } from 'widgets/AccountUserInfo';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import Loading from 'shared/UI/Loading/Loading';
import {
    fetchHighlightsBoardData, 
    getBoardLoadingStatus,
    HighlightsBoards, 
} from 'widgets/AccountHighlightsBoards';

const Account = () => {

    const dispatch = useAppDispatch();
    const accountLoadingStatus = useSelector(getAccountLoadingStatus);
    const boardLoadingStatus = useSelector(getBoardLoadingStatus);
    const isLoading = accountLoadingStatus === 'loading' || boardLoadingStatus === 'loading';

    useEffect(() => {
        dispatch(fetchAccountData());
        dispatch(fetchHighlightsBoardData());
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (

        <div className={style.mainContainer}>
            <AccountUserInfo />
            <HighlightsBoards />
        </div>
    );
};

export default Account;
