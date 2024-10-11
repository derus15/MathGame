import React from 'react';
import style from './AccountUserInfo.module.css';
import { UpdateUserButton } from 'features/UpdateUserData';
import { useGetAccountInfoQuery } from '../api/accountUserInfoApi';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import { Circle } from 'shared/UI/Circle/Circle';
import { AvatarCircle, useGetUserAvatarQuery } from 'features/GenerateAvatar';

export const AccountUserInfo = () => {

    const { data: accountInfo } = useGetAccountInfoQuery();
    const { data: seed } = useGetUserAvatarQuery();
    const normalizeTotalTime = timeNormalization(accountInfo?.totalTimeInfo);

    return (
        <div className={style.avatarBackground}>
            <div className={style.positionCircleContainer}>

                <div className={style.circleContainer}>
                    <span className={style.circleTitle}>Решено примеров</span>
                    <Circle front={accountInfo?.totalExampleInfo} className={style.circle} />
                </div>

                <div className={style.circleAvatarContainer}>
                    <AvatarCircle seed={seed.avatarSeed} />
                    <div className={style.userName}>{accountInfo?.user?.name}</div>
                </div>

                <div className={style.circleContainer}>
                    <span className={style.circleTitle}>Часов в игре</span>
                    <Circle front={normalizeTotalTime} className={style.circle} />
                </div>
            </div>

            <UpdateUserButton />

        </div>
    );
};
