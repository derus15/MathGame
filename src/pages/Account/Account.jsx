import React, { useEffect } from 'react';
import style from './Account.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authData } from '../../redux/Slices/authSlice';
import { Navigate } from 'react-router-dom';
import { getData } from '../../redux/Slices/querySlice';

const Account = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(authData);
    const data = useSelector(state => state.query.data);
    const timeCount = data?.counterTime?.[0]?.total_time;
    const exampleCount = data?.counterExample?.[0]?.total_example;
    const name = data?.user?.name;

    const timeNormalization = () => {

        if (!timeCount) {
            return ('00:00:00');
        }

        let hours = Math.floor(timeCount / 3600).toString();
        if (hours.length < 2) {
            hours = '0' + hours;
        }

        let minutes = Math.floor((timeCount % 3600) / 60).toString();
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        let sec = (timeCount % 60).toString();
        if (sec.length < 2) {
            sec = '0' + sec;
        }

        return (`${hours}:${minutes}:${sec}`);

    };

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
                            {timeNormalization()}
                        </div>
                    </div>
                </div>
                <div className={style.userName}>{name}</div>
            </div>
            <span className={style.comingSoon}>Скоро будет добавлено...</span>
            <div className={style.anotherTiles}>
                <div className={style.tiles}></div>
                <div className={style.tiles}></div>
            </div>
        </div>
    );
};

export default Account;