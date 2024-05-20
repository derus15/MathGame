import React from 'react';
import style from './Account.module.css';
import { AccountUserInfo } from 'widgets/AccountUserInfo';
import Loading from 'shared/UI/Loading/Loading';
import {
    HighlightsBoards, 
} from 'widgets/AccountHighlightsBoards';
import { Footer } from 'widgets/Footer';
import { PageLayout } from 'shared/UI/PageLayout/PageLayout';
import { useGetAccountInfoQuery } from 'widgets/AccountUserInfo/api/accountUserInfoApi';
import { useGetHighlightBoardQuery } from 'widgets/AccountHighlightsBoards/api/AccountHighlightBoardApi';

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
