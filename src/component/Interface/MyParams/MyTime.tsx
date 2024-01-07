import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../Interface.module.css';
import Modal from '../../../UI/Modal/Modal';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from '../../../redux/types';
import { OutlineButton } from '../../../UI/Button/OutlineButton/OutlineButton';

interface MyTimeProps {
    changeTimeInSession: (a: number) => void
}

const MyTime = ({ changeTimeInSession }: MyTimeProps) => {

    const [modalMyTime, setMyTime] = useState(false);
    const duration = useSelector((state: StateSchema) => state.interface.time);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    const getClassName = (id: number | null) => {
        if (duration === id) {
            return `${style.time} ${style.timeActive}`;
        }
        return style.time;
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
            <OutlineButton className={getClassName(myTime())} onClick={showModalMyTime}>__</OutlineButton>
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
