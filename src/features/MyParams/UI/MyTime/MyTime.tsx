import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyTime.module.css';
import Modal from 'shared/UI/Modal/Modal';
import PersonParamsInput from 'shared/UI/Input/PersonParamsInput/PersonParamsInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { classNames } from 'shared/lib/classNames/classNames';
import { interfaceActions, getInterfaceTime } from '../../../../widgets/Interface';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

interface MyTimeProps {
    standardTime: number[];
}

export const MyTime = ({ standardTime }: MyTimeProps) => {

    const [isModal, setIsModal] = useState(false);
    const duration = useSelector(getInterfaceTime);
    const sessionProgress = useSelector(getSessionProgress);
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
