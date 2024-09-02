import React from 'react';
import style from './Account.module.css';
import { AccountUserInfo, useGetAccountInfoQuery } from 'widgets/AccountUserInfo';
import Loading from 'shared/UI/Loading/Loading';
import {
    HighlightsBoards, useGetHighlightBoardQuery,
} from 'widgets/AccountHighlightsBoards';
import { Footer } from 'widgets/Footer';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';

const Account = () => {

    const { isLoading: accountLoadingStatus } = useGetAccountInfoQuery();
    const { isLoading: boardLoadingStatus } = useGetHighlightBoardQuery();
    const isLoading = accountLoadingStatus || boardLoadingStatus;

    if (isLoading) {
        return <Loading />;
    }

    return (
        <PageLayout hideFooter>
            <div className={style.mainContainer}>
                <AccountUserInfo />
                <HighlightsBoards />
                <div className={style.comingSoonContainer}>
                    <div className={style.comingSoonTiles} />
                    <span className={style.comingSoonTitle}>Скоро будет добавлено...</span>
                </div>
            </div>
            <Footer className={style.footer} />
        </PageLayout>
    );
};

export default Account;
