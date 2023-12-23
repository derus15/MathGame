import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import Modal from '../../../UI/Modal/Modal';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from '../../../redux/types';

interface MyTimeProps {
    changeTimeInSession: (a: number) => void
}

const MyTime = ({ changeTimeInSession }: MyTimeProps) => {

    const [modalMyTime, setMyTime] = useState(false);
    const duration = useSelector((state: StateSchema) => state.interface.time);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    const getClassName = (id: number | null) => {
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
                <Modal visible={modalMyTime} setVisible={setMyTime}>
                    Задайте собственное время сессии:
                    <PersonParamsInput callback={changeTimeInSession} />
                </Modal>
            )}
        </>
    );
};

export default MyTime;
