import React, { useEffect } from 'react';
import style from './Account.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authData } from '../../redux/Slices/backSlices/authSlice';
import { Navigate } from 'react-router-dom';
import { timeNormalization } from '../../helpers/timeNormalization';
import { getData } from '../../redux/Slices/backSlices/querySlice';

const Account = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(authData);

    const data = useSelector(state => state.query.data);
    const fetchingTime = data?.counterTime?.[0]?.total_time;
    const exampleCount = data?.counterExample?.[0]?.total_example;
    const name = data?.user?.name;

    const normalTime = timeNormalization(fetchingTime);

    useEffect(() => {
        const fetch = async () => {
            await dispatch(getData());
        };

        fetch().catch((err) => {
            console.log(err);
        });

    }, []);

    if (!isAuth) {
        return <Navigate to='/auth' />;
    }

    return (

        <div className={style.mainContainer}>
            <div className={style.avatarBackground}>

                <div className={style.positionCircleContainer}>

                    <div className={style.circleContainer}>
                        <span className={style.circleTitle}>Решено примеров</span>
                        <div className={style.circle}> {exampleCount ? exampleCount : 0} </div>
                    </div>

                    <div className={style.circleAvatar}>
                        <img src='/Avatar.jpg' alt='Аватарка' className={style.avatarImage} />
                        <div className={style.userName}>{name}</div>
                    </div>

                    <div className={style.circleContainer}>
                        <span className={style.circleTitle}>Часов в игре</span>
                        <div className={style.circle}>{normalTime}</div>
                    </div>
                </div>

            </div>

            <div className={style.anotherTiles}>
                <div className={style.tiles}></div>
                <div className={style.tiles}></div>
            </div>
            <span className={style.comingSoon}>Скоро будет добавлено...</span>

        </div>
    );
};

export default Account;