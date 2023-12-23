import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../../UI/Modal/Modal';
import classes from '../Interface.module.css';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';
import { StateSchema } from '../../../redux/types';

interface MyNumberProps {
    changeNumberInSession: (a:number) => void
}

const MyNumber = ({ changeNumberInSession }: MyNumberProps) => {

    const [modalMyNumber, setMyNumber] = useState(false);
    const duration = useSelector((state: StateSchema) => state.interface.number);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    const getClassName = (id: number | null) => {
        if (duration === id) {
            return `${classes.number} ${classes.numberActive}`;
        }
        return classes.number;
    };

    const showModalMyNumber = () => {
        if (!sessionProgress) {
            setMyNumber(true);
        }
    };

    const myNumber = () => {
        if (duration !== 10 && duration !== 15 && duration !== 20) {
            return duration;
        }
        return null;
    };

    return (
        <>
            <div className={getClassName(myNumber())} onClick={showModalMyNumber}>__
            </div>
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
