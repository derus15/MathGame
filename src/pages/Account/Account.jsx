import React, { useEffect } from 'react';
import style from './Account.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authData } from '../../redux/Slices/backSlices/authSlice';
import { Navigate } from 'react-router-dom';
import {timeNormalization} from '../../helpers/timeNormalization';
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
                <div style={{ display: 'flex', gap: '270px' }}>
                    <div style={{ marginTop: '10px' }}>
                        <span className={style.circleTitle} style={{ left: '129px' }}>Решено примеров</span>
                        <div className={style.circle} style={{ marginTop: '50px' }}>
                            {exampleCount ? exampleCount : 0}
                        </div>
                    </div>
                    <div className={style.circleAvatar}>
                        <img src='/Avatar.jpg' alt='Аватарка' width={'120px'} height={'120px'}
                             style={{ borderRadius: '50%' }} />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <span className={style.circleTitle} style={{ right: '159px' }}>Часов в игре</span>
                        <div className={style.circle} style={{ marginTop: '50px' }}>
                            {normalTime}
                        </div>
                    </div>
                </div>
                <div className={style.userName}>{name}</div>
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