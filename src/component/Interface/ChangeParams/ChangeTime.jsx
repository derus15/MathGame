import React, { useState } from 'react';
import classes from '../Interface.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {changeTime} from '../../../redux/Slices/frontSlices/interfaceSlice';
import MyTime from '../MyParams/MyTime';

const ChangeTime = ({ sessionProgress }) => {

    const [modalMyTime, setMyTime] = useState(false);
    const duration = useSelector(state => state.interface.time);
    const dispatch = useDispatch();

    function changeTimeInSession(time) {
        if (!sessionProgress) {
            dispatch(changeTime(time));
        }
    }

    const getClassName = (id) => {
        if (String(duration) === id) {
            return `${classes.time} ${classes.timeActive}`;
        }
        return classes.time;
    };

    const showModalMyTime = () => {
        setMyTime(true);
    };

    const myTime = () => {
        if (duration !== '15' && duration !== '30' && duration !== '60') {
            return duration
        }
    }

    return (
        <div className={classes.containerTime}>
            <div className={getClassName('15')} onClick={() => changeTimeInSession('15')}>0:15</div>
            <div className={getClassName('30')} onClick={() => changeTimeInSession('30')}>0:30</div>
            <div className={getClassName('60')} onClick={() => changeTimeInSession('60')}>1:00</div>
            <div className={getClassName(myTime())} onClick={showModalMyTime}>__</div>
            <MyTime modalMyTime={modalMyTime} setMyTime={setMyTime} sessionProgress={sessionProgress} />
        </div>
    );
};

export default ChangeTime;


