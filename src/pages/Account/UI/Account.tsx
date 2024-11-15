import React from 'react';
import style from './Account.module.css';
import { AccountUserInfo, useGetAccountInfoQuery } from 'widgets/AccountUserInfo';
import { Loading } from 'shared/UI/Loading/Loading';
import {
    HighlightsBoards, useGetHighlightBoardQuery,
} from 'widgets/AccountHighlightsBoards';
import { useGetUserAvatarQuery } from 'features/GenerateAvatar';

const Account = () => {

    const { isLoading: accountLoadingStatus } = useGetAccountInfoQuery();
    const { isLoading: boardLoadingStatus } = useGetHighlightBoardQuery();
    const { isLoading: userAvatarLoadingStatus } = useGetUserAvatarQuery();
    const isLoading = accountLoadingStatus || boardLoadingStatus || userAvatarLoadingStatus;

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className={style.mainContainer}>
            <AccountUserInfo />
            <HighlightsBoards />
            <div className={style.comingSoonContainer}>
                <div className={style.comingSoonTiles} />
                <span className={style.comingSoonTitle}>Скоро будет добавлено...</span>
            </div>
        </main>
    );
};

export default Account;
