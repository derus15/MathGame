import React from 'react';
import style from './AccountUserInfo.module.css';
import { UpdateUserButton } from 'features/UpdateUserData';
import { useGetAccountInfoQuery } from '../api/accountUserInfoApi';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import { Circle } from 'shared/UI/Circle/Circle';
import { AvatarGenerator, useGetUserAvatarQuery } from 'features/GenerateAvatar';

export const AccountUserInfo = () => {

    const { data } = useGetAccountInfoQuery();
    const { data: seed } = useGetUserAvatarQuery();
    const normalizeTotalTime = timeNormalization(data.counterTime?.[0]?.total_time);

    return (
        <div className={style.avatarBackground}>
            <div className={style.positionCircleContainer}>

                <div className={style.circleContainer}>
                    <span className={style.circleTitle}>Решено примеров</span>
                    <Circle front={data.counterExample?.[0]?.total_example || 0} className={style.circle} />
                </div>

                <div className={style.circleAvatarContainer}>
                    <Circle
                        className={style.circleAvatar}
                        front={<AvatarGenerator seed={seed.avatarSeed} />}
                        back={<AvatarGenerator seed={seed.avatarSeed} isInvertColor />}
                    />
                    <div className={style.userName}>{data.user?.name}</div>
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
