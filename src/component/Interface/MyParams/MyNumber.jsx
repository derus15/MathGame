import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MyModal from '../../../UI/Modal/MyModal';
import classes from '../Interface.module.css';
import PersonParamsInput from '../../../UI/Input/PersonParamsInput/PersonParamsInput';

const MyNumber = ({ changeNumberInSession }) => {
    const [modalMyNumber, setMyNumber] = useState(false);
    const duration = useSelector((state) => state.interface.number);
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);

    const getClassName = (id) => {
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
                <MyModal visible={modalMyNumber} setVisible={setMyNumber}>
                    Задайте собственное количество примеров:
                    <PersonParamsInput callback={changeNumberInSession} />
                </MyModal>
            )}
        </>
    );
};

export default MyNumber;
