import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import { interfaceActions } from '../../../redux/Slices/frontSlices/interface/interfaceSlice';
import MyTime from '../MyParams/MyTime';
import SelectTime from '../../../UI/InterfaceSelects/SelectTime/SelectTime';
import { StateSchema } from '../../../redux/types';

const ChangeTime = () => {
    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    function changeTimeInSession(time: number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeTime(time));
        }
    }

    return (
        <div className={classes.containerTime}>
            <SelectTime time={15} onClick={() => changeTimeInSession(15)}>0:15</SelectTime>
            <SelectTime time={30} onClick={() => changeTimeInSession(30)}>0:30</SelectTime>
            <SelectTime time={60} onClick={() => changeTimeInSession(60)}>1:00</SelectTime>
            <MyTime changeTimeInSession={changeTimeInSession} />
        </div>
    );
};

export default ChangeTime;
