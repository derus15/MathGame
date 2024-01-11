import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface.module.css';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from '../../../redux/types';
import { OutlineButton } from '../../../UI/Button/OutlineButton/OutlineButton';
import { classNames } from '../../../helpers/classNames/classNames';
import Modal from '../../../UI/Modal/Modal';
import { testNumber } from '../../../helpers/testNumber/testNumber';
import { interfaceActions } from '../../../redux/Slices/frontSlices/interface/interfaceSlice';

interface MyNumberProps {
    standardNumber: number[];
}

const MyNumber = ({ standardNumber }: MyNumberProps) => {

    const [isModal, setIsModal] = useState(false);
    const duration = useSelector((state: StateSchema) => state.interface.number);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
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
            dispatch(interfaceActions.changeNumber((value === '0') ? 10 : value));
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

export default MyNumber;
