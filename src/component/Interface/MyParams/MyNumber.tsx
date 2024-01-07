import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../../UI/Modal/Modal';
import style from '../Interface.module.css';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from '../../../redux/types';
import { OutlineButton } from '../../../UI/Button/OutlineButton/OutlineButton';
import { classNames } from '../../../helpers/classNames/classNames';

interface MyNumberProps {
    changeNumberInSession: (a: number) => void;
    standardNumber: number[];
}

const MyNumber = ({ changeNumberInSession, standardNumber }: MyNumberProps) => {

    const [modalMyNumber, setMyNumber] = useState(false);
    const duration = useSelector((state: StateSchema) => state.interface.number);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const isActive = !standardNumber.includes(duration);

    const showModalMyNumber = () => {
        if (!sessionProgress) {
            setMyNumber(true);
        }
    };

    return (
        <>
            <OutlineButton 
                className={classNames(style.number, { [style.numberActive]: isActive })}
                onClick={showModalMyNumber}
            >
                __
            </OutlineButton>
            {modalMyNumber && (
                <Modal visible={modalMyNumber} setVisible={setMyNumber}>
                    Задайте собственное количество примеров:
                    <PersonParamsInput callback={changeNumberInSession} />
                </Modal>
            )}
        </>
    );
};

export default MyNumber;
