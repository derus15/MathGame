import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyParams.module.css';
import Modal from 'UI/Modal/Modal';
import PersonParamsInput from '../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from 'redux/types';
import { OutlineButton } from 'UI/Button/OutlineButton/OutlineButton';
import { classNames } from 'helpers/classNames/classNames';
import { interfaceActions, getTime } from '../Interface';
import { testNumber } from 'helpers/testNumber/testNumber';
import { useRefreshExample } from 'component/Example';

interface MyTimeProps {
    standardTime: number[];
}

const MyTime = ({ standardTime }: MyTimeProps) => {

    const [isModal, setIsModal] = useState(false);
    const duration = useSelector(getTime);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const isActive = !standardTime.includes(duration);
    const dispatch = useDispatch();
    const { refreshExample } = useRefreshExample();

    const showModalMyTime = () => {
        if (!sessionProgress) {
            setIsModal(true);
        }
    };

    function changeTimeInSession(e: React.ChangeEvent<HTMLInputElement>) {

        const { value } = e.target;
        const isNumber = testNumber(value);

        if (isNumber) {
            dispatch(interfaceActions.changeTime((value === '0') ? 15 : value));
            refreshExample();
        }
    }

    return (
        <>
            <OutlineButton
                className={classNames(style.time, { [style.timeActive]: isActive })}
                onClick={showModalMyTime}
            >
                __
            </OutlineButton>
            <Modal visible={isModal} setVisible={setIsModal}>
                Задайте собственное время сессии:
                <PersonParamsInput onInput={changeTimeInSession} />
            </Modal>
        </>
    );
};

export default MyTime;
