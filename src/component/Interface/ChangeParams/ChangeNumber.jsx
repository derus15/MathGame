import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import { changeNumber } from '../../../redux/Slices/frontSlices/interfaceSlice';
import MyNumber from '../MyParams/MyNumber';
import SelectNumber from '../../../UI/InterfaceSelects/SelectNumber/SelectNumber';

const ChangeNumber = () => {
    const dispatch = useDispatch();
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);

    function changeNumberInSession(number) {
        if (!sessionProgress) {
            dispatch(changeNumber(number));
        }
    }

    return (
        <div className={classes.containerNumber}>
            <SelectNumber number={10} onClick={() => changeNumberInSession(10)}>10</SelectNumber>
            <SelectNumber number={15} onClick={() => changeNumberInSession(15)}>15</SelectNumber>
            <SelectNumber number={20} onClick={() => changeNumberInSession(20)}>20</SelectNumber>
            <MyNumber changeNumberInSession={changeNumberInSession} />
        </div>
    );
};

export default ChangeNumber;
