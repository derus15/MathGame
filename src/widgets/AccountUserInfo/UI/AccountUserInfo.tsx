import React from 'react';
import style from './AccountUserInfo.module.css';
import Avatar from '../../../../public/assets/Avatar.jpg';
import { UpdateUserButton } from 'features/UpdateUserData';
import { useGetAccountInfoQuery } from '../api/accountUserInfoApi';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';

export const AccountUserInfo = () => {

    const { data } = useGetAccountInfoQuery();
    const normalizeTotalTime = timeNormalization(data.counterTime?.[0]?.total_time);

    return (
        <div className={style.avatarBackground}>
            <div className={style.positionCircleContainer}>

                <div className={style.circleContainer}>
                    <span className={style.circleTitle}>Решено примеров</span>
                    <div className={style.circle}>
                        {data.counterExample?.[0]?.total_example || 0}
                    </div>
                </div>

                <div className={style.circleAvatar}>
                    <img src={Avatar} alt="Аватарка" className={style.avatarImage} />
                    <div className={style.userName}>{data.user?.name}</div>
                </div>

                <div className={style.circleContainer}>
                    <span className={style.circleTitle}>Часов в игре</span>
                    <div className={style.circle}>{normalizeTotalTime}</div>
                </div>
            </div>

            <UpdateUserButton />

        </div>
    );
};
