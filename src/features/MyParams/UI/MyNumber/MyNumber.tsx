import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyNumber.module.css';
import PersonParamsInput from 'shared/UI/Input/PersonParamsInput/PersonParamsInput';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/UI/Modal/Modal';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getSessionProgress } from 'entities/Session';
import { exampleActions } from 'entities/Example';
import { getParamsNumber, sessionParamsActions } from 'entities/SessionParams';

interface MyNumberProps {
    standardNumber: number[];
}

export const MyNumber = memo(({ standardNumber }: MyNumberProps) => {

    const [isModal, setIsModal] = useState(false);
    const duration = useSelector(getParamsNumber);
    const sessionProgress = useSelector(getSessionProgress);
    const isActive = !standardNumber.includes(duration);
    const dispatch = useDispatch();

    const showModalMyNumber = () => {
        if (!sessionProgress) {
            setIsModal(true);
        }
    };

    function changeNumberInSession(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const isNumber = testNumber(value);

        if (isNumber) {
            dispatch(sessionParamsActions.changeNumber((value === '0') ? 10 : value));
            dispatch(exampleActions.generateSeed());
        }
    }

    return (
        <>
            <OutlineButton 
                className={classNames(style.number, { [style.numberActive]: isActive })}
                onClick={showModalMyNumber}
            >
                <span>
                    __
                </span>
            </OutlineButton>
            <Modal visible={isModal} setVisible={setIsModal}>
                Задайте собственное количество примеров:
                <PersonParamsInput onInput={changeNumberInSession} />
            </Modal>
        </>
    );
});
