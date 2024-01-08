import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../Interface.module.css';
import Modal from '../../../UI/Modal/Modal';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from '../../../redux/types';
import { OutlineButton } from '../../../UI/Button/OutlineButton/OutlineButton';
import { classNames } from '../../../helpers/classNames/classNames';

interface MyTimeProps {
    changeTimeInSession: (a: number) => void;
    standardTime: number[];
}

const MyTime = ({ changeTimeInSession, standardTime }: MyTimeProps) => {

    const [modalMyTime, setMyTime] = useState(false);
    const duration = useSelector((state: StateSchema) => state.interface.time);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const isActive = !standardTime.includes(duration);

    const showModalMyTime = () => {
        if (!sessionProgress) {
            setMyTime(true);
        }
    };

    return (
        <>
            <OutlineButton
                className={classNames(style.time, { [style.timeActive]: isActive })}
                onClick={showModalMyTime}
            >
                __
            </OutlineButton>
            <Modal visible={modalMyTime} setVisible={setMyTime}>
                Задайте собственное время сессии:
                <PersonParamsInput callback={changeTimeInSession} />
            </Modal>
        </>
    );
};

export default MyTime;
