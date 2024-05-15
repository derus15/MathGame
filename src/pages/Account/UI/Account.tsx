import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Account.module.css';
import { AccountUserInfo } from 'widgets/AccountUserInfo';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import Loading from 'shared/UI/Loading/Loading';
import {
    fetchHighlightsBoardData, 
    getBoardLoadingStatus,
    HighlightsBoards, 
} from 'widgets/AccountHighlightsBoards';
import { Footer } from 'widgets/Footer';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';
import { useGetAccountInfoQuery } from 'widgets/AccountUserInfo/api/accountUserInfoApi';

const Account = () => {

    const dispatch = useAppDispatch();
    const { isLoading: accountLoadingStatus } = useGetAccountInfoQuery();
    const boardLoadingStatus = useSelector(getBoardLoadingStatus);
    const isLoading = accountLoadingStatus || boardLoadingStatus === 'loading';

    useEffect(() => {
        dispatch(fetchHighlightsBoardData());
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <PageLayout hideFooter>
            <div className={style.mainContainer}>
                <AccountUserInfo />
                <HighlightsBoards />
                <div className={style.anotherTiles}>
                    <div className={style.tiles} />
                </div>
                <div className={style.soonContainer}>
                    <span className={style.comingSoon}>Скоро будет добавлено...</span>
                </div>
                <Footer className={style.footer} />
            </div>
        </PageLayout>
    );
};

export default Account;
