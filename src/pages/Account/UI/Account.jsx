import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Account.module.css';
import { timeNormalization } from 'helpers/timeNormalization/timeNormalization';
import { getData } from 'redux/Slices/backSlices/account/accountSlice';
import Avatar from '../../../../public/assets/Avatar.jpg';

const Account = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.account.data);
    const fetchingTime = data?.counterTime?.[0]?.total_time;
    const exampleCount = data?.counterExample?.[0]?.total_example;
    const name = data?.user?.name;

    const normalTime = timeNormalization(fetchingTime);

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (

        <div className={style.mainContainer}>
            <div className={style.avatarBackground}>

                <div className={style.positionCircleContainer}>

                    <div className={style.circleContainer}>
                        <span className={style.circleTitle}>Решено примеров</span>
                        <div className={style.circle}>
                            {exampleCount || 0}
                        </div>
                    </div>

                    <div className={style.circleAvatar}>
                        <img src={Avatar} alt="Аватарка" className={style.avatarImage} />
                        <div className={style.userName}>{name}</div>
                    </div>

                    <div className={style.circleContainer}>
                        <span className={style.circleTitle}>Часов в игре</span>
                        <div className={style.circle}>{normalTime}</div>
                    </div>
                </div>

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
