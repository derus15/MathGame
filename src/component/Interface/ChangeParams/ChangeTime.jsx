import React from 'react';
import { useDispatch } from 'react-redux';
import classes from '../Interface.module.css';
import { changeTime } from '../../../redux/Slices/frontSlices/interfaceSlice';
import MyTime from '../MyParams/MyTime';
import SelectTime from '../../../UI/InterfaceSelects/SelectTime/SelectTime';

function ChangeTime({ sessionProgress }) {
    const dispatch = useDispatch();

    function changeTimeInSession(time) {
        if (!sessionProgress) {
            dispatch(changeTime(time));
        }
    }

    return (
        <div className={classes.containerTime}>
            <SelectTime time={15} onClick={() => changeTimeInSession(15)}>0:15</SelectTime>
            <SelectTime time={30} onClick={() => changeTimeInSession(30)}>0:30</SelectTime>
            <SelectTime time={60} onClick={() => changeTimeInSession(60)}>1:00</SelectTime>
            <MyTime sessionProgress={sessionProgress} changeTimeInSession={changeTimeInSession} />
        </div>
    );
}

export default ChangeTime;
