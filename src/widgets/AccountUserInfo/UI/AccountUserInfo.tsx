import React from 'react';
import style from './AccountUserInfo.module.css';
import Avatar from '../../../../public/assets/Avatar.jpg';
import { UpdateUserButton } from 'features/UpdateUserData';
import { useSelector } from 'react-redux';
import {
    getAccountName,
    getTotalExample, getTotalTime,
} from 'features/FetchAccountData';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';

export const AccountUserInfo = () => {
    
    const totalTime = useSelector(getTotalTime);
    const totalExample = useSelector(getTotalExample);
    const name = useSelector(getAccountName);

    const normalizeTotalTime = timeNormalization(totalTime);

    return (
        <div className={style.avatarBackground}>

            <div className={style.positionCircleContainer}>

                <div className={style.circleContainer}>
                    <span className={style.circleTitle}>Решено примеров</span>
                    <div className={style.circle}>
                        {totalExample || 0}
                    </div>
                </div>

                <div className={style.circleAvatar}>
                    <img src={Avatar} alt="Аватарка" className={style.avatarImage} />
                    <div className={style.userName}>{name}</div>
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
