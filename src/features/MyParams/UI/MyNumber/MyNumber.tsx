import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyNumber.module.css';
import PersonParamsInput from 'shared/UI/Input/PersonParamsInput/PersonParamsInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/UI/Modal/Modal';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getInterfaceNumber, interfaceActions } from 'widgets/Interface';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

interface MyNumberProps {
    standardNumber: number[];
}

export const MyNumber = ({ standardNumber }: MyNumberProps) => {

    const [isModal, setIsModal] = useState(false);
    const duration = useSelector(getInterfaceNumber);
    const sessionProgress = useSelector(getSessionProgress);
    const isActive = !standardNumber.includes(duration);
    const dispatch = useDispatch();
    const { refreshExample } = useRefreshExample();

    const showModalMyNumber = () => {
        if (!sessionProgress) {
            setIsModal(true);
        }
    };

    function changeNumberInSession(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const isNumber = testNumber(value);

        if (isNumber) {
            dispatch(interfaceActions.changeNumber((value === '0') ? 10 : value));
            refreshExample();
        }
    }

    return (
        <>
            <OutlineButton 
                className={classNames(style.number, { [style.numberActive]: isActive })}
                onClick={showModalMyNumber}
            >
                __
            </OutlineButton>
            <Modal visible={isModal} setVisible={setIsModal}>
                Задайте собственное количество примеров:
                <PersonParamsInput onInput={changeNumberInSession} />
            </Modal>
        </>
    );
};
