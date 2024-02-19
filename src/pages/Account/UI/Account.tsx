import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Account.module.css';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import Avatar from '../../../../public/assets/Avatar.jpg';
import {
    fetchAccountData,
    getAccountLoadingStatus,
    getAccountName,
    getTotalExample,
    getTotalTime,
} from 'features/FetchAccountData';
import Loading from 'shared/UI/Loading/Loading';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { UpdateUserButton } from 'features/UpdateUserData';

const Account = () => {

    const dispatch = useAppDispatch();

    const totalTime = useSelector(getTotalTime);
    const totalExample = useSelector(getTotalExample);
    const name = useSelector(getAccountName);
    const isLoading = useSelector(getAccountLoadingStatus) === 'loading';

    const normalizeTotalTime = timeNormalization(totalTime);

    useEffect(() => {
        dispatch(fetchAccountData());
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (

        <div className={style.mainContainer}>
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
