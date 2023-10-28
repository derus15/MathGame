import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import MyModal from '../../../UI/Modal/MyModal';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';

const MyTime = ({ sessionProgress, changeTimeInSession }) => {
    const [modalMyTime, setMyTime] = useState(false);
    const duration = useSelector((state) => state.interface.time);

    const getClassName = (id) => {
        if (duration === id) {
            return `${classes.time} ${classes.timeActive}`;
        }
        return classes.time;
    };

    const showModalMyTime = () => {
        if (!sessionProgress) {
            setMyTime(true);
        }
    };

    const myTime = () => {
        if (duration !== 15 && duration !== 30 && duration !== 60) {
            return duration;
        }
        return null;
    };

    return (
        <>
            <div className={getClassName(myTime())} onClick={showModalMyTime}>__</div>
            {modalMyTime && (
                <MyModal visible={modalMyTime} setVisible={setMyTime}>
                    Задайте собственное время сессии:
                    <PersonParamsInput callback={changeTimeInSession} />
                </MyModal>
            )}
        </>
    );
};

export default MyTime;
