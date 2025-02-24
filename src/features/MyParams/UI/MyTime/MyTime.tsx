import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyTime.module.css';
import Modal from 'shared/UI/Modal/Modal';
import PersonParamsInput from 'shared/UI/Input/PersonParamsInput/PersonParamsInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { classNames } from 'shared/lib/classNames/classNames';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getSessionProgress } from 'entities/Session';
import { exampleActions } from 'entities/Example';
import { getParamsTime, sessionParamsActions } from 'entities/SessionParams';

interface MyTimeProps {
    standardTime: number[];
}

export const MyTime = memo(({ standardTime }: MyTimeProps) => {

    const [isModal, setIsModal] = useState(false);
    const duration = useSelector(getParamsTime);
    const sessionProgress = useSelector(getSessionProgress);
    const isActive = !standardTime.includes(duration);
    const dispatch = useDispatch();

    const showModalMyTime = () => {
        if (!sessionProgress) {
            setIsModal(true);
        }
    };

    function changeTimeInSession(e: React.ChangeEvent<HTMLInputElement>) {

        const { value } = e.target;
        const isNumber = testNumber(value);

        if (isNumber) {
            dispatch(sessionParamsActions.changeTime((value === '0') ? 15 : value));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <>
            <OutlineButton
                className={classNames(style.time, { [style.timeActive]: isActive })}
                onClick={showModalMyTime}
            >
                <span>
                    __
                </span>
            </OutlineButton>
            <Modal visible={isModal} setVisible={setIsModal}>
                Задайте собственное время сессии:
                <PersonParamsInput onInput={changeTimeInSession} />
            </Modal>
        </>
    );
});
